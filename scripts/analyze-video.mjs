import ZAI from 'z-ai-web-dev-sdk';
import { readFileSync } from 'fs';

const VIDEO = '/home/z/my-project/upload/20261025-0658-26.9893886.mp4';

const PROMPT = `You are a senior motion-design engineer analyzing a UI animation reference video (about 3 seconds, screen recording of a website section).

Describe with EXTREME precision, in numbered sections:
1) LAYOUT: what UI elements exist (cards, headings, images, icons, buttons), their arrangement (grid/stack/column), colors, corner radius, shadows, borders.
2) MOTION SEQUENCE step-by-step with approximate timestamps (video is ~3.13s, 30fps): what moves, in what order, from where to where (direction + distance estimate), rotation, scale, opacity changes.
3) INTERACTION PATTERN: is this scroll-driven (scrolling down => cards stack / expand / pin), hover-driven, or auto-playing? Do cards overlap/stack on top of each other? Does anything rotate or fan out like a deck?
4) EASING & FEEL: smooth/springy/snappy, fast or slow, any overshoot.
5) ANY TEXT visible on screen (quote it exactly).

Be exhaustive about the animation mechanics - I need to reproduce them in code.`;

async function main() {
  const zai = await ZAI.create();
  const b64 = readFileSync(VIDEO).toString('base64');
  const dataUrl = `data:video/mp4;base64,${b64}`;

  const response = await zai.chat.completions.createVision({
    model: 'glm-4.6v',
    messages: [
      {
        role: 'user',
        content: [
          { type: 'text', text: PROMPT },
          { type: 'video_url', video_url: { url: dataUrl } },
        ],
      },
    ],
    thinking: { type: 'enabled' },
  });

  const reply = response.choices?.[0]?.message?.content;
  console.log(reply ?? JSON.stringify(response, null, 2));
}

main().catch((e) => {
  console.error('FAILED:', e?.message || e);
  process.exit(1);
});
