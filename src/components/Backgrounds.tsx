export enum Backgrounds {
  DarkBlue =
    "var(--avisi-color-dark-blue)",
  WhiteWithFooter =
    "url('/assets/avisi_logo.png') 22.5px calc(100% - var(--avisi-logo-margin)) / auto var(--avisi-logo-height) no-repeat" +
    "," +
    "linear-gradient(" +
    "  to bottom," +
    "  var(--avisi-color-background) 0%," +
    "  var(--avisi-color-background) calc(100% - var(--avisi-logo-height) - 0.1% - (var(--avisi-logo-margin) * 2))," +
    "  var(--avisi-color-dark-blue) calc(100% - var(--avisi-logo-height) + 0.1% - (var(--avisi-logo-margin) * 2))," +
    "  var(--avisi-color-dark-blue) 100%" +
    ")",
  RightHalfGrayWithFooter =
    "url('/assets/avisi_logo.png') 22.5px calc(100% - var(--avisi-logo-margin)) / auto var(--avisi-logo-height) no-repeat" +
    "," +
    "linear-gradient(" +
    "  to bottom," +
    "  transparent 0%," +
    "  transparent calc(100% - var(--avisi-logo-height) - 0.1% - (var(--avisi-logo-margin) * 2))," +
    "  var(--avisi-color-dark-blue) calc(100% - var(--avisi-logo-height) + 0.1% - (var(--avisi-logo-margin) * 2))," +
    "  var(--avisi-color-dark-blue) 100%" +
    ")" +
    "," +
    "linear-gradient(" +
    "  to right," +
    "  var(--avisi-color-background) 0%," +
    "  var(--avisi-color-background) 49.9%," +
    "  var(--avisi-color-light-gray) 50.1%," +
    "  var(--avisi-color-light-gray) 100%" +
    ")",
}
