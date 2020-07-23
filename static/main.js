const webFolder = "../web";
const ojetVer = "9.0.1";
requirejs.config({
        baseUrl: webFolder + '/js',
        paths: {
                'knockout': 'libs/knockout/knockout-3.5.1.debug',
                'jquery': 'libs/jquery/jquery-3.5.1',
                'jqueryui-amd': 'libs/jquery/jqueryui-amd-1.12.1',
                'hammerjs': 'libs/hammer/hammer-2.0.8',
                'ojdnd': 'libs/dnd-polyfill/dnd-polyfill-1.0.2',
                'ojs': 'libs/oj/v' + ojetVer + '/debug',
                'ojL10n': 'libs/oj/v' + ojetVer + '/ojL10n',
                'ojtranslations': 'libs/oj/v' + ojetVer + '/resources',
                'text': 'libs/require/text',
                'signals': 'libs/js-signals/signals',
                'customElements': 'libs/webcomponents/custom-elements.min',
                'proj4': 'libs/proj4js/dist/proj4-src',
                'css': 'libs/require-css/css',
                'touchr': 'libs/touchr/touchr',
                'corejs': 'libs/corejs/shim',
                'chai': 'libs/chai/chai-4.2.0',
                'regenerator-runtime': 'libs/regenerator-runtime/runtime'
        }
});

// Auto insert link for jet redwood style
let link = document.createElement("link");
link.rel = "stylesheet";
link.href = "../web/css/redwood/" + ojetVer + "/web/redwood.css";
document.head.appendChild(link);
link = document.createElement("link");
link.rel = "stylesheet";
link.href = "style.css";
document.head.appendChild(link);
