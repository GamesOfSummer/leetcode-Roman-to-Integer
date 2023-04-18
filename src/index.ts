import {
    consoleBuffer,
    consoleEnd,
    consoleStart,
    validateFxn,
} from './helpers.js';

function formatInput(a: number, b: number): number {
    return Math.abs(a - b);
}

function minimumAbsoluteDifference(arr: number[]): number {
    let lowestValue = Number.MAX_SAFE_INTEGER;

    arr.sort();
    for (let i = 0; i < arr.length; i++) {
        let difference = formatInput(arr[i], arr[i + 1]);

        if (difference < lowestValue) {
            lowestValue = difference;
        }
    }

    return lowestValue;
}

consoleStart();

validateFxn(
    minimumAbsoluteDifference([
        -558869845, -253368675, -200435086, -554647106, 817596793, 736821529,
        -431448289, -594958331, -997417046, 577275288, -486732642, 714488978,
        209855230, 208261360, -701577595, -36799266, 322217218, 950344570,
        -942630463, 745540365, -248293785, -48424787, -861367652, 790856899,
        34696697, 390522929, 772944769, 205568239, 92067485, 439178159,
        -615777531, 72471617, -80140032, -898298968, -674334641, -43710030,
        921086278, -814911521, 326433941, -267939666, -821675284, -628583029,
        658506574, -864249547, 58070554, -725595289, -581287035, -885020897,
        -973971019, -476139927, 832721414, -262806238, 350004663, 111490946,
        -387846170, 721891907, 255319459, 78670776, -354013431, -256833727,
        552929207, -694765135, -151214790, -985325495, -747110821, 26680284,
        -284966178, 597976616, 803067650, 281444096, -161972813, 198609904,
        -365532681, -649348395, -911970591, -983335246, -308832946, 232095118,
        486545510, 208200458, 827707319, 668711934, -685800248, -704892491,
        -456924440, -7087161, 6858453, -265698961, -380056965, -325535122,
        619714416, -828565402, -731974269, 637485873, 118565416, -941813814,
        19507132, -712321229, -486325182, -331441735,
    ]),
    60902
);

validateFxn(minimumAbsoluteDifference([1, -3, 71, 68, 17]), 3);

validateFxn(minimumAbsoluteDifference([3, -7, 0]), 3);

validateFxn(
    minimumAbsoluteDifference([-59, -36, -13, 1, -53, -92, -2, -96, -54, 75]),
    1
);

consoleEnd();

export {};
