This is a basic project template for [Liqvid](https://liqvidjs.org).

## Installation

Clone this repository, then do

```bash
npm install
npm start
```

## Recording

Click on the recording (circle) icon in the controls.

Select Markers for recording (to record Audio, you must access the page over HTTPS). Use the keyboard command to start/stop recording. Then:

1. Save the audio file (if any) to `audio/audio.webm`.

2. Copy the markers to `src/markers.ts`.

3. Copy the code recording to `src/recordings.ts`.

## Replaying

To view the code recording, change `src/production/media-url.ts` to export `"."`. (Once you are satisfied with your recording, you should upload your audio files to a static assets host and put that as the media URL instead.) Then compile in **production** mode:

```bash
NODE_ENV=production npm start
```

## Mastering

See the [Mastering guide](https://liqvidjs.org/docs/guide/mastering#audio) for how to fix the browser recording (which doesn't come with the metadata needed for seeking) and convert it to mp4.

To generate thumbnail previews for the ractive, use [`rp-master thumbs`](https://liqvidjs.org/docs/rp-master/thumbs). These should again be uploaded to your static assets host.

To produce a static rendering of the ractive, use [`rp-master render`](https://liqvidjs.org/docs/rp-master/render/).

## Tips

Beware that `@env` is a magic directory that refers to either `src/development` or `src/production` depending on `NODE_ENV`. This is specified in `webpack.config.js`.
