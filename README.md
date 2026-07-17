# 201001_webp_avif サンプル

このリポジトリは『[次世代画像フォーマットのWebP、そしてAVIF。変わり続ける画像形式に対応するweb制作の黄金解](https://ics.media/entry/201001/)』のサンプルとデモです。詳細は記事をご覧ください。

## picture_sample

PNG / JPEG / WebP / AVIF の画質・サイズを比較するデモです。

## vite_sample

Node.js 20 以上を用意します。

```sh
cd vite_sample
npm install
npm run build
```

`public/img/` に JPEG または PNG を置きます。`npm run build` で `dist/img/` に元画像と WebP/AVIF が出力されます。
