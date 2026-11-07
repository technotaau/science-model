# Generate Avni's full stage speech in her AI voice (XTTS-v2, CPML non-commercial, family's consent),
# sentence by sentence, then read every sentence back with Whisper to catch mispronounced words.
import json, sys, re, difflib, wave
import numpy as np
exec(open("xt.py").read().split('if __name__ == "__main__":')[0])
from faster_whisper import WhisperModel

SAY = json.load(open("pron.json")) if os.path.exists("pron.json") else {}
speech = json.load(open("speech.json"))
only = set(sys.argv[1:])  # optional: regenerate only these sentence keys, e.g. s-sbm-2
w = WhisperModel("medium", device="cpu", compute_type="int8", cpu_threads=4)
norm = lambda t: re.sub(r"[^a-z0-9 ]", " ", t.lower()).split()
report = json.load(open("report.json")) if os.path.exists("report.json") and only else {}
for sec in speech:
    for i, sent in enumerate(sec["sentences"]):
        key = "%s-%d" % (sec["id"], i)
        if only and key not in only: continue
        text = sent
        for a, b in SAY.items(): text = text.replace(a, b)
        # the voice model is a little random: try up to 4 times and keep the clearest attempt
        best = None
        for attempt in range(int(os.environ.get('TRIES','4'))):
            dur = say(text, "try.wav", speed=0.95)
            segs, _ = w.transcribe("try.wav", language="en", beam_size=5)
            heard = " ".join(x.text.strip() for x in segs)
            ratio = difflib.SequenceMatcher(None, norm(sent), norm(heard)).ratio()
            if best is None or ratio > best[0]:
                best = (ratio, heard, dur); os.replace("try.wav", "seg_%s.wav" % key)
            if ratio >= 0.93: break
        ratio, heard, dur = best
        report[key] = {"text": sent, "said": text, "heard": heard, "match": round(ratio, 2), "dur": round(dur, 2)}
        print(key, round(ratio, 2), "|", heard, flush=True)
json.dump(report, open("report.json", "w"), indent=1, ensure_ascii=False)
