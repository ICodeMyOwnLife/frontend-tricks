import { QuestionInfo } from 'types/app-common';
import CodeViewer from 'components/CodeViewer';

const questions: QuestionInfo[] = [
  {
    question: `How to write CSS media queries?`,
    answer: (
      <div>
        <p>
          Use <code>@media</code> CSS at-rule
        </p>
        <CodeViewer language="css">
          {`.MediaQuery1-mediaItem-173 {
  visibility: collapse;
}
@media (resolution: 1dppx) {
  .MediaQuery1-mediaItem0-174 {
    visibility: visible;
  }
}
@media (resolution: 96dpi) {
  .MediaQuery1-mediaItem1-175 {
    visibility: visible;
  }
}
@media (max-resolution: 160dpi) {
  .MediaQuery1-mediaItem2-176 {
    visibility: visible;
  }
}
@media (min-resolution: 80dpi) {
  .MediaQuery1-mediaItem3-177 {
    visibility: visible;
  }
}
@media (min-resolution: 92dpi) and (max-resolution: 128dpi) {
  .MediaQuery1-mediaItem4-178 {
    visibility: visible;
  }
}
@media (width: 1000px) {
  .MediaQuery1-mediaItem5-179 {
    visibility: visible;
  }
}
@media (max-width: 800px) {
  .MediaQuery1-mediaItem6-180 {
    visibility: visible;
  }
}
@media (min-width: 1200px) {
  .MediaQuery1-mediaItem7-181 {
    visibility: visible;
  }
}
@media (min-width: 600px) and (max-width: 900px) {
  .MediaQuery1-mediaItem8-182 {
    visibility: visible;
  }
}
@media (height: 480px) {
  .MediaQuery1-mediaItem9-183 {
    visibility: visible;
  }
}
@media (max-height: 400px) {
  .MediaQuery1-mediaItem10-184 {
    visibility: visible;
  }
}
@media (min-height: 720px) {
  .MediaQuery1-mediaItem11-185 {
    visibility: visible;
  }
}
@media (min-height: 320px) and (max-height: 640px) {
  .MediaQuery1-mediaItem12-186 {
    visibility: visible;
  }
}
@media (aspect-ratio: 5/3) {
  .MediaQuery1-mediaItem13-187 {
    visibility: visible;
  }
}
@media (max-aspect-ratio: 3/2) {
  .MediaQuery1-mediaItem14-188 {
    visibility: visible;
  }
}
@media (min-aspect-ratio: 2/1) {
  .MediaQuery1-mediaItem15-189 {
    visibility: visible;
  }
}
@media (min-aspect-ratio: 4/3) and (max-aspect-ratio: 16/9) {
  .MediaQuery1-mediaItem16-190 {
    visibility: visible;
  }
}
@media (color: 24) {
  .MediaQuery1-mediaItem17-191 {
    visibility: visible;
  }
}
@media (max-color: 12) {
  .MediaQuery1-mediaItem18-192 {
    visibility: visible;
  }
}
@media (min-color: 32) {
  .MediaQuery1-mediaItem19-193 {
    visibility: visible;
  }
}
@media (min-color: 16) and (max-color: 36) {
  .MediaQuery1-mediaItem20-194 {
    visibility: visible;
  }
}
@media (color-gamut: srgb) {
  .MediaQuery1-mediaItem21-195 {
    visibility: visible;
  }
}
@media (color-gamut: p3) {
  .MediaQuery1-mediaItem22-196 {
    visibility: visible;
  }
}
@media (color-gamut: rec2020) {
  .MediaQuery1-mediaItem23-197 {
    visibility: visible;
  }
}
@media (color-index: 1) {
  .MediaQuery1-mediaItem24-198 {
    visibility: visible;
  }
}
@media (min-color-index: 0) {
  .MediaQuery1-mediaItem25-199 {
    visibility: visible;
  }
}
@media (max-color-index: 2) {
  .MediaQuery1-mediaItem26-200 {
    visibility: visible;
  }
}
@media monochrome {
  .MediaQuery1-mediaItem27-201 {
    visibility: visible;
  }
}
@media (monochrome: 0) {
  .MediaQuery1-mediaItem28-202 {
    visibility: visible;
  }
}
@media (grid: 0) {
  .MediaQuery1-mediaItem29-203 {
    visibility: visible;
  }
}
@media (grid: 1) {
  .MediaQuery1-mediaItem30-204 {
    visibility: visible;
  }
}
@media (orientation: landscape) {
  .MediaQuery1-mediaItem31-205 {
    visibility: visible;
  }
}
@media (orientation: portrait) {
  .MediaQuery1-mediaItem32-206 {
    visibility: visible;
  }
}
@media (prefers-color-scheme: no-preference) {
  .MediaQuery1-mediaItem33-207 {
    visibility: visible;
  }
}
@media (prefers-color-scheme: light) {
  .MediaQuery1-mediaItem34-208 {
    visibility: visible;
  }
}
@media (prefers-color-scheme: dark) {
  .MediaQuery1-mediaItem35-209 {
    visibility: visible;
  }
}
@media (prefers-reduced-motion: no-preference) {
  .MediaQuery1-mediaItem36-210 {
    visibility: visible;
  }
}
@media (prefers-reduced-motion: reduce) {
  .MediaQuery1-mediaItem37-211 {
    visibility: visible;
  }
}
@media (scan: interlace) {
  .MediaQuery1-mediaItem38-212 {
    visibility: visible;
  }
}
@media (scan: progressive) {
  .MediaQuery1-mediaItem39-213 {
    visibility: visible;
  }
}
@media (pointer: none) {
  .MediaQuery1-mediaItem40-214 {
    visibility: visible;
  }
}
@media (pointer: coarse) {
  .MediaQuery1-mediaItem41-215 {
    visibility: visible;
  }
}
@media (pointer: fine) {
  .MediaQuery1-mediaItem42-216 {
    visibility: visible;
  }
}
@media (any-pointer: none) {
  .MediaQuery1-mediaItem43-217 {
    visibility: visible;
  }
}
@media (any-pointer: coarse) {
  .MediaQuery1-mediaItem44-218 {
    visibility: visible;
  }
}
@media (any-pointer: fine) {
  .MediaQuery1-mediaItem45-219 {
    visibility: visible;
  }
}
@media (hover: hover) {
  .MediaQuery1-mediaItem46-220 {
    visibility: visible;
  }
}
@media (hover: none) {
  .MediaQuery1-mediaItem47-221 {
    visibility: visible;
  }
}
@media (any-hover: hover) {
  .MediaQuery1-mediaItem48-222 {
    visibility: visible;
  }
}
@media (any-hover: none) {
  .MediaQuery1-mediaItem49-223 {
    visibility: visible;
  }
}
@media (display-mode: fullscreen) {
  .MediaQuery1-mediaItem50-224 {
    visibility: visible;
  }
}
@media (display-mode: standalone) {
  .MediaQuery1-mediaItem51-225 {
    visibility: visible;
  }
}
@media (display-mode: minimal-ui) {
  .MediaQuery1-mediaItem52-226 {
    visibility: visible;
  }
}
@media (display-mode: browser) {
  .MediaQuery1-mediaItem53-227 {
    visibility: visible;
  }
}`}
        </CodeViewer>
      </div>
    ),
    references: [
      {
        name: `[MDN] @media`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/@media`,
      },
      {
        name: `[MDN] Using media queries`,
        url: `https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries`,
      },
    ],
  },
];

export default questions;
