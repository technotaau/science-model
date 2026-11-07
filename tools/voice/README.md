# Avni's AI practice voice

Makes `site/media/avni-ai-speech.m4a` and `site/avni-ai.js`, the full stage speech in an AI voice. The voice is cloned from Avni's own recording at Malerkotla (10 Oct 2026).

**Permission and labelling**
- Avni's family (Jakhar Singh) gave consent on 7 Nov 2026.
- The output is for practice only.
- The output is always labelled on the site as AI, not a real recording.

**Licence**
- The model is XTTS-v2, under the Coqui Public Model License 1.0.0, which allows non-commercial use only: https://huggingface.co/coqui/XTTS-v2/blob/main/LICENSE.txt
- The family accepted these terms on 7 Nov 2026.
- Anyone who receives the output must also get this licence link. The stage page shows it.

**Steps** (run in a folder that holds `ref1.wav`, `ref2.wav` and `ref3.wav`)
1. Make the reference clips: three cleaned clips of her voice from the recording, made with ffmpeg (highpass, lowpass, afftdn, loudnorm), 24 kHz mono.
2. Write the sentences to `speech.json`, taken from content.js `stage.sections[].sample`. Split on sentence ends but never at decimal points (e.g. 5.7).
3. Put phonetic spellings that are used for speaking only in `pron.json` (e.g. "Avni Choudhary" → "Avnee Chowdhary"). The subtitles keep the real spelling.
4. Run `python3 gen_full.py [keys…]`. It makes each sentence up to 4 times (set TRIES to change this), reads each one back with Whisper, and keeps the clearest. Check `report.json`.
5. Run `python3 assemble.py`. It joins the sentences with pauses, sets the part to point at for each sentence, and writes the m4a and the timeline.

Needs: torch 2.8 CPU, coqui-tts, faster-whisper and ffmpeg.
