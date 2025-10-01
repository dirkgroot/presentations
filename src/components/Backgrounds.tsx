export enum Backgrounds {
  FancyBackground =
    "url('/assets/background.png') 0 0 / cover no-repeat",
  FancyWithFooter =
    "url('/assets/avisi_logo.png')" +
    "  left calc(var(--avisi-footer-padding) * 2) bottom var(--avisi-logo-margin) / auto var(--avisi-logo-height)" +
    "  no-repeat" +
    "," +
    "url('/assets/avisi_25_jaar_logo.png')" +
    "  right calc(var(--avisi-footer-padding) * 2) bottom calc(var(--avisi-logo-margin) * 0.25) / auto calc(var(--avisi-logo-height) * 2)" +
    "  no-repeat" +
    "," +
    FancyBackground,
  WhiteWithFooter =
    "url('/assets/avisi_logo.png')" +
    "  left calc(var(--avisi-footer-padding) * 2) bottom var(--avisi-logo-margin) / auto var(--avisi-logo-height)" +
    "  no-repeat" +
    "," +
    "url('/assets/avisi_25_jaar_logo.png')" +
    "  right calc(var(--avisi-footer-padding) * 2) bottom calc(var(--avisi-logo-margin) * 0.25) / auto calc(var(--avisi-logo-height) * 2)" +
    "  no-repeat" +
    "," +
    "linear-gradient(" +
    "  to bottom," +
    "  var(--avisi-color-background) 0%," +
    "  var(--avisi-color-background) calc(100% - var(--avisi-footer-height))," +
    "  transparent calc(100% - var(--avisi-footer-height))," +
    "  transparent 100%" +
    ")" +
    "," +
    FancyBackground,
  RightHalfGrayWithFooter =
    "linear-gradient(" +
    "  to right," +
    "  var(--avisi-color-background) 0%," +
    "  var(--avisi-color-background) 50%," +
    "  var(--avisi-color-light-gray) 50%," +
    "  var(--avisi-color-light-gray) 100%" +
    ") top/100% calc(100% - var(--avisi-footer-height)) no-repeat" +
    "," +
    WhiteWithFooter
}
