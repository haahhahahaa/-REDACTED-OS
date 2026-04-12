import { useState, useEffect, useCallback } from 'react'
import { MdLocationOn } from 'react-icons/md'

function MeteoconsClearDay(props) {
  return (<svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 512 512" {...props}><defs><linearGradient id="SVGeq4GoeLw" x1={150} x2={234} y1={119.2} y2={264.8} gradientUnits="userSpaceOnUse"><stop offset={0} stopColor="#fbbf24"></stop><stop offset={0.5} stopColor="#fbbf24"></stop><stop offset={1} stopColor="#f59e0b"></stop></linearGradient><symbol id="SVG0a04Kbxn" viewBox="0 0 384 384"><circle cx={192} cy={192} r={84} fill="url(#SVGeq4GoeLw)" stroke="#f8af18" strokeMiterlimit={10} strokeWidth={6}></circle><path fill="none" stroke="#fbbf24" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={24} d="M192 61.7V12m0 360v-49.7m92.2-222.5l35-35M64.8 319.2l35.1-35.1m0-184.4l-35-35m254.5 254.5l-35.1-35.1M61.7 192H12m360 0h-49.7"><animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 192 192; 45 192 192"></animateTransform></path></symbol></defs><use width={384} height={384} href="#SVG0a04Kbxn" transform="translate(64 64)"></use></svg>);
}
function MeteoconsOvercast(props) {
  return (<svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 512 512" {...props}><defs><linearGradient id="SVGMeEfudbH" x1={99.5} x2={232.6} y1={30.7} y2={261.4} gradientUnits="userSpaceOnUse"><stop offset={0} stopColor="#f3f7fe"></stop><stop offset={0.5} stopColor="#f3f7fe"></stop><stop offset={1} stopColor="#deeafb"></stop></linearGradient><symbol id="SVGMnBDAb4I" viewBox="0 0 350 222"><path fill="url(#SVGMeEfudbH)" stroke="#e6effc" strokeMiterlimit={10} strokeWidth={6} d="m291 107l-2.5.1A83.9 83.9 0 0 0 135.6 43A56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z"></path></symbol></defs><use width={350} height={222} href="#SVGMnBDAb4I" transform="translate(81 145)"><animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></animateTransform></use></svg>);
}
function MeteoconsFog(props) {
  return (<svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 512 512" {...props}><defs><linearGradient id="SVGMeEfudbH" x1={99.5} x2={232.6} y1={30.7} y2={261.4} gradientUnits="userSpaceOnUse"><stop offset={0} stopColor="#f3f7fe"></stop><stop offset={0.5} stopColor="#f3f7fe"></stop><stop offset={1} stopColor="#deeafb"></stop></linearGradient><linearGradient id="SVGqOTCtbDJ" x1={52.7} x2={133.4} y1={9.6} y2={149.3} gradientUnits="userSpaceOnUse"><stop offset={0} stopColor="#9ca3af"></stop><stop offset={0.5} stopColor="#9ca3af"></stop><stop offset={1} stopColor="#6b7280"></stop></linearGradient><linearGradient id="SVGfYL9ge7l" x1={96} x2={168} y1={-2.4} y2={122.3} gradientUnits="userSpaceOnUse"><stop offset={0} stopColor="#d4d7dd"></stop><stop offset={0.5} stopColor="#d4d7dd"></stop><stop offset={1} stopColor="#bec1c6"></stop></linearGradient><linearGradient id="SVGE7Tzucao" x2={168} y1={-50.4} y2={74.3} href="#SVGfYL9ge7l"></linearGradient><symbol id="SVGa7dgPttN" viewBox="0 0 200.3 126.1"><path fill="url(#SVGqOTCtbDJ)" stroke="#848b98" strokeMiterlimit={10} d="M.5 93.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5A32.4 32.4 0 0 0 .5 93.1Z" strokeWidth={1}></path></symbol><symbol id="SVGMnBDAb4I" viewBox="0 0 350 222"><path fill="url(#SVGMeEfudbH)" stroke="#e6effc" strokeMiterlimit={10} strokeWidth={6} d="m291 107l-2.5.1A83.9 83.9 0 0 0 135.6 43A56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z"></path></symbol><symbol id="SVGxmf1dE1T" viewBox="0 0 398 222"><use width={200.3} height={126.1} href="#SVGa7dgPttN" transform="translate(198 27)"><animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></animateTransform></use><use width={350} height={222} href="#SVGMnBDAb4I"><animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></animateTransform></use></symbol><symbol id="SVGeMndHdqM" viewBox="0 0 264 72"><path fill="none" stroke="url(#SVGfYL9ge7l)" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={24} d="M12 60h240"><animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-24 0; 24 0; -24 0"></animateTransform></path><path fill="none" stroke="url(#SVGE7Tzucao)" strokeLinecap="round" strokeMiterlimit={10} strokeWidth={24} d="M12 12h240"><animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="24 0; -24 0; 24 0"></animateTransform></path></symbol></defs><use width={398} height={222} href="#SVGxmf1dE1T" transform="translate(68.84 145)"></use><use width={264} height={72} href="#SVGeMndHdqM" transform="translate(124 402)"></use></svg>);
}
function MeteoconsRain(props) {
  return (<svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 512 512" {...props}><defs><linearGradient id="SVGMeEfudbH" x1={99.5} x2={232.6} y1={30.7} y2={261.4} gradientUnits="userSpaceOnUse"><stop offset={0} stopColor="#f3f7fe"></stop><stop offset={0.5} stopColor="#f3f7fe"></stop><stop offset={1} stopColor="#deeafb"></stop></linearGradient><linearGradient id="SVGOUYaMden" x1={1381.3} x2={1399.5} y1={-1144.7} y2={-1097.4} gradientTransform="rotate(-9 8002.567 8233.063)" gradientUnits="userSpaceOnUse"><stop offset={0} stopColor="#0b65ed"></stop><stop offset={0.5} stopColor="#0a5ad4"></stop><stop offset={1} stopColor="#0950bc"></stop></linearGradient><linearGradient id="SVGnYYdJbFG" x1={1436.7} x2={1454.9} y1={-1137} y2={-1089.7} gradientTransform="rotate(-9 8009.537 8233.037)" href="#SVGOUYaMden"></linearGradient><linearGradient id="SVGFxZAUheB" x1={1492.1} x2={1510.3} y1={-1129.3} y2={-1082.1} gradientTransform="rotate(-9 8016.566 8233.078)" href="#SVGOUYaMden"></linearGradient><symbol id="SVGMnBDAb4I" viewBox="0 0 350 222"><path fill="url(#SVGMeEfudbH)" stroke="#e6effc" strokeMiterlimit={10} strokeWidth={6} d="m291 107l-2.5.1A83.9 83.9 0 0 0 135.6 43A56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z"></path></symbol><symbol id="SVGcjmqMeGn" viewBox="0 0 129 57"><path fill="url(#SVGOUYaMden)" stroke="#0a5ad4" strokeMiterlimit={10} d="M8.5 56.5a8 8 0 0 1-8-8v-40a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z" opacity={0} strokeWidth={1}><animateTransform id="SVGCFxShKvC" additive="sum" attributeName="transform" begin="0s" dur="1.139s" type="translate" values="0 -60; 0 60" repeatCount="indefinite"></animateTransform><animate id="SVGSmLlNdMf" attributeName="opacity" begin="0s" dur="1.139s" keyTimes="0; .25; 1" values="0; 1; 0" repeatCount="indefinite"></animate></path><path fill="url(#SVGnYYdJbFG)" stroke="#0a5ad4" strokeMiterlimit={10} d="M64.5 56.5a8 8 0 0 1-8-8v-40a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z" opacity={0} strokeWidth={1}><animateTransform id="SVGwqEgsd0M" additive="sum" attributeName="transform" begin="0.19s" dur="1.139s" type="translate" values="0 -60; 0 60" repeatCount="indefinite"></animateTransform><animate id="SVG0HsVRbPu" attributeName="opacity" begin="0.19s" dur="1.139s" keyTimes="0; .25; 1" values="0; 1; 0" repeatCount="indefinite"></animate></path><path fill="url(#SVGFxZAUheB)" stroke="#0a5ad4" strokeMiterlimit={10} d="M120.5 56.5a8 8 0 0 1-8-8v-40a8 8 0 0 1 16 0v40a8 8 0 0 1-8 8Z" opacity={0} strokeWidth={1}><animateTransform id="SVG2d2hbc3a" additive="sum" attributeName="transform" begin="0.38s" dur="1.139s" type="translate" values="0 -60; 0 60" repeatCount="indefinite"></animateTransform><animate id="SVGL0RBhe2i" attributeName="opacity" begin="0.38s" dur="1.139s" keyTimes="0; .25; 1" values="0; 1; 0" repeatCount="indefinite"></animate></path></symbol></defs><use width={350} height={222} href="#SVGMnBDAb4I" transform="translate(81 145)"></use><use width={129} height={57} href="#SVGcjmqMeGn" transform="translate(191.5 343.5)"></use></svg>);
}
function MeteoconsSnow(props) {
  return (<svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 512 512" {...props}><defs><linearGradient id="SVGMeEfudbH" x1={99.5} x2={232.6} y1={30.7} y2={261.4} gradientUnits="userSpaceOnUse"><stop offset={0} stopColor="#f3f7fe"></stop><stop offset={0.5} stopColor="#f3f7fe"></stop><stop offset={1} stopColor="#deeafb"></stop></linearGradient><linearGradient id="SVGHakO1cdU" x1={11.4} x2={32.8} y1={5.9} y2={43.1} gradientUnits="userSpaceOnUse"><stop offset={0} stopColor="#86c3db"></stop><stop offset={0.5} stopColor="#86c3db"></stop><stop offset={1} stopColor="#5eafcf"></stop></linearGradient><linearGradient id="SVGkrkRYmMF" x1={67.4} x2={88.8} y1={5.9} y2={43.1} href="#SVGHakO1cdU"></linearGradient><linearGradient id="SVGS0exAdfk" x1={123.4} x2={144.8} y1={5.9} y2={43.1} href="#SVGHakO1cdU"></linearGradient><symbol id="SVGMnBDAb4I" viewBox="0 0 350 222"><path fill="url(#SVGMeEfudbH)" stroke="#e6effc" strokeMiterlimit={10} strokeWidth={6} d="m291 107l-2.5.1A83.9 83.9 0 0 0 135.6 43A56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z"></path></symbol><symbol id="SVGrLXbQbMG" viewBox="0 0 156.2 49"><g><path fill="url(#SVGHakO1cdU)" stroke="#86c3db" strokeMiterlimit={10} d="m41.7 31l-5.8-3.3a13.7 13.7 0 0 0 0-6.5l5.8-3.2a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.3V4.5a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2L6.6 11A4 4 0 0 0 1 12.5A4 4 0 0 0 2.5 18l5.8 3.3a13.7 13.7 0 0 0 0 6.5L2.5 31A4 4 0 0 0 1 36.5a4 4 0 0 0 3.5 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.6 2a13.8 13.8 0 0 0 3 1.2v6.6a4 4 0 0 0 8.2 0v-6.6a14.2 14.2 0 0 0 5.6-3.2l6 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.4-2a4 4 0 0 0-1.4-5.5ZM19 29.7a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8a6 6 0 0 1 2.2 8.2a6.1 6.1 0 0 1-8.2 2.2Z" opacity={0} strokeWidth={1}><animateTransform additive="sum" attributeName="transform" dur="10.2s" repeatCount="indefinite" type="rotate" values="0 24 24; 360 24 24"></animateTransform><animate id="SVGifbapeDh" attributeName="opacity" begin="0s" dur="3.4s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0" repeatCount="indefinite"></animate></path><animateTransform id="SVGd5cUtb9b" additive="sum" attributeName="transform" begin="0s" dur="3.4s" type="translate" values="0 -36; 0 92;" repeatCount="indefinite"></animateTransform></g><g><path fill="url(#SVGkrkRYmMF)" stroke="#86c3db" strokeMiterlimit={10} d="m97.7 31l-5.8-3.3a13.7 13.7 0 0 0 0-6.5l5.8-3.2a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.3V4.5a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2L62.6 11a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.5L58.5 31a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.5 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.7 2a13.8 13.8 0 0 0 3 1.2v6.6a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.7-3.2l6 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.4-2a4 4 0 0 0-1.4-5.5ZM75 29.7a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8a6 6 0 0 1 2.2 8.2a6.1 6.1 0 0 1-8.2 2.2Z" opacity={0} strokeWidth={1}><animateTransform additive="sum" attributeName="transform" dur="10.2s" repeatCount="indefinite" type="rotate" values="0 80 24; 360 80 24"></animateTransform><animate id="SVGs0wz2HfD" attributeName="opacity" begin="-1.1s" dur="3.4s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0" repeatCount="indefinite"></animate></path><animateTransform id="SVGiZIbbC1N" additive="sum" attributeName="transform" begin="-1.1s" dur="3.4s" type="translate" values="0 -36; 0 92;" repeatCount="indefinite"></animateTransform></g><g><path fill="url(#SVGS0exAdfk)" stroke="#86c3db" strokeMiterlimit={10} d="m153.7 31l-5.8-3.3a13.7 13.7 0 0 0 0-6.5l5.8-3.2a4 4 0 0 0 1.5-5.5a4 4 0 0 0-5.6-1.5l-5.8 3.3a13.6 13.6 0 0 0-2.6-2a13.8 13.8 0 0 0-3-1.3V4.5a4 4 0 0 0-8.1 0v6.6a14.3 14.3 0 0 0-5.7 3.2l-5.8-3.3a4 4 0 0 0-5.6 1.5a4 4 0 0 0 1.5 5.5l5.8 3.3a13.7 13.7 0 0 0 0 6.5l-5.8 3.2a4 4 0 0 0-1.5 5.5a4 4 0 0 0 3.5 2a4 4 0 0 0 2-.5l5.8-3.3a13.6 13.6 0 0 0 2.7 2a13.8 13.8 0 0 0 3 1.2v6.6a4 4 0 0 0 8 0v-6.6a14.2 14.2 0 0 0 5.7-3.2l5.8 3.3a4 4 0 0 0 2 .5a4 4 0 0 0 3.5-2a4 4 0 0 0-1.3-5.5ZM131 29.7a6 6 0 0 1-2.3-8.2a6.1 6.1 0 0 1 5.3-3a6.2 6.2 0 0 1 3 .8a6 6 0 0 1 2.2 8.2a6.1 6.1 0 0 1-8.2 2.2Z" opacity={0} strokeWidth={1}><animateTransform additive="sum" attributeName="transform" dur="10.2s" repeatCount="indefinite" type="rotate" values="0 136 24; 360 136 24"></animateTransform><animate id="SVGI61N2d1g" attributeName="opacity" begin="-2.2s" dur="3.4s" keyTimes="0; .17; .83; 1" values="0; 1; 1; 0" repeatCount="indefinite"></animate></path><animateTransform id="SVGM9wm8dfc" additive="sum" attributeName="transform" begin="-2.2s" dur="3.4s" type="translate" values="0 -36; 0 92;" repeatCount="indefinite"></animateTransform></g></symbol></defs><use width={350} height={222} href="#SVGMnBDAb4I" transform="translate(81 145)"></use><use width={156.2} height={49} href="#SVGrLXbQbMG" transform="translate(177.9 337.5)"></use></svg>);
}
function MeteoconsThunderstorms(props) {
  return (<svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 512 512" {...props}><defs><symbol id="SVGa7dgPttN" viewBox="0 0 200.3 126.1"><path fill="url(#SVGqOTCtbDJ)" stroke="#848b98" strokeMiterlimit={10} d="M.5 93.2a32.4 32.4 0 0 0 32.4 32.4h129.8v-.1l2.3.1a34.8 34.8 0 0 0 6.5-68.9a32.4 32.4 0 0 0-48.5-33a48.6 48.6 0 0 0-88.6 37.1h-1.5A32.4 32.4 0 0 0 .5 93.1Z" strokeWidth={1}></path></symbol><symbol id="SVGo1fHjXNB" viewBox="0 0 350 222"><path fill="url(#SVGKHU6KYct)" stroke="#5b6472" strokeMiterlimit={10} strokeWidth={6} d="m291 107l-2.5.1A83.9 83.9 0 0 0 135.6 43A56 56 0 0 0 51 91a56.6 56.6 0 0 0 .8 9A60 60 0 0 0 63 219l4-.2v.2h224a56 56 0 0 0 0-112Z"></path></symbol><symbol id="SVGZLwYnbfk" viewBox="0 0 398 222"><use width={200.3} height={126.1} href="#SVGa7dgPttN" transform="translate(198 27)"><animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-9 0; 9 0; -9 0"></animateTransform></use><use width={350} height={222} href="#SVGo1fHjXNB"><animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="translate" values="-18 0; 18 0; -18 0"></animateTransform></use></symbol><symbol id="SVGD00Kwd0A" viewBox="0 0 102.7 186.8"><path fill="url(#SVGvnYDXzed)" stroke="#f6a823" strokeMiterlimit={10} strokeWidth={4} d="m34.8 2l-32 96h32l-16 80l80-112h-48l32-64h-48z"><animate id="SVGbxDaaeoE" attributeName="opacity" begin="0s" dur="1s" keyTimes="0; .38; .5; .63; .75; .86; .94; 1" values="1; 1; 0; 1; 0; 1; 0; 1" repeatCount="indefinite"></animate></path></symbol><linearGradient id="SVGqOTCtbDJ" x1={52.7} x2={133.4} y1={9.6} y2={149.3} gradientUnits="userSpaceOnUse"><stop offset={0} stopColor="#9ca3af"></stop><stop offset={0.5} stopColor="#9ca3af"></stop><stop offset={1} stopColor="#6b7280"></stop></linearGradient><linearGradient id="SVGKHU6KYct" x1={99.5} x2={232.6} y1={30.7} y2={261.4} gradientUnits="userSpaceOnUse"><stop offset={0} stopColor="#6b7280"></stop><stop offset={0.5} stopColor="#6b7280"></stop><stop offset={1} stopColor="#4b5563"></stop></linearGradient><linearGradient id="SVGvnYDXzed" x1={8.7} x2={80.9} y1={17.1} y2={142.1} gradientUnits="userSpaceOnUse"><stop offset={0} stopColor="#f7b23b"></stop><stop offset={0.5} stopColor="#f7b23b"></stop><stop offset={1} stopColor="#f59e0b"></stop></linearGradient></defs><use width={398} height={222} href="#SVGZLwYnbfk" transform="translate(68.84 145)"></use><use width={102.7} height={186.7} href="#SVGD00Kwd0A" transform="translate(205.23 291)"></use></svg>);
}
function Loading(props) {
  return (<svg xmlns="http://www.w3.org/2000/svg" width={64} height={64} viewBox="0 0 24 24" {...props}><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}><path strokeDasharray={18} d="M12 3c4.97 0 9 4.03 9 9"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.3s" values="18;0"></animate><animateTransform attributeName="transform" dur="1.5s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"></animateTransform></path><path strokeDasharray={60} d="M12 3c4.97 0 9 4.03 9 9c0 4.97 -4.03 9 -9 9c-4.97 0 -9 -4.03 -9 -9c0 -4.97 4.03 -9 9 -9Z" opacity={0.3}><animate fill="freeze" attributeName="stroke-dashoffset" dur="1.2s" values="60;0"></animate></path></g></svg>);
}

function formatClock(d) {
  const h = d.getHours().toString().padStart(2, '0')
  const m = d.getMinutes().toString().padStart(2, '0')
  return `${h}:${m}`
}
function formatDate(d) {
  return d.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' })
}
function getWeatherIcon(code) {
  if (code === 0) return MeteoconsClearDay
  if ([1, 2, 3].includes(code)) return MeteoconsOvercast
  if ([45, 48].includes(code)) return MeteoconsFog
  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return MeteoconsRain
  if ([71, 73, 75, 77, 85, 86].includes(code)) return MeteoconsSnow
  if ([95, 96, 99].includes(code)) return MeteoconsThunderstorms
  return Loading
}
function WeatherCard() {
  const [temp, setTemp] = useState('--')
  const [wind, setWind] = useState('--')
  const [label, setLabel] = useState('Loading...')
  const [loading, setLoading] = useState(true)
  const [code, setCode] = useState(null)
  const WeatherIconComponent = getWeatherIcon(code)
  const [iconTick, setIconTick] = useState(0)
  const [location, setLocation] = useState('')
  useEffect(() => {
    const id = setInterval(() => setIconTick(t => t + 1), 15000)
    return () => clearInterval(id)
  }, [])
  useEffect(() => {
    let dead = false
    const fetchWeather = async (lat, lon) => {
      try {
        const r = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,weather_code,wind_speed_10m&temperature_unit=celsius&wind_speed_unit=mph&timezone=auto`)
        const d = await r.json()
        if (dead) return
        setTemp(Math.round(d?.current?.temperature_2m ?? 0))
        setWind(Math.round(d?.current?.wind_speed_10m ?? 0))
        const c = d?.current?.weather_code
        setCode(c)
        setLabel(c === 0 ? 'Clear' : [1, 2, 3].includes(c) ? 'Cloudy' : [45, 48].includes(c) ? 'Fog' : [51, 53, 55, 61, 63, 65, 80, 81, 82].includes(c) ? 'Rain' : [71, 73, 75, 77, 85, 86].includes(c) ? 'Snow' : [95, 96, 99].includes(c) ? 'Storm' : 'Weather')
        const geoResponse = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`);
        const geoData = await geoResponse.json();
        const locationName = geoData?.address.city?.split(',')[0] || 'Unknown';
        setLocation(locationName); 
      } catch {
        if (!dead) setLabel('Unavailable')
      } finally {
        if (!dead) setLoading(false)
      }
    }
    navigator.geolocation?.getCurrentPosition(
      ({ coords }) => fetchWeather(coords.latitude, coords.longitude)
    ) 
    return () => {
      dead = true
    }
  }, [])

  return (
    <div className="w11-card">
      <div className="w11-card-header">
        <MdLocationOn size={18} />
        {loading ? 'Locating...' : `${location}`}
      </div>
      <div className="w11-card-content">
        <div className="w11-weather-simplified">
          <WeatherIconComponent className="w11-icon" />
          <div className="w11-weather-info">
            <span className="w11-weather-degree">{temp}
              <span className="w11-weather-unit">°C</span>
            </span>
            <span className="w11-weather-label">{label} <br /> {wind} mph</span>
          </div>
        </div>
      </div>
    </div>
  )
}
export default function LockScreen({ onUnlock, unlocking }) {
  const [time, setTime] = useState(new Date())
  const [showCards, setShowCards] = useState(false)
  const [isFullyUnlocked, setIsFullyUnlocked] = useState(false)
  useEffect(() => {
    if (unlocking === 'desktop') {
      const timer = setTimeout(() => setIsFullyUnlocked(true), 650)
      return () => clearTimeout(timer)
    }
  }, [unlocking])
  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(id)
  }, [])
  useEffect(() => {
    const id = setTimeout(() => setShowCards(true), 600)
    return () => clearTimeout(id)
  }, [])
  const handleUnlock = useCallback(() => {
    if (onUnlock && !unlocking) onUnlock()
  }, [onUnlock, unlocking])
  useEffect(() => {
    const onKey = (e) => { 
      if (e.key !== 'Escape' && !unlocking) handleUnlock() 
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [handleUnlock, unlocking])
  if (isFullyUnlocked) return null
  return (
    <div
      className={`w11-lock ${unlocking === true ? 'w11-blurred' : ''} ${unlocking === 'desktop' ? 'w11-lock--out' : ''}`}
      onClick={handleUnlock}
      role="button"
      tabIndex={0}
      aria-label="Lock screen"
    >
      <div 
        className="w11-lock-bg-container" 
        style={{ backgroundImage: 'var(--desktop-bg)' }}
        aria-hidden="true" 
      />
      <div className="w11-clock-area">
        <div className="w11-time"><strong>{formatClock(time)}</strong></div>
        <div className="w11-date">{formatDate(time)}</div>
      </div>
      <div className={`w11-cards-row ${showCards ? 'w11-cards-row--in' : ''}`}>
        <WeatherCard />
      </div>
      {!unlocking && (
        <div className="w11-signin-hint">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="white" opacity="0.6">
            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/>
          </svg>
          <span>Click to sign in</span>
        </div>
      )}
    </div>
  )
}