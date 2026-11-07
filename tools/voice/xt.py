# XTTS-v2 voice from Avni's own recording, for practice. Licence: Coqui Public Model License 1.0.0
# (non-commercial), accepted by Avni's family (Jakhar Singh) on 7 Nov 2026:
# https://huggingface.co/coqui/XTTS-v2/blob/main/LICENSE.txt
import sys, time, os
os.environ["COQUI_TOS_AGREED"] = "1"  # family's explicit acceptance, see above
import torch, torchaudio
from TTS.tts.configs.xtts_config import XttsConfig
from TTS.tts.models.xtts import Xtts
from TTS.utils.manage import ModelManager
torch.set_num_threads(4)
t0 = time.time()
path = ModelManager().download_model("tts_models/multilingual/multi-dataset/xtts_v2")[0]
if os.path.isfile(path): path = os.path.dirname(path)
cfg = XttsConfig(); cfg.load_json(os.path.join(path, "config.json"))
m = Xtts.init_from_config(cfg); m.load_checkpoint(cfg, checkpoint_dir=path, eval=True)
gpt, spk = m.get_conditioning_latents(audio_path=["ref1.wav", "ref2.wav", "ref3.wav"], gpt_cond_len=30, max_ref_length=30)
print("loaded", round(time.time() - t0), "s", flush=True)

def say(text, out, speed=0.92):
    o = m.inference(text, "en", gpt, spk, temperature=0.6, speed=speed, repetition_penalty=5.0, enable_text_splitting=False)
    w = torch.tensor(o["wav"]).unsqueeze(0)
    torchaudio.save(out, w, 24000)
    return w.shape[1] / 24000

if __name__ == "__main__":
    t1 = time.time()
    d = say("Good morning, respected judges, teachers and my dear friends. Jai Hind! I am Avni Choudhary from Class 6, and my topic is Clean India Mission and Waste Management.", "test.wav")
    print("test audio", round(d, 1), "s, took", round(time.time() - t1), "s", flush=True)
