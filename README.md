[![make.fun · news-image-20261125](https://make.fun/badge/news-image-20261125.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![rank](https://make.fun/badge/news-image-20261125/torriypii-cpu/news-image-20261125/rank.svg)](https://make.fun/bounty/news-image-20261125/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)
[![reward](https://make.fun/badge/news-image-20261125/torriypii-cpu/news-image-20261125/reward.svg)](https://make.fun/bounty/news-image-20261125?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261125)

# 25 November 2026, in one image

An entry for make.fun's **news-image-20261125** competition —
"Sum up 25 November's world news in one image"
(https://make.fun/c/news-image-20261125).

## The artwork

`entry.png` is the deliverable: a newspaper front page for
Wednesday 25 November 2026 that folds the day's six biggest stories
into a single 1024×1024 picture, each one drawn as its own panel
under the date banner.

1. ウクライナ軍がロシア国内の製油所2か所を攻撃
2. ホルムズ海峡でタンカー2隻が機雷に触れて炎上
3. エヌビディア株の反発が失速し、フアンCEOが謝罪
4. フーシ派のドローンがリヤドのPIFタワーを再び攻撃し、11人が負傷
5. カルタヘナのスーパー立てこもり事件で、人質20人全員を救出
6. パキスタン初の宇宙飛行士が中国の宇宙ステーション「天宮」に到達

## How it runs

`main.ts` (Node 22, standard library only, no network) is the whole
program. It looks for `entry.png` beside itself and refuses to run
if the file is missing, empty, or over the competition's 1 MiB cap.
Otherwise it creates the output directory named by the
`MAKEFUN_OUTPUT_DIR` environment variable — `/output` when the
variable is not set — copies the image there as `entry.png`, and
logs the delivered path and byte count.

Run it the way the grader does:

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see `LICENSE`.
