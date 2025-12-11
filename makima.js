#!/usr/bin/env node
import gradient from 'gradient-string';


const makimaArt = `
    @@@@@#55YYY5PPGGPGPGBBBBBGGP55PGPPPP5PGPGP5P&@@@@@@@@@@@@@@@
    @@@@&5PPPGGGGGPGBG55PPG555YYY5PPPPBGPP5G55PP5&@@@@@@@@@@@@@@
    @@@@55PPBGGPGG#BGP5P555YJY55YPPPGP55PPP5GP5PP5@@@@@@@@@@@@@@
    @@@&?PPGGP5BG#&GBP#BP5555GGPP5GGP5P5PG55YGPPP5B@@@@@@@@@@@@@
    @@@&YGGGPJPGGBG5GP&&GPPGGG#PGP55PP5YY5GPJJPPPPP&@@@@@@@@@@@@
    @@@&YPPGYYBPGGYG5PGBGGPPP5GPYB5JYPP5Y5PG5J5Y5GPP@@@@@@@@@@@@
    @@@&5PPP?PG5GPYBYP5GGPPP55PBYGP??JPG5Y5GPYY5YYG5#@@@@@@@@@@@
    @@@#5P5Y?B5PG5YGYP55GP55P55GYPPJY5JPPYYPGPYYJ55YP@@@@@@@@@@@
    @@@#YPY5YB5PGYYPYPJJPP555J5GYPPJ5PYYG5J5GPPYG#JG5&@@@@@@@@@@
    @@@@YPJJYGPPP5YPYP??55Y5575P5P5J5GPYPY?JPPPYBBP&G#@@@@@@@@@@
    @@@@PYJJ5GPPG55PY5?JY5YYYYY55PYY55YJYJJ5YPP5PGYGG#@@@@@@@@@@
    @@@@&YJY5GPPG5P5YY?PJYYJYPY5Y5JJYYY?7!!!!5PPB5!GP&@@@@@@@@@@
    @@@@@GYP5PP5PP55J5J5J?JJJG5YJJJPPJ!^^~?Y75PPPGBG5&@@@@@@@@@@
    @@@@@@5PYPPGY5J5?5?J???Y?G5YYPGBPPPYYY55GY5PYYPYG@@@@@@@@@@@
    @@@@@@@P?P5GY???!?7^^~?YPPPGBBBBBBBBBBB#&Y5PYJYG@@@@@@@@@@@@
    @@@@@@@@P5PG5YY5Y5555PGBBBBB###@@@&&&&&@&YPPYYG&&@@@@@@@@@@@
    @@@@@@@@#55P57PBBGGBBB#B#&&&@@@@@@@@@@@@&555Y5P######@@@@@@@
    @@@@@@@@@P5PP7!YB##&&&@&&@@@@#B&@@@@@@@@&P55YPG@@@@@&#&@@@@@
    @@@@@@@@@GYPG??YYP&@@@@@@@@@@&#&@@@@&@@@&555YB&@@@@@@@#B@@@@
    @@@@@@@@@GJPPYYPPYYB&@@@@@@@&&&@&&###@@@G?P5B@#&&&&&#&@P@@@@
    @@@@@@@&#BBYGPYPP5YP5PG#@@@@&&#&&##&@@&GYYY5&@#@@@@&##&G@@@@
    @@@@@&##@@&PPPYPP5Y5PPP??5G#&&@&#&@@@B5PY5JB&&&@@&&&B&BG@@@@
    @@@@&B&@@@@&PPYPP55YPPPPYY55PPGGBBBGG5PPYJPB#&&@@&#&#BBB@@@@
    @@@@B&@@@@@@#PPYG55Y5PPGGPP5PGGGPPPGPPPJJYBG&&&@@&#BPB&#&@@@
    @@@@G@@&@@@@@BPJ5B5P5YP5PGGP5P5PPGGPPP555B&G@&&@@#&5B#PB@@@@
    @@@@5&@@&&&&&@#PYGG5GB5PPPPPGGPP55YYGBGG#@&B@@&&@#@5GBP&@@@@
    @@@@GG@@&&&@@@&&GPBGP#&PBBGP5PPG5~~?Y5B#@@##@@&&&#@#5B@@@@@@
    @@@@&PBB&@&&&@@@&&##GG#&B#&&BBG5~!#&BY5B#&##@@&&##@&GP@@@@@@
    @@@@@&GBB##&##&@@&&&###&&##&@###BJ?7 !G&#@@&@@@&#&@#&G#@@@@@
    @@@@@@@&B###BBGB&@@&&&&&@&##&&@&&&B?J5PG&&@@@@@&#@@&&&P@@@@@
    @@@@@@@@@###BB#PP#&&&#&##@@&&@@@@&&!P#&PB@@@@@@@@@#&@@P@@@@@
    @@@@@@@@@@@#B5Y5YB##&&##&@@@@@@@@@@J:5#&Y#@@@@@@@@&&@@G@@@@@
    @@@@@@@@@@@P7!JYJ5&##&@&&@@@@@@@@@@&:.G@&J&@@@@@@@@@@B#@@@@@
    @@@@@@@@@B~.~^!?!~G&&&&@@@@@@@@@@@@@Y Y@&?J@@@@@@@@&##@@@@@@
    @@@@@@@@P::...:^^:^G@@@@@@@@@@@@@@@@G ^#&~.#&&&&#B#&@@@@@@@@
    @@@@@@@#:~7~^.  .. :J&@@@@@@@@@@@@@@G  ~~:J&&B@@@@@@@@@@@@@@
    @@@@@@@Y.77!!~:      :JB&@@@@@@&BP?^.... ~@@#@@@@@@@@@@@@@@@
    @@@@@@@J :~!77~^:::..   :7Y??7~:.         G&@@@@@@@@@@@@@@@@
    @@@@@@@#^ .:!!?JJ??!~:   7#:              Y@@@@@@@@@@@@@@@@@              
`;


const makimaGradient = gradient([
    '#ff6b57', // Рыжий (Макушка и волосы)
    '#ffad85', // Светло-рыжий (Челка)
    '#fff2cc', // Бледно-желтый (Глаза и кожа)
    '#e6f2ff', // Холодный белый (Воротник рубашки)
    '#636e72'  // Темно-серый (Галстук - не черный, чтобы было видно на фоне!)
]);

console.log(makimaGradient.multiline(makimaArt));

console.log(gradient.atlas("Ты ведь будешь хорошим песиком? (Y/n)"));