import { Sample } from "../models/sample";

export const NOT_GATE_SAMPLES: Sample[] = [{
    features: [1],
    label: 0
}, {
    features: [0],
    label: 1
},]

export const AND_GATE_SAMPLES: Sample[] = [{
    features: [0, 0],
    label: 0
}, {
    features: [0, 1],
    label: 0
}, {
    features: [1, 0],
    label: 0
}, {
    features: [1, 1],
    label: 1
},]

export const NAND_GATE_SAMPLES: Sample[] = [{
    features: [0, 0],
    label: 1
}, {
    features: [0, 1],
    label: 1
}, {
    features: [1, 0],
    label: 1
}, {
    features: [1, 1],
    label: 0
    },]

export const XOR_GATE_SAMPLES: Sample[] = [{
    features: [0, 0],
    label: 0
}, {
    features: [0, 1],
    label: 1
}, {
    features: [1, 0],
    label: 1
}, {
    features: [1, 1],
    label: 0
},]

export const OR_GATE_SAMPLES: Sample[] = [{
    features: [0, 0],
    label: 0
}, {
    features: [0, 1],
    label: 1
}, {
    features: [1, 0],
    label: 1
}, {
    features: [1, 1],
    label: 1
},]

export const DATASET_1: Sample[] = [
    {
        features: [
            -32,
            62
        ],
        label: 1
    },
    {
        features: [
            -52,
            22
        ],
        label: 1
    },
    {
        features: [
            24,
            -68
        ],
        label: 0
    },
    {
        features: [
            95,
            18
        ],
        label: 1
    },
    {
        features: [
            -100,
            -86
        ],
        label: 0
    },
    {
        features: [
            -35,
            -27
        ],
        label: 0
    },
    {
        features: [
            96,
            95
        ],
        label: 1
    },
    {
        features: [
            -67,
            0
        ],
        label: 0
    },
    {
        features: [
            73,
            57
        ],
        label: 1
    },
    {
        features: [
            7,
            55
        ],
        label: 1
    },
    {
        features: [
            3,
            -2
        ],
        label: 0
    },
    {
        features: [
            42,
            31
        ],
        label: 1
    },
    {
        features: [
            -44,
            -55
        ],
        label: 0
    },
    {
        features: [
            47,
            -60
        ],
        label: 0
    },
    {
        features: [
            41,
            -70
        ],
        label: 0
    },
    {
        features: [
            91,
            -73
        ],
        label: 0
    },
    {
        features: [
            32,
            75
        ],
        label: 1
    },
    {
        features: [
            51,
            11
        ],
        label: 1
    },
    {
        features: [
            -19,
            76
        ],
        label: 1
    },
    {
        features: [
            -59,
            74
        ],
        label: 1
    },
    {
        features: [
            -21,
            7
        ],
        label: 1
    },
    {
        features: [
            97,
            -93
        ],
        label: 0
    },
    {
        features: [
            -53,
            42
        ],
        label: 1
    },
    {
        features: [
            -7,
            -53
        ],
        label: 0
    },
    {
        features: [
            -48,
            -82
        ],
        label: 0
    },
    {
        features: [
            90,
            -13
        ],
        label: 0
    },
    {
        features: [
            53,
            63
        ],
        label: 1
    },
    {
        features: [
            -92,
            -46
        ],
        label: 0
    },
    {
        features: [
            -58,
            51
        ],
        label: 1
    },
    {
        features: [
            -58,
            -29
        ],
        label: 0
    },
    {
        features: [
            13,
            -30
        ],
        label: 0
    },
    {
        features: [
            -71,
            37
        ],
        label: 1
    },
    {
        features: [
            25,
            -3
        ],
        label: 0
    },
    {
        features: [
            -95,
            41
        ],
        label: 1
    },
    {
        features: [
            -32,
            87
        ],
        label: 1
    },
    {
        features: [
            51,
            -21
        ],
        label: 0
    },
    {
        features: [
            71,
            -76
        ],
        label: 0
    },
    {
        features: [
            -83,
            -98
        ],
        label: 0
    },
    {
        features: [
            68,
            -89
        ],
        label: 0
    },
    {
        features: [
            98,
            85
        ],
        label: 1
    },
    {
        features: [
            -15,
            10
        ],
        label: 1
    },
    {
        features: [
            -29,
            43
        ],
        label: 1
    },
    {
        features: [
            99,
            -55
        ],
        label: 0
    },
    {
        features: [
            70,
            16
        ],
        label: 1
    },
    {
        features: [
            57,
            45
        ],
        label: 1
    },
    {
        features: [
            -13,
            -15
        ],
        label: 0
    },
    {
        features: [
            -29,
            100
        ],
        label: 1
    },
    {
        features: [
            74,
            -89
        ],
        label: 0
    },
    {
        features: [
            -68,
            29
        ],
        label: 1
    },
    {
        features: [
            60,
            98
        ],
        label: 1
    },
    {
        features: [
            5,
            -75
        ],
        label: 0
    },
    {
        features: [
            26,
            94
        ],
        label: 1
    },
    {
        features: [
            -78,
            65
        ],
        label: 1
    },
    {
        features: [
            83,
            -36
        ],
        label: 0
    },
    {
        features: [
            -24,
            92
        ],
        label: 1
    },
    {
        features: [
            -84,
            80
        ],
        label: 1
    },
    {
        features: [
            3,
            -45
        ],
        label: 0
    },
    {
        features: [
            81,
            -89
        ],
        label: 0
    },
    {
        features: [
            -89,
            8
        ],
        label: 1
    },
    {
        features: [
            -12,
            86
        ],
        label: 1
    },
    {
        features: [
            -62,
            -84
        ],
        label: 0
    },
    {
        features: [
            -31,
            -47
        ],
        label: 0
    },
    {
        features: [
            -70,
            46
        ],
        label: 1
    },
    {
        features: [
            -3,
            89
        ],
        label: 1
    },
    {
        features: [
            37,
            -58
        ],
        label: 0
    },
    {
        features: [
            46,
            80
        ],
        label: 1
    },
    {
        features: [
            61,
            41
        ],
        label: 1
    },
    {
        features: [
            60,
            21
        ],
        label: 1
    },
    {
        features: [
            -31,
            -93
        ],
        label: 0
    },
    {
        features: [
            -42,
            -69
        ],
        label: 0
    },
    {
        features: [
            -30,
            -24
        ],
        label: 0
    },
    {
        features: [
            12,
            -22
        ],
        label: 0
    },
    {
        features: [
            -31,
            -25
        ],
        label: 0
    },
    {
        features: [
            -83,
            -84
        ],
        label: 0
    },
    {
        features: [
            -86,
            92
        ],
        label: 1
    },
    {
        features: [
            -58,
            -8
        ],
        label: 0
    },
    {
        features: [
            -98,
            32
        ],
        label: 1
    },
    {
        features: [
            -39,
            -68
        ],
        label: 0
    },
    {
        features: [
            -33,
            35
        ],
        label: 1
    },
    {
        features: [
            16,
            38
        ],
        label: 1
    },
    {
        features: [
            84,
            -9
        ],
        label: 0
    },
    {
        features: [
            47,
            53
        ],
        label: 1
    },
    {
        features: [
            -34,
            -80
        ],
        label: 0
    },
    {
        features: [
            92,
            1
        ],
        label: 1
    },
    {
        features: [
            81,
            -80
        ],
        label: 0
    },
    {
        features: [
            -60,
            43
        ],
        label: 1
    },
    {
        features: [
            18,
            -14
        ],
        label: 0
    },
    {
        features: [
            80,
            27
        ],
        label: 1
    },
    {
        features: [
            -76,
            10
        ],
        label: 1
    },
    {
        features: [
            -24,
            75
        ],
        label: 1
    },
    {
        features: [
            -5,
            -96
        ],
        label: 0
    },
    {
        features: [
            7,
            34
        ],
        label: 1
    },
    {
        features: [
            19,
            -58
        ],
        label: 0
    },
    {
        features: [
            -66,
            29
        ],
        label: 1
    },
    {
        features: [
            18,
            -3
        ],
        label: 0
    },
    {
        features: [
            38,
            48
        ],
        label: 1
    },
    {
        features: [
            81,
            -38
        ],
        label: 0
    },
    {
        features: [
            56,
            78
        ],
        label: 1
    },
    {
        features: [
            57,
            -61
        ],
        label: 0
    },
    {
        features: [
            -76,
            -49
        ],
        label: 0
    },
    {
        features: [
            -39,
            13
        ],
        label: 1
    },
    {
        features: [
            19,
            -45
        ],
        label: 0
    },
    {
        features: [
            -94,
            -64
        ],
        label: 0
    },
    {
        features: [
            -47,
            2
        ],
        label: 1
    },
    {
        features: [
            -56,
            -34
        ],
        label: 0
    },
    {
        features: [
            34,
            45
        ],
        label: 1
    },
    {
        features: [
            -54,
            10
        ],
        label: 1
    },
    {
        features: [
            -59,
            -9
        ],
        label: 0
    },
    {
        features: [
            9,
            5
        ],
        label: 1
    },
    {
        features: [
            -58,
            86
        ],
        label: 1
    },
    {
        features: [
            -99,
            -100
        ],
        label: 0
    },
    {
        features: [
            -91,
            18
        ],
        label: 1
    },
    {
        features: [
            100,
            -30
        ],
        label: 0
    },
    {
        features: [
            -27,
            46
        ],
        label: 1
    },
    {
        features: [
            -9,
            -28
        ],
        label: 0
    },
    {
        features: [
            80,
            -23
        ],
        label: 0
    },
    {
        features: [
            6,
            -14
        ],
        label: 0
    },
    {
        features: [
            50,
            36
        ],
        label: 1
    },
    {
        features: [
            -15,
            -2
        ],
        label: 0
    },
    {
        features: [
            -75,
            20
        ],
        label: 1
    },
    {
        features: [
            -4,
            -48
        ],
        label: 0
    },
    {
        features: [
            24,
            46
        ],
        label: 1
    },
    {
        features: [
            13,
            40
        ],
        label: 1
    },
    {
        features: [
            -85,
            16
        ],
        label: 1
    },
    {
        features: [
            38,
            70
        ],
        label: 1
    },
    {
        features: [
            51,
            42
        ],
        label: 1
    },
    {
        features: [
            -81,
            36
        ],
        label: 1
    },
    {
        features: [
            42,
            -28
        ],
        label: 0
    },
    {
        features: [
            -84,
            -64
        ],
        label: 0
    },
    {
        features: [
            -94,
            -68
        ],
        label: 0
    },
    {
        features: [
            15,
            -79
        ],
        label: 0
    },
    {
        features: [
            15,
            32
        ],
        label: 1
    },
    {
        features: [
            22,
            30
        ],
        label: 1
    },
    {
        features: [
            86,
            -3
        ],
        label: 1
    },
    {
        features: [
            -44,
            22
        ],
        label: 1
    },
    {
        features: [
            -41,
            79
        ],
        label: 1
    },
    {
        features: [
            -2,
            -75
        ],
        label: 0
    },
    {
        features: [
            72,
            -67
        ],
        label: 0
    },
    {
        features: [
            -8,
            19
        ],
        label: 1
    },
    {
        features: [
            65,
            4
        ],
        label: 1
    },
    {
        features: [
            -22,
            56
        ],
        label: 1
    },
    {
        features: [
            21,
            23
        ],
        label: 1
    },
    {
        features: [
            -46,
            53
        ],
        label: 1
    },
    {
        features: [
            96,
            -94
        ],
        label: 0
    },
    {
        features: [
            58,
            12
        ],
        label: 1
    },
    {
        features: [
            -100,
            -54
        ],
        label: 0
    },
    {
        features: [
            25,
            44
        ],
        label: 1
    },
    {
        features: [
            93,
            -62
        ],
        label: 0
    },
    {
        features: [
            29,
            -86
        ],
        label: 0
    },
    {
        features: [
            60,
            -43
        ],
        label: 0
    },
    {
        features: [
            -51,
            67
        ],
        label: 1
    },
    {
        features: [
            -94,
            50
        ],
        label: 1
    },
    {
        features: [
            76,
            -53
        ],
        label: 0
    },
    {
        features: [
            22,
            -90
        ],
        label: 0
    },
    {
        features: [
            -39,
            49
        ],
        label: 1
    },
    {
        features: [
            63,
            34
        ],
        label: 1
    },
    {
        features: [
            66,
            6
        ],
        label: 1
    },
    {
        features: [
            19,
            75
        ],
        label: 1
    },
    {
        features: [
            61,
            16
        ],
        label: 1
    },
    {
        features: [
            -34,
            58
        ],
        label: 1
    },
    {
        features: [
            -98,
            -25
        ],
        label: 0
    },
    {
        features: [
            -55,
            69
        ],
        label: 1
    },
    {
        features: [
            -17,
            4
        ],
        label: 1
    },
    {
        features: [
            -86,
            -23
        ],
        label: 0
    },
    {
        features: [
            6,
            -79
        ],
        label: 0
    },
    {
        features: [
            57,
            -33
        ],
        label: 0
    },
    {
        features: [
            94,
            -4
        ],
        label: 0
    },
    {
        features: [
            -42,
            90
        ],
        label: 1
    },
    {
        features: [
            3,
            -12
        ],
        label: 0
    },
    {
        features: [
            3,
            -47
        ],
        label: 0
    },
    {
        features: [
            14,
            -62
        ],
        label: 0
    },
    {
        features: [
            63,
            -49
        ],
        label: 0
    },
    {
        features: [
            1,
            -56
        ],
        label: 0
    },
    {
        features: [
            46,
            19
        ],
        label: 1
    },
    {
        features: [
            62,
            61
        ],
        label: 1
    },
    {
        features: [
            48,
            84
        ],
        label: 1
    },
    {
        features: [
            -99,
            -16
        ],
        label: 0
    },
    {
        features: [
            29,
            -34
        ],
        label: 0
    },
    {
        features: [
            35,
            -91
        ],
        label: 0
    },
    {
        features: [
            -20,
            -35
        ],
        label: 0
    },
    {
        features: [
            -31,
            -95
        ],
        label: 0
    },
    {
        features: [
            -43,
            25
        ],
        label: 1
    },
    {
        features: [
            -100,
            -5
        ],
        label: 0
    },
    {
        features: [
            96,
            94
        ],
        label: 1
    },
    {
        features: [
            -53,
            -45
        ],
        label: 0
    },
    {
        features: [
            97,
            37
        ],
        label: 1
    },
    {
        features: [
            37,
            -90
        ],
        label: 0
    },
    {
        features: [
            60,
            -14
        ],
        label: 0
    },
    {
        features: [
            77,
            51
        ],
        label: 1
    },
    {
        features: [
            -89,
            -83
        ],
        label: 0
    },
    {
        features: [
            -55,
            -40
        ],
        label: 0
    },
    {
        features: [
            71,
            -35
        ],
        label: 0
    },
    {
        features: [
            11,
            -86
        ],
        label: 0
    },
    {
        features: [
            8,
            4
        ],
        label: 1
    },
    {
        features: [
            -3,
            -17
        ],
        label: 0
    },
    {
        features: [
            76,
            -35
        ],
        label: 0
    },
    {
        features: [
            -99,
            -51
        ],
        label: 0
    },
    {
        features: [
            81,
            98
        ],
        label: 1
    },
    {
        features: [
            54,
            -50
        ],
        label: 0
    },
    {
        features: [
            95,
            2
        ],
        label: 1
    },
    {
        features: [
            56,
            72
        ],
        label: 1
    },
    {
        features: [
            -22,
            -8
        ],
        label: 0
    },
    {
        features: [
            9,
            80
        ],
        label: 1
    },
    {
        features: [
            67,
            -53
        ],
        label: 0
    },
    {
        features: [
            -40,
            -70
        ],
        label: 0
    },
    {
        features: [
            -51,
            -45
        ],
        label: 0
    },
    {
        features: [
            -10,
            81
        ],
        label: 1
    },
    {
        features: [
            -91,
            -96
        ],
        label: 0
    },
    {
        features: [
            -1,
            -9
        ],
        label: 0
    },
    {
        features: [
            -19,
            -93
        ],
        label: 0
    },
    {
        features: [
            22,
            -10
        ],
        label: 0
    },
    {
        features: [
            89,
            -9
        ],
        label: 0
    },
    {
        features: [
            84,
            -30
        ],
        label: 0
    },
    {
        features: [
            -70,
            25
        ],
        label: 1
    },
    {
        features: [
            45,
            -95
        ],
        label: 0
    },
    {
        features: [
            -58,
            -2
        ],
        label: 0
    },
    {
        features: [
            85,
            -70
        ],
        label: 0
    },
    {
        features: [
            -65,
            -72
        ],
        label: 0
    },
    {
        features: [
            22,
            74
        ],
        label: 1
    },
    {
        features: [
            -1,
            36
        ],
        label: 1
    },
    {
        features: [
            89,
            27
        ],
        label: 1
    },
    {
        features: [
            -26,
            -22
        ],
        label: 0
    },
    {
        features: [
            -45,
            -53
        ],
        label: 0
    },
    {
        features: [
            95,
            -100
        ],
        label: 0
    },
    {
        features: [
            22,
            30
        ],
        label: 1
    },
    {
        features: [
            -99,
            18
        ],
        label: 1
    },
    {
        features: [
            -88,
            55
        ],
        label: 1
    },
    {
        features: [
            40,
            90
        ],
        label: 1
    },
    {
        features: [
            28,
            -36
        ],
        label: 0
    },
    {
        features: [
            47,
            38
        ],
        label: 1
    },
    {
        features: [
            -63,
            -54
        ],
        label: 0
    },
    {
        features: [
            95,
            17
        ],
        label: 1
    },
    {
        features: [
            -23,
            90
        ],
        label: 1
    },
    {
        features: [
            -78,
            -2
        ],
        label: 0
    },
    {
        features: [
            -68,
            -11
        ],
        label: 0
    },
    {
        features: [
            -76,
            0
        ],
        label: 0
    },
    {
        features: [
            74,
            -72
        ],
        label: 0
    },
    {
        features: [
            33,
            -10
        ],
        label: 0
    },
    {
        features: [
            95,
            -100
        ],
        label: 0
    },
    {
        features: [
            -35,
            -66
        ],
        label: 0
    },
    {
        features: [
            -17,
            5
        ],
        label: 1
    },
    {
        features: [
            8,
            -84
        ],
        label: 0
    },
    {
        features: [
            99,
            -57
        ],
        label: 0
    },
    {
        features: [
            50,
            -41
        ],
        label: 0
    },
    {
        features: [
            -77,
            4
        ],
        label: 1
    },
    {
        features: [
            -26,
            14
        ],
        label: 1
    },
    {
        features: [
            32,
            45
        ],
        label: 1
    },
    {
        features: [
            -4,
            -37
        ],
        label: 0
    },
    {
        features: [
            -67,
            10
        ],
        label: 1
    },
    {
        features: [
            -4,
            -43
        ],
        label: 0
    },
    {
        features: [
            10,
            92
        ],
        label: 1
    },
    {
        features: [
            21,
            95
        ],
        label: 1
    },
    {
        features: [
            -99,
            99
        ],
        label: 1
    },
    {
        features: [
            71,
            -95
        ],
        label: 0
    },
    {
        features: [
            -16,
            -65
        ],
        label: 0
    },
    {
        features: [
            11,
            89
        ],
        label: 1
    },
    {
        features: [
            -73,
            19
        ],
        label: 1
    },
    {
        features: [
            2,
            81
        ],
        label: 1
    },
    {
        features: [
            -31,
            35
        ],
        label: 1
    },
    {
        features: [
            -13,
            0
        ],
        label: 0
    },
    {
        features: [
            5,
            -72
        ],
        label: 0
    },
    {
        features: [
            81,
            22
        ],
        label: 1
    },
    {
        features: [
            82,
            99
        ],
        label: 1
    },
    {
        features: [
            65,
            -68
        ],
        label: 0
    },
    {
        features: [
            -30,
            78
        ],
        label: 1
    },
    {
        features: [
            97,
            71
        ],
        label: 1
    },
    {
        features: [
            74,
            84
        ],
        label: 1
    },
    {
        features: [
            17,
            66
        ],
        label: 1
    },
    {
        features: [
            92,
            -4
        ],
        label: 0
    },
    {
        features: [
            79,
            40
        ],
        label: 1
    },
    {
        features: [
            -6,
            -48
        ],
        label: 0
    },
    {
        features: [
            -84,
            -73
        ],
        label: 0
    },
    {
        features: [
            5,
            -13
        ],
        label: 0
    },
    {
        features: [
            -80,
            -99
        ],
        label: 0
    },
    {
        features: [
            -26,
            -50
        ],
        label: 0
    },
    {
        features: [
            -2,
            -81
        ],
        label: 0
    },
    {
        features: [
            69,
            -42
        ],
        label: 0
    },
    {
        features: [
            76,
            -6
        ],
        label: 0
    },
    {
        features: [
            -10,
            4
        ],
        label: 1
    },
    {
        features: [
            -78,
            94
        ],
        label: 1
    },
    {
        features: [
            -17,
            -53
        ],
        label: 0
    },
    {
        features: [
            -31,
            54
        ],
        label: 1
    },
    {
        features: [
            26,
            62
        ],
        label: 1
    },
    {
        features: [
            87,
            -74
        ],
        label: 0
    },
    {
        features: [
            1,
            91
        ],
        label: 1
    },
    {
        features: [
            91,
            46
        ],
        label: 1
    },
    {
        features: [
            76,
            34
        ],
        label: 1
    },
    {
        features: [
            88,
            20
        ],
        label: 1
    },
    {
        features: [
            37,
            -15
        ],
        label: 0
    },
    {
        features: [
            98,
            37
        ],
        label: 1
    },
    {
        features: [
            36,
            79
        ],
        label: 1
    },
    {
        features: [
            92,
            -83
        ],
        label: 0
    },
    {
        features: [
            44,
            68
        ],
        label: 1
    },
    {
        features: [
            -85,
            17
        ],
        label: 1
    },
    {
        features: [
            90,
            84
        ],
        label: 1
    },
    {
        features: [
            -74,
            -91
        ],
        label: 0
    },
    {
        features: [
            2,
            13
        ],
        label: 1
    },
    {
        features: [
            62,
            -6
        ],
        label: 0
    },
    {
        features: [
            -25,
            81
        ],
        label: 1
    },
    {
        features: [
            38,
            46
        ],
        label: 1
    },
    {
        features: [
            93,
            -46
        ],
        label: 0
    },
    {
        features: [
            -50,
            32
        ],
        label: 1
    },
    {
        features: [
            35,
            3
        ],
        label: 1
    },
    {
        features: [
            -16,
            -62
        ],
        label: 0
    },
    {
        features: [
            37,
            -45
        ],
        label: 0
    },
    {
        features: [
            -4,
            2
        ],
        label: 1
    },
    {
        features: [
            -26,
            -95
        ],
        label: 0
    },
    {
        features: [
            2,
            -58
        ],
        label: 0
    },
    {
        features: [
            -91,
            -33
        ],
        label: 0
    },
    {
        features: [
            -6,
            15
        ],
        label: 1
    },
    {
        features: [
            86,
            -11
        ],
        label: 0
    },
    {
        features: [
            77,
            92
        ],
        label: 1
    },
    {
        features: [
            43,
            -57
        ],
        label: 0
    },
    {
        features: [
            19,
            11
        ],
        label: 1
    },
    {
        features: [
            45,
            -55
        ],
        label: 0
    },
    {
        features: [
            57,
            -71
        ],
        label: 0
    },
    {
        features: [
            -66,
            -91
        ],
        label: 0
    },
    {
        features: [
            28,
            28
        ],
        label: 1
    },
    {
        features: [
            53,
            37
        ],
        label: 1
    },
    {
        features: [
            47,
            -29
        ],
        label: 0
    },
    {
        features: [
            -77,
            -69
        ],
        label: 0
    },
    {
        features: [
            60,
            -16
        ],
        label: 0
    },
    {
        features: [
            64,
            -87
        ],
        label: 0
    },
    {
        features: [
            -1,
            54
        ],
        label: 1
    },
    {
        features: [
            25,
            82
        ],
        label: 1
    },
    {
        features: [
            51,
            46
        ],
        label: 1
    },
    {
        features: [
            -86,
            -46
        ],
        label: 0
    },
    {
        features: [
            32,
            38
        ],
        label: 1
    },
    {
        features: [
            -31,
            32
        ],
        label: 1
    },
    {
        features: [
            -91,
            79
        ],
        label: 1
    },
    {
        features: [
            -7,
            1
        ],
        label: 1
    },
    {
        features: [
            -95,
            19
        ],
        label: 1
    },
    {
        features: [
            -92,
            -9
        ],
        label: 0
    },
    {
        features: [
            -75,
            -12
        ],
        label: 0
    },
    {
        features: [
            41,
            -65
        ],
        label: 0
    },
    {
        features: [
            4,
            -76
        ],
        label: 0
    },
    {
        features: [
            67,
            -60
        ],
        label: 0
    },
    {
        features: [
            -79,
            -6
        ],
        label: 0
    },
    {
        features: [
            76,
            13
        ],
        label: 1
    },
    {
        features: [
            -41,
            84
        ],
        label: 1
    },
    {
        features: [
            71,
            57
        ],
        label: 1
    },
    {
        features: [
            -3,
            -76
        ],
        label: 0
    },
    {
        features: [
            22,
            -2
        ],
        label: 0
    },
    {
        features: [
            42,
            -24
        ],
        label: 0
    },
    {
        features: [
            53,
            -77
        ],
        label: 0
    },
    {
        features: [
            72,
            56
        ],
        label: 1
    },
    {
        features: [
            -84,
            38
        ],
        label: 1
    },
    {
        features: [
            40,
            31
        ],
        label: 1
    },
    {
        features: [
            26,
            33
        ],
        label: 1
    },
    {
        features: [
            85,
            -50
        ],
        label: 0
    },
    {
        features: [
            -4,
            86
        ],
        label: 1
    },
    {
        features: [
            -27,
            -27
        ],
        label: 0
    },
    {
        features: [
            -62,
            12
        ],
        label: 1
    },
    {
        features: [
            -9,
            -15
        ],
        label: 0
    },
    {
        features: [
            91,
            98
        ],
        label: 1
    },
    {
        features: [
            -30,
            70
        ],
        label: 1
    },
    {
        features: [
            35,
            -26
        ],
        label: 0
    },
    {
        features: [
            45,
            -42
        ],
        label: 0
    },
    {
        features: [
            -55,
            -64
        ],
        label: 0
    },
    {
        features: [
            98,
            -22
        ],
        label: 0
    },
    {
        features: [
            -54,
            37
        ],
        label: 1
    },
    {
        features: [
            61,
            -4
        ],
        label: 0
    },
    {
        features: [
            10,
            -70
        ],
        label: 0
    },
    {
        features: [
            54,
            35
        ],
        label: 1
    },
    {
        features: [
            -68,
            -27
        ],
        label: 0
    },
    {
        features: [
            -10,
            -42
        ],
        label: 0
    },
    {
        features: [
            53,
            65
        ],
        label: 1
    },
    {
        features: [
            -32,
            8
        ],
        label: 1
    },
    {
        features: [
            -32,
            -65
        ],
        label: 0
    },
    {
        features: [
            4,
            -19
        ],
        label: 0
    },
    {
        features: [
            40,
            37
        ],
        label: 1
    },
    {
        features: [
            -29,
            31
        ],
        label: 1
    },
    {
        features: [
            50,
            -22
        ],
        label: 0
    },
    {
        features: [
            31,
            10
        ],
        label: 1
    },
    {
        features: [
            -26,
            73
        ],
        label: 1
    },
    {
        features: [
            -78,
            4
        ],
        label: 1
    },
    {
        features: [
            39,
            46
        ],
        label: 1
    },
    {
        features: [
            -74,
            15
        ],
        label: 1
    },
    {
        features: [
            -47,
            52
        ],
        label: 1
    },
    {
        features: [
            -71,
            72
        ],
        label: 1
    },
    {
        features: [
            68,
            91
        ],
        label: 1
    },
    {
        features: [
            100,
            -94
        ],
        label: 0
    },
    {
        features: [
            1,
            81
        ],
        label: 1
    },
    {
        features: [
            -25,
            -84
        ],
        label: 0
    },
    {
        features: [
            77,
            -65
        ],
        label: 0
    },
    {
        features: [
            -49,
            -23
        ],
        label: 0
    },
    {
        features: [
            49,
            -83
        ],
        label: 0
    },
    {
        features: [
            -60,
            -49
        ],
        label: 0
    },
    {
        features: [
            -20,
            -28
        ],
        label: 0
    },
    {
        features: [
            -93,
            91
        ],
        label: 1
    },
    {
        features: [
            85,
            31
        ],
        label: 1
    },
    {
        features: [
            -49,
            -32
        ],
        label: 0
    },
    {
        features: [
            -96,
            24
        ],
        label: 1
    },
    {
        features: [
            -85,
            46
        ],
        label: 1
    },
    {
        features: [
            -96,
            -74
        ],
        label: 0
    },
    {
        features: [
            -64,
            37
        ],
        label: 1
    },
    {
        features: [
            -51,
            99
        ],
        label: 1
    },
    {
        features: [
            92,
            -6
        ],
        label: 0
    },
    {
        features: [
            -62,
            -72
        ],
        label: 0
    },
    {
        features: [
            35,
            -81
        ],
        label: 0
    },
    {
        features: [
            94,
            -8
        ],
        label: 0
    },
    {
        features: [
            72,
            -38
        ],
        label: 0
    },
    {
        features: [
            74,
            -10
        ],
        label: 0
    },
    {
        features: [
            -88,
            -70
        ],
        label: 0
    },
    {
        features: [
            -23,
            88
        ],
        label: 1
    },
    {
        features: [
            6,
            -7
        ],
        label: 0
    },
    {
        features: [
            59,
            -43
        ],
        label: 0
    },
    {
        features: [
            -80,
            -65
        ],
        label: 0
    },
    {
        features: [
            57,
            -14
        ],
        label: 0
    },
    {
        features: [
            -30,
            -86
        ],
        label: 0
    },
    {
        features: [
            -53,
            14
        ],
        label: 1
    },
    {
        features: [
            24,
            -70
        ],
        label: 0
    },
    {
        features: [
            2,
            49
        ],
        label: 1
    },
    {
        features: [
            82,
            67
        ],
        label: 1
    },
    {
        features: [
            83,
            11
        ],
        label: 1
    },
    {
        features: [
            33,
            -77
        ],
        label: 0
    },
    {
        features: [
            -15,
            58
        ],
        label: 1
    },
    {
        features: [
            -96,
            -11
        ],
        label: 0
    },
    {
        features: [
            -47,
            11
        ],
        label: 1
    },
    {
        features: [
            -97,
            -27
        ],
        label: 0
    },
    {
        features: [
            -11,
            89
        ],
        label: 1
    },
    {
        features: [
            73,
            21
        ],
        label: 1
    },
    {
        features: [
            -61,
            -47
        ],
        label: 0
    },
    {
        features: [
            -91,
            -73
        ],
        label: 0
    },
    {
        features: [
            78,
            42
        ],
        label: 1
    },
    {
        features: [
            -79,
            -85
        ],
        label: 0
    },
    {
        features: [
            -33,
            28
        ],
        label: 1
    },
    {
        features: [
            -8,
            -6
        ],
        label: 0
    },
    {
        features: [
            32,
            24
        ],
        label: 1
    },
    {
        features: [
            41,
            59
        ],
        label: 1
    },
    {
        features: [
            25,
            -38
        ],
        label: 0
    },
    {
        features: [
            63,
            -18
        ],
        label: 0
    },
    {
        features: [
            70,
            37
        ],
        label: 1
    },
    {
        features: [
            15,
            75
        ],
        label: 1
    },
    {
        features: [
            52,
            -2
        ],
        label: 0
    },
    {
        features: [
            66,
            -57
        ],
        label: 0
    },
    {
        features: [
            -10,
            -25
        ],
        label: 0
    },
    {
        features: [
            17,
            65
        ],
        label: 1
    },
    {
        features: [
            -78,
            -25
        ],
        label: 0
    },
    {
        features: [
            12,
            87
        ],
        label: 1
    },
    {
        features: [
            45,
            -54
        ],
        label: 0
    },
    {
        features: [
            75,
            2
        ],
        label: 1
    },
    {
        features: [
            89,
            -54
        ],
        label: 0
    },
    {
        features: [
            25,
            36
        ],
        label: 1
    },
    {
        features: [
            1,
            -41
        ],
        label: 0
    },
    {
        features: [
            4,
            81
        ],
        label: 1
    },
    {
        features: [
            32,
            36
        ],
        label: 1
    },
    {
        features: [
            32,
            16
        ],
        label: 1
    },
    {
        features: [
            22,
            -98
        ],
        label: 0
    },
    {
        features: [
            7,
            26
        ],
        label: 1
    },
    {
        features: [
            -59,
            44
        ],
        label: 1
    },
    {
        features: [
            26,
            76
        ],
        label: 1
    },
    {
        features: [
            -44,
            -18
        ],
        label: 0
    },
    {
        features: [
            55,
            79
        ],
        label: 1
    },
    {
        features: [
            56,
            -25
        ],
        label: 0
    },
    {
        features: [
            57,
            38
        ],
        label: 1
    },
    {
        features: [
            78,
            7
        ],
        label: 1
    },
    {
        features: [
            30,
            55
        ],
        label: 1
    },
    {
        features: [
            -22,
            78
        ],
        label: 1
    },
    {
        features: [
            18,
            41
        ],
        label: 1
    },
    {
        features: [
            -23,
            9
        ],
        label: 1
    },
    {
        features: [
            -45,
            25
        ],
        label: 1
    },
    {
        features: [
            -73,
            13
        ],
        label: 1
    },
    {
        features: [
            51,
            25
        ],
        label: 1
    },
    {
        features: [
            -36,
            -1
        ],
        label: 0
    },
    {
        features: [
            7,
            47
        ],
        label: 1
    },
    {
        features: [
            88,
            -61
        ],
        label: 0
    },
    {
        features: [
            -77,
            -73
        ],
        label: 0
    },
    {
        features: [
            -21,
            63
        ],
        label: 1
    },
    {
        features: [
            -24,
            -51
        ],
        label: 0
    },
    {
        features: [
            -33,
            78
        ],
        label: 1
    },
    {
        features: [
            45,
            -23
        ],
        label: 0
    },
    {
        features: [
            28,
            -9
        ],
        label: 0
    },
    {
        features: [
            16,
            -93
        ],
        label: 0
    },
    {
        features: [
            -88,
            20
        ],
        label: 1
    },
    {
        features: [
            -17,
            -18
        ],
        label: 0
    },
    {
        features: [
            44,
            57
        ],
        label: 1
    },
    {
        features: [
            87,
            26
        ],
        label: 1
    },
    {
        features: [
            -16,
            7
        ],
        label: 1
    },
    {
        features: [
            15,
            -74
        ],
        label: 0
    },
    {
        features: [
            45,
            -65
        ],
        label: 0
    },
    {
        features: [
            -8,
            -77
        ],
        label: 0
    },
    {
        features: [
            42,
            30
        ],
        label: 1
    },
    {
        features: [
            -7,
            51
        ],
        label: 1
    },
    {
        features: [
            61,
            87
        ],
        label: 1
    },
    {
        features: [
            57,
            -54
        ],
        label: 0
    },
    {
        features: [
            -78,
            28
        ],
        label: 1
    },
    {
        features: [
            -22,
            -16
        ],
        label: 0
    },
    {
        features: [
            -13,
            29
        ],
        label: 1
    },
    {
        features: [
            -73,
            -5
        ],
        label: 0
    },
    {
        features: [
            22,
            -98
        ],
        label: 0
    },
    {
        features: [
            97,
            51
        ],
        label: 1
    },
    {
        features: [
            79,
            -63
        ],
        label: 0
    },
    {
        features: [
            -47,
            0
        ],
        label: 0
    },
    {
        features: [
            34,
            -56
        ],
        label: 0
    },
    {
        features: [
            -68,
            -6
        ],
        label: 0
    },
    {
        features: [
            -64,
            94
        ],
        label: 1
    },
    {
        features: [
            19,
            -18
        ],
        label: 0
    },
    {
        features: [
            -53,
            -70
        ],
        label: 0
    },
    {
        features: [
            -53,
            8
        ],
        label: 1
    },
    {
        features: [
            0,
            -96
        ],
        label: 0
    },
    {
        features: [
            63,
            -22
        ],
        label: 0
    },
    {
        features: [
            7,
            -37
        ],
        label: 0
    },
    {
        features: [
            44,
            -74
        ],
        label: 0
    },
    {
        features: [
            83,
            30
        ],
        label: 1
    },
    {
        features: [
            92,
            91
        ],
        label: 1
    },
    {
        features: [
            -25,
            -27
        ],
        label: 0
    },
    {
        features: [
            45,
            43
        ],
        label: 1
    },
    {
        features: [
            -54,
            51
        ],
        label: 1
    },
    {
        features: [
            -45,
            28
        ],
        label: 1
    },
    {
        features: [
            50,
            -65
        ],
        label: 0
    },
    {
        features: [
            -68,
            -13
        ],
        label: 0
    },
    {
        features: [
            1,
            -53
        ],
        label: 0
    },
    {
        features: [
            -4,
            91
        ],
        label: 1
    },
    {
        features: [
            -62,
            -92
        ],
        label: 0
    },
    {
        features: [
            -75,
            6
        ],
        label: 1
    },
    {
        features: [
            -2,
            -33
        ],
        label: 0
    },
    {
        features: [
            -64,
            -93
        ],
        label: 0
    },
    {
        features: [
            -58,
            29
        ],
        label: 1
    },
    {
        features: [
            -97,
            -60
        ],
        label: 0
    },
    {
        features: [
            -68,
            -79
        ],
        label: 0
    },
    {
        features: [
            44,
            13
        ],
        label: 1
    },
    {
        features: [
            -27,
            -69
        ],
        label: 0
    },
    {
        features: [
            -48,
            -60
        ],
        label: 0
    },
    {
        features: [
            -96,
            51
        ],
        label: 1
    },
    {
        features: [
            86,
            -53
        ],
        label: 0
    },
    {
        features: [
            -87,
            -80
        ],
        label: 0
    },
    {
        features: [
            -62,
            83
        ],
        label: 1
    },
    {
        features: [
            93,
            77
        ],
        label: 1
    },
    {
        features: [
            -35,
            100
        ],
        label: 1
    },
    {
        features: [
            84,
            13
        ],
        label: 1
    },
    {
        features: [
            -98,
            25
        ],
        label: 1
    },
    {
        features: [
            -25,
            84
        ],
        label: 1
    },
    {
        features: [
            65,
            -15
        ],
        label: 0
    },
    {
        features: [
            -95,
            6
        ],
        label: 1
    },
    {
        features: [
            -100,
            83
        ],
        label: 1
    },
    {
        features: [
            -27,
            73
        ],
        label: 1
    },
    {
        features: [
            -20,
            14
        ],
        label: 1
    },
    {
        features: [
            -24,
            -24
        ],
        label: 0
    },
    {
        features: [
            -4,
            90
        ],
        label: 1
    },
    {
        features: [
            -3,
            -81
        ],
        label: 0
    },
    {
        features: [
            21,
            55
        ],
        label: 1
    },
    {
        features: [
            3,
            -59
        ],
        label: 0
    },
    {
        features: [
            66,
            26
        ],
        label: 1
    },
    {
        features: [
            36,
            54
        ],
        label: 1
    },
    {
        features: [
            52,
            -37
        ],
        label: 0
    },
    {
        features: [
            72,
            12
        ],
        label: 1
    },
    {
        features: [
            98,
            -54
        ],
        label: 0
    },
    {
        features: [
            -90,
            -5
        ],
        label: 0
    },
    {
        features: [
            -9,
            -27
        ],
        label: 0
    },
    {
        features: [
            -43,
            76
        ],
        label: 1
    },
    {
        features: [
            71,
            -24
        ],
        label: 0
    },
    {
        features: [
            25,
            63
        ],
        label: 1
    },
    {
        features: [
            92,
            17
        ],
        label: 1
    },
    {
        features: [
            -22,
            -65
        ],
        label: 0
    },
    {
        features: [
            -51,
            95
        ],
        label: 1
    },
    {
        features: [
            -57,
            90
        ],
        label: 1
    },
    {
        features: [
            100,
            7
        ],
        label: 1
    },
    {
        features: [
            -39,
            47
        ],
        label: 1
    },
    {
        features: [
            23,
            62
        ],
        label: 1
    },
    {
        features: [
            88,
            -90
        ],
        label: 0
    },
    {
        features: [
            -86,
            -1
        ],
        label: 0
    },
    {
        features: [
            98,
            -32
        ],
        label: 0
    },
    {
        features: [
            23,
            -83
        ],
        label: 0
    },
    {
        features: [
            -98,
            -24
        ],
        label: 0
    },
    {
        features: [
            16,
            -63
        ],
        label: 0
    },
    {
        features: [
            -94,
            -30
        ],
        label: 0
    },
    {
        features: [
            -84,
            -96
        ],
        label: 0
    },
    {
        features: [
            -7,
            40
        ],
        label: 1
    },
    {
        features: [
            -33,
            -19
        ],
        label: 0
    },
    {
        features: [
            22,
            23
        ],
        label: 1
    },
    {
        features: [
            -56,
            61
        ],
        label: 1
    },
    {
        features: [
            77,
            -43
        ],
        label: 0
    },
    {
        features: [
            9,
            60
        ],
        label: 1
    },
    {
        features: [
            2,
            -100
        ],
        label: 0
    },
    {
        features: [
            51,
            76
        ],
        label: 1
    },
    {
        features: [
            -76,
            93
        ],
        label: 1
    },
    {
        features: [
            96,
            -79
        ],
        label: 0
    },
    {
        features: [
            -15,
            -31
        ],
        label: 0
    },
    {
        features: [
            4,
            -46
        ],
        label: 0
    },
    {
        features: [
            -7,
            -65
        ],
        label: 0
    },
    {
        features: [
            20,
            47
        ],
        label: 1
    },
    {
        features: [
            98,
            -29
        ],
        label: 0
    },
    {
        features: [
            2,
            -71
        ],
        label: 0
    },
    {
        features: [
            49,
            -46
        ],
        label: 0
    },
    {
        features: [
            95,
            87
        ],
        label: 1
    },
    {
        features: [
            -84,
            25
        ],
        label: 1
    },
    {
        features: [
            -88,
            76
        ],
        label: 1
    },
    {
        features: [
            -75,
            42
        ],
        label: 1
    },
    {
        features: [
            12,
            69
        ],
        label: 1
    },
    {
        features: [
            84,
            -36
        ],
        label: 0
    },
    {
        features: [
            -50,
            44
        ],
        label: 1
    },
    {
        features: [
            -12,
            -31
        ],
        label: 0
    },
    {
        features: [
            -7,
            33
        ],
        label: 1
    },
    {
        features: [
            52,
            10
        ],
        label: 1
    },
    {
        features: [
            43,
            -46
        ],
        label: 0
    },
    {
        features: [
            27,
            -16
        ],
        label: 0
    },
    {
        features: [
            57,
            82
        ],
        label: 1
    },
    {
        features: [
            9,
            -80
        ],
        label: 0
    },
    {
        features: [
            -30,
            -88
        ],
        label: 0
    },
    {
        features: [
            42,
            61
        ],
        label: 1
    },
    {
        features: [
            84,
            -39
        ],
        label: 0
    },
    {
        features: [
            -5,
            87
        ],
        label: 1
    },
    {
        features: [
            56,
            41
        ],
        label: 1
    },
    {
        features: [
            14,
            -87
        ],
        label: 0
    },
    {
        features: [
            16,
            -90
        ],
        label: 0
    },
    {
        features: [
            -15,
            74
        ],
        label: 1
    },
    {
        features: [
            24,
            17
        ],
        label: 1
    },
    {
        features: [
            -75,
            91
        ],
        label: 1
    },
    {
        features: [
            9,
            -64
        ],
        label: 0
    },
    {
        features: [
            50,
            34
        ],
        label: 1
    },
    {
        features: [
            78,
            64
        ],
        label: 1
    },
    {
        features: [
            -85,
            -39
        ],
        label: 0
    },
    {
        features: [
            72,
            85
        ],
        label: 1
    },
    {
        features: [
            -41,
            -45
        ],
        label: 0
    },
    {
        features: [
            88,
            -21
        ],
        label: 0
    },
    {
        features: [
            -45,
            -99
        ],
        label: 0
    },
    {
        features: [
            -63,
            47
        ],
        label: 1
    },
    {
        features: [
            53,
            54
        ],
        label: 1
    },
    {
        features: [
            -51,
            89
        ],
        label: 1
    },
    {
        features: [
            -20,
            23
        ],
        label: 1
    },
    {
        features: [
            -64,
            75
        ],
        label: 1
    },
    {
        features: [
            96,
            -76
        ],
        label: 0
    },
    {
        features: [
            10,
            89
        ],
        label: 1
    },
    {
        features: [
            23,
            7
        ],
        label: 1
    },
    {
        features: [
            -98,
            41
        ],
        label: 1
    },
    {
        features: [
            4,
            25
        ],
        label: 1
    },
    {
        features: [
            -20,
            83
        ],
        label: 1
    },
    {
        features: [
            78,
            -52
        ],
        label: 0
    },
    {
        features: [
            88,
            99
        ],
        label: 1
    },
    {
        features: [
            36,
            77
        ],
        label: 1
    },
    {
        features: [
            -92,
            76
        ],
        label: 1
    },
    {
        features: [
            23,
            -67
        ],
        label: 0
    },
    {
        features: [
            22,
            -7
        ],
        label: 0
    },
    {
        features: [
            25,
            -66
        ],
        label: 0
    },
    {
        features: [
            81,
            -81
        ],
        label: 0
    },
    {
        features: [
            -10,
            -47
        ],
        label: 0
    },
    {
        features: [
            -70,
            85
        ],
        label: 1
    },
    {
        features: [
            42,
            -33
        ],
        label: 0
    },
    {
        features: [
            47,
            2
        ],
        label: 1
    },
    {
        features: [
            -17,
            80
        ],
        label: 1
    },
    {
        features: [
            62,
            83
        ],
        label: 1
    },
    {
        features: [
            96,
            1
        ],
        label: 1
    },
    {
        features: [
            -19,
            -35
        ],
        label: 0
    },
    {
        features: [
            -36,
            89
        ],
        label: 1
    },
    {
        features: [
            30,
            85
        ],
        label: 1
    },
    {
        features: [
            66,
            53
        ],
        label: 1
    },
    {
        features: [
            -54,
            -26
        ],
        label: 0
    },
    {
        features: [
            74,
            81
        ],
        label: 1
    },
    {
        features: [
            26,
            -55
        ],
        label: 0
    },
    {
        features: [
            33,
            -42
        ],
        label: 0
    },
    {
        features: [
            -25,
            45
        ],
        label: 1
    },
    {
        features: [
            -89,
            -9
        ],
        label: 0
    },
    {
        features: [
            2,
            16
        ],
        label: 1
    },
    {
        features: [
            -2,
            86
        ],
        label: 1
    },
    {
        features: [
            -35,
            -42
        ],
        label: 0
    },
    {
        features: [
            85,
            60
        ],
        label: 1
    },
    {
        features: [
            39,
            -85
        ],
        label: 0
    },
    {
        features: [
            -62,
            70
        ],
        label: 1
    },
    {
        features: [
            -11,
            -72
        ],
        label: 0
    },
    {
        features: [
            1,
            -33
        ],
        label: 0
    },
    {
        features: [
            58,
            39
        ],
        label: 1
    },
    {
        features: [
            95,
            6
        ],
        label: 1
    },
    {
        features: [
            17,
            66
        ],
        label: 1
    },
    {
        features: [
            -31,
            24
        ],
        label: 1
    },
    {
        features: [
            -72,
            -15
        ],
        label: 0
    },
    {
        features: [
            -87,
            -49
        ],
        label: 0
    },
    {
        features: [
            32,
            90
        ],
        label: 1
    },
    {
        features: [
            23,
            -24
        ],
        label: 0
    },
    {
        features: [
            35,
            -81
        ],
        label: 0
    },
    {
        features: [
            15,
            -84
        ],
        label: 0
    },
    {
        features: [
            -52,
            -27
        ],
        label: 0
    },
    {
        features: [
            45,
            49
        ],
        label: 1
    },
    {
        features: [
            -61,
            -82
        ],
        label: 0
    },
    {
        features: [
            -22,
            81
        ],
        label: 1
    },
    {
        features: [
            -9,
            50
        ],
        label: 1
    },
    {
        features: [
            -34,
            25
        ],
        label: 1
    },
    {
        features: [
            72,
            2
        ],
        label: 1
    },
    {
        features: [
            -31,
            -37
        ],
        label: 0
    },
    {
        features: [
            56,
            -26
        ],
        label: 0
    },
    {
        features: [
            -50,
            -17
        ],
        label: 0
    },
    {
        features: [
            -35,
            -86
        ],
        label: 0
    },
    {
        features: [
            85,
            -93
        ],
        label: 0
    },
    {
        features: [
            20,
            2
        ],
        label: 1
    },
    {
        features: [
            35,
            -3
        ],
        label: 0
    },
    {
        features: [
            -2,
            51
        ],
        label: 1
    },
    {
        features: [
            -52,
            -61
        ],
        label: 0
    },
    {
        features: [
            -80,
            -25
        ],
        label: 0
    },
    {
        features: [
            49,
            92
        ],
        label: 1
    },
    {
        features: [
            51,
            83
        ],
        label: 1
    },
    {
        features: [
            -74,
            -9
        ],
        label: 0
    },
    {
        features: [
            -51,
            -54
        ],
        label: 0
    },
    {
        features: [
            52,
            46
        ],
        label: 1
    },
    {
        features: [
            -65,
            -25
        ],
        label: 0
    },
    {
        features: [
            41,
            6
        ],
        label: 1
    },
    {
        features: [
            -39,
            5
        ],
        label: 1
    },
    {
        features: [
            91,
            -70
        ],
        label: 0
    },
    {
        features: [
            8,
            85
        ],
        label: 1
    },
    {
        features: [
            -90,
            -88
        ],
        label: 0
    },
    {
        features: [
            -59,
            53
        ],
        label: 1
    },
    {
        features: [
            32,
            -44
        ],
        label: 0
    },
    {
        features: [
            -11,
            -4
        ],
        label: 0
    },
    {
        features: [
            -81,
            -16
        ],
        label: 0
    },
    {
        features: [
            -38,
            -47
        ],
        label: 0
    },
    {
        features: [
            42,
            -81
        ],
        label: 0
    },
    {
        features: [
            34,
            -31
        ],
        label: 0
    },
    {
        features: [
            5,
            -4
        ],
        label: 0
    },
    {
        features: [
            25,
            89
        ],
        label: 1
    },
    {
        features: [
            41,
            41
        ],
        label: 1
    },
    {
        features: [
            67,
            -81
        ],
        label: 0
    },
    {
        features: [
            -96,
            84
        ],
        label: 1
    },
    {
        features: [
            58,
            84
        ],
        label: 1
    },
    {
        features: [
            -67,
            -2
        ],
        label: 0
    },
    {
        features: [
            -4,
            92
        ],
        label: 1
    },
    {
        features: [
            14,
            -84
        ],
        label: 0
    },
    {
        features: [
            99,
            61
        ],
        label: 1
    },
    {
        features: [
            19,
            72
        ],
        label: 1
    },
    {
        features: [
            77,
            -8
        ],
        label: 0
    },
    {
        features: [
            -50,
            -80
        ],
        label: 0
    },
    {
        features: [
            88,
            50
        ],
        label: 1
    },
    {
        features: [
            13,
            88
        ],
        label: 1
    },
    {
        features: [
            -34,
            41
        ],
        label: 1
    },
    {
        features: [
            -14,
            -9
        ],
        label: 0
    },
    {
        features: [
            25,
            -25
        ],
        label: 0
    },
    {
        features: [
            -79,
            -58
        ],
        label: 0
    },
    {
        features: [
            69,
            35
        ],
        label: 1
    },
    {
        features: [
            -35,
            20
        ],
        label: 1
    },
    {
        features: [
            -94,
            -35
        ],
        label: 0
    },
    {
        features: [
            -15,
            -35
        ],
        label: 0
    },
    {
        features: [
            58,
            23
        ],
        label: 1
    },
    {
        features: [
            69,
            1
        ],
        label: 1
    },
    {
        features: [
            -30,
            34
        ],
        label: 1
    },
    {
        features: [
            66,
            7
        ],
        label: 1
    },
    {
        features: [
            -62,
            56
        ],
        label: 1
    },
    {
        features: [
            42,
            -59
        ],
        label: 0
    },
    {
        features: [
            4,
            35
        ],
        label: 1
    },
    {
        features: [
            -49,
            14
        ],
        label: 1
    },
    {
        features: [
            -18,
            4
        ],
        label: 1
    },
    {
        features: [
            80,
            3
        ],
        label: 1
    },
    {
        features: [
            51,
            -34
        ],
        label: 0
    },
    {
        features: [
            -69,
            -78
        ],
        label: 0
    },
    {
        features: [
            -48,
            -92
        ],
        label: 0
    },
    {
        features: [
            -33,
            -13
        ],
        label: 0
    },
    {
        features: [
            8,
            78
        ],
        label: 1
    },
    {
        features: [
            -93,
            -45
        ],
        label: 0
    },
    {
        features: [
            46,
            7
        ],
        label: 1
    },
    {
        features: [
            -53,
            -17
        ],
        label: 0
    },
    {
        features: [
            85,
            -40
        ],
        label: 0
    },
    {
        features: [
            54,
            -24
        ],
        label: 0
    },
    {
        features: [
            -50,
            89
        ],
        label: 1
    },
    {
        features: [
            -12,
            -86
        ],
        label: 0
    },
    {
        features: [
            91,
            90
        ],
        label: 1
    },
    {
        features: [
            83,
            55
        ],
        label: 1
    },
    {
        features: [
            80,
            -72
        ],
        label: 0
    },
    {
        features: [
            91,
            97
        ],
        label: 1
    },
    {
        features: [
            -66,
            -92
        ],
        label: 0
    },
    {
        features: [
            64,
            -59
        ],
        label: 0
    },
    {
        features: [
            -80,
            -44
        ],
        label: 0
    },
    {
        features: [
            5,
            -29
        ],
        label: 0
    },
    {
        features: [
            94,
            83
        ],
        label: 1
    },
    {
        features: [
            16,
            72
        ],
        label: 1
    },
    {
        features: [
            87,
            12
        ],
        label: 1
    },
    {
        features: [
            -42,
            -80
        ],
        label: 0
    },
    {
        features: [
            25,
            -72
        ],
        label: 0
    },
    {
        features: [
            98,
            40
        ],
        label: 1
    },
    {
        features: [
            -6,
            -52
        ],
        label: 0
    },
    {
        features: [
            24,
            -15
        ],
        label: 0
    },
    {
        features: [
            69,
            -100
        ],
        label: 0
    },
    {
        features: [
            59,
            -48
        ],
        label: 0
    },
    {
        features: [
            -15,
            11
        ],
        label: 1
    },
    {
        features: [
            47,
            -54
        ],
        label: 0
    },
    {
        features: [
            -10,
            90
        ],
        label: 1
    },
    {
        features: [
            -20,
            3
        ],
        label: 1
    },
    {
        features: [
            -36,
            34
        ],
        label: 1
    },
    {
        features: [
            -93,
            79
        ],
        label: 1
    },
    {
        features: [
            -27,
            -53
        ],
        label: 0
    },
    {
        features: [
            87,
            66
        ],
        label: 1
    },
    {
        features: [
            53,
            17
        ],
        label: 1
    },
    {
        features: [
            -17,
            55
        ],
        label: 1
    },
    {
        features: [
            -82,
            37
        ],
        label: 1
    },
    {
        features: [
            -33,
            13
        ],
        label: 1
    },
    {
        features: [
            -47,
            65
        ],
        label: 1
    },
    {
        features: [
            -57,
            40
        ],
        label: 1
    },
    {
        features: [
            12,
            26
        ],
        label: 1
    },
    {
        features: [
            97,
            -33
        ],
        label: 0
    },
    {
        features: [
            99,
            -9
        ],
        label: 0
    },
    {
        features: [
            34,
            57
        ],
        label: 1
    },
    {
        features: [
            44,
            80
        ],
        label: 1
    },
    {
        features: [
            62,
            65
        ],
        label: 1
    },
    {
        features: [
            -98,
            -78
        ],
        label: 0
    },
    {
        features: [
            -49,
            -69
        ],
        label: 0
    },
    {
        features: [
            63,
            58
        ],
        label: 1
    },
    {
        features: [
            -89,
            51
        ],
        label: 1
    },
    {
        features: [
            -40,
            2
        ],
        label: 1
    },
    {
        features: [
            78,
            -73
        ],
        label: 0
    },
    {
        features: [
            0,
            57
        ],
        label: 1
    },
    {
        features: [
            -2,
            72
        ],
        label: 1
    },
    {
        features: [
            3,
            56
        ],
        label: 1
    },
    {
        features: [
            -33,
            64
        ],
        label: 1
    },
    {
        features: [
            -62,
            -56
        ],
        label: 0
    },
    {
        features: [
            -20,
            28
        ],
        label: 1
    },
    {
        features: [
            -13,
            -9
        ],
        label: 0
    },
    {
        features: [
            31,
            -87
        ],
        label: 0
    },
    {
        features: [
            56,
            -24
        ],
        label: 0
    },
    {
        features: [
            93,
            -65
        ],
        label: 0
    },
    {
        features: [
            -74,
            -74
        ],
        label: 0
    },
    {
        features: [
            -3,
            65
        ],
        label: 1
    },
    {
        features: [
            -62,
            -27
        ],
        label: 0
    },
    {
        features: [
            34,
            -1
        ],
        label: 1
    },
    {
        features: [
            14,
            30
        ],
        label: 1
    },
    {
        features: [
            51,
            59
        ],
        label: 1
    },
    {
        features: [
            73,
            -33
        ],
        label: 0
    },
    {
        features: [
            35,
            -9
        ],
        label: 0
    },
    {
        features: [
            -78,
            98
        ],
        label: 1
    },
    {
        features: [
            44,
            1
        ],
        label: 1
    },
    {
        features: [
            61,
            68
        ],
        label: 1
    },
    {
        features: [
            -35,
            -100
        ],
        label: 0
    },
    {
        features: [
            -100,
            62
        ],
        label: 1
    },
    {
        features: [
            -82,
            68
        ],
        label: 1
    },
    {
        features: [
            -1,
            -22
        ],
        label: 0
    },
    {
        features: [
            73,
            62
        ],
        label: 1
    },
    {
        features: [
            19,
            -42
        ],
        label: 0
    },
    {
        features: [
            70,
            64
        ],
        label: 1
    },
    {
        features: [
            77,
            81
        ],
        label: 1
    },
    {
        features: [
            -4,
            -64
        ],
        label: 0
    },
    {
        features: [
            17,
            -47
        ],
        label: 0
    },
    {
        features: [
            91,
            -89
        ],
        label: 0
    },
    {
        features: [
            -10,
            -97
        ],
        label: 0
    },
    {
        features: [
            19,
            76
        ],
        label: 1
    },
    {
        features: [
            -64,
            -2
        ],
        label: 0
    },
    {
        features: [
            -26,
            70
        ],
        label: 1
    },
    {
        features: [
            5,
            66
        ],
        label: 1
    },
    {
        features: [
            -74,
            -63
        ],
        label: 0
    },
    {
        features: [
            33,
            -4
        ],
        label: 0
    },
    {
        features: [
            42,
            77
        ],
        label: 1
    },
    {
        features: [
            74,
            -94
        ],
        label: 0
    },
    {
        features: [
            -1,
            8
        ],
        label: 1
    },
    {
        features: [
            0,
            10
        ],
        label: 1
    },
    {
        features: [
            -69,
            73
        ],
        label: 1
    },
    {
        features: [
            -2,
            33
        ],
        label: 1
    },
    {
        features: [
            -25,
            96
        ],
        label: 1
    },
    {
        features: [
            -100,
            -37
        ],
        label: 0
    },
    {
        features: [
            53,
            3
        ],
        label: 1
    },
    {
        features: [
            -46,
            70
        ],
        label: 1
    },
    {
        features: [
            32,
            39
        ],
        label: 1
    },
    {
        features: [
            -68,
            -34
        ],
        label: 0
    },
    {
        features: [
            32,
            -94
        ],
        label: 0
    },
    {
        features: [
            20,
            -88
        ],
        label: 0
    },
    {
        features: [
            -71,
            59
        ],
        label: 1
    },
    {
        features: [
            92,
            -19
        ],
        label: 0
    },
    {
        features: [
            -15,
            -32
        ],
        label: 0
    },
    {
        features: [
            75,
            -10
        ],
        label: 0
    },
    {
        features: [
            35,
            71
        ],
        label: 1
    },
    {
        features: [
            -86,
            -36
        ],
        label: 0
    },
    {
        features: [
            31,
            66
        ],
        label: 1
    },
    {
        features: [
            -96,
            -23
        ],
        label: 0
    },
    {
        features: [
            55,
            23
        ],
        label: 1
    },
    {
        features: [
            -63,
            4
        ],
        label: 1
    },
    {
        features: [
            32,
            -54
        ],
        label: 0
    },
    {
        features: [
            93,
            98
        ],
        label: 1
    },
    {
        features: [
            11,
            12
        ],
        label: 1
    },
    {
        features: [
            74,
            45
        ],
        label: 1
    },
    {
        features: [
            86,
            -41
        ],
        label: 0
    },
    {
        features: [
            1,
            -11
        ],
        label: 0
    },
    {
        features: [
            73,
            4
        ],
        label: 1
    },
    {
        features: [
            -25,
            -91
        ],
        label: 0
    },
    {
        features: [
            -49,
            -31
        ],
        label: 0
    },
    {
        features: [
            -48,
            49
        ],
        label: 1
    },
    {
        features: [
            53,
            57
        ],
        label: 1
    },
    {
        features: [
            29,
            38
        ],
        label: 1
    },
    {
        features: [
            4,
            -82
        ],
        label: 0
    },
    {
        features: [
            18,
            -75
        ],
        label: 0
    },
    {
        features: [
            -67,
            36
        ],
        label: 1
    },
    {
        features: [
            65,
            16
        ],
        label: 1
    },
    {
        features: [
            -45,
            -76
        ],
        label: 0
    },
    {
        features: [
            -59,
            -89
        ],
        label: 0
    },
    {
        features: [
            -26,
            -53
        ],
        label: 0
    },
    {
        features: [
            28,
            -16
        ],
        label: 0
    },
    {
        features: [
            -73,
            22
        ],
        label: 1
    },
    {
        features: [
            -2,
            -19
        ],
        label: 0
    },
    {
        features: [
            -34,
            53
        ],
        label: 1
    },
    {
        features: [
            46,
            -26
        ],
        label: 0
    },
    {
        features: [
            20,
            -15
        ],
        label: 0
    },
    {
        features: [
            92,
            55
        ],
        label: 1
    },
    {
        features: [
            -44,
            -19
        ],
        label: 0
    },
    {
        features: [
            11,
            26
        ],
        label: 1
    },
    {
        features: [
            26,
            -98
        ],
        label: 0
    },
    {
        features: [
            -51,
            17
        ],
        label: 1
    },
    {
        features: [
            -34,
            29
        ],
        label: 1
    },
    {
        features: [
            94,
            -71
        ],
        label: 0
    },
    {
        features: [
            15,
            13
        ],
        label: 1
    },
    {
        features: [
            9,
            -11
        ],
        label: 0
    },
    {
        features: [
            -10,
            -9
        ],
        label: 0
    },
    {
        features: [
            37,
            -100
        ],
        label: 0
    },
    {
        features: [
            4,
            76
        ],
        label: 1
    },
    {
        features: [
            -37,
            15
        ],
        label: 1
    },
    {
        features: [
            -39,
            -10
        ],
        label: 0
    },
    {
        features: [
            -85,
            19
        ],
        label: 1
    },
    {
        features: [
            -25,
            -90
        ],
        label: 0
    },
    {
        features: [
            9,
            -80
        ],
        label: 0
    },
    {
        features: [
            -96,
            -47
        ],
        label: 0
    },
    {
        features: [
            33,
            -33
        ],
        label: 0
    },
    {
        features: [
            95,
            -41
        ],
        label: 0
    },
    {
        features: [
            52,
            4
        ],
        label: 1
    },
    {
        features: [
            96,
            85
        ],
        label: 1
    },
    {
        features: [
            72,
            -88
        ],
        label: 0
    },
    {
        features: [
            62,
            83
        ],
        label: 1
    },
    {
        features: [
            65,
            91
        ],
        label: 1
    },
    {
        features: [
            24,
            27
        ],
        label: 1
    },
    {
        features: [
            -28,
            82
        ],
        label: 1
    },
    {
        features: [
            -32,
            95
        ],
        label: 1
    },
    {
        features: [
            54,
            89
        ],
        label: 1
    },
    {
        features: [
            -28,
            23
        ],
        label: 1
    },
    {
        features: [
            -82,
            -68
        ],
        label: 0
    },
    {
        features: [
            87,
            -83
        ],
        label: 0
    },
    {
        features: [
            -95,
            31
        ],
        label: 1
    },
    {
        features: [
            -41,
            83
        ],
        label: 1
    },
    {
        features: [
            -3,
            79
        ],
        label: 1
    },
    {
        features: [
            3,
            -48
        ],
        label: 0
    },
    {
        features: [
            -17,
            55
        ],
        label: 1
    },
    {
        features: [
            47,
            11
        ],
        label: 1
    },
    {
        features: [
            -67,
            8
        ],
        label: 1
    },
    {
        features: [
            -75,
            -63
        ],
        label: 0
    },
    {
        features: [
            16,
            55
        ],
        label: 1
    },
    {
        features: [
            17,
            -44
        ],
        label: 0
    },
    {
        features: [
            81,
            -2
        ],
        label: 1
    },
    {
        features: [
            -60,
            -23
        ],
        label: 0
    },
    {
        features: [
            -1,
            -68
        ],
        label: 0
    },
    {
        features: [
            -15,
            -13
        ],
        label: 0
    },
    {
        features: [
            -54,
            -99
        ],
        label: 0
    },
    {
        features: [
            -54,
            -45
        ],
        label: 0
    },
    {
        features: [
            -72,
            35
        ],
        label: 1
    },
    {
        features: [
            83,
            -88
        ],
        label: 0
    },
    {
        features: [
            23,
            57
        ],
        label: 1
    },
    {
        features: [
            38,
            83
        ],
        label: 1
    },
    {
        features: [
            -16,
            18
        ],
        label: 1
    },
    {
        features: [
            -40,
            -19
        ],
        label: 0
    },
    {
        features: [
            -59,
            83
        ],
        label: 1
    },
    {
        features: [
            53,
            -30
        ],
        label: 0
    },
    {
        features: [
            -79,
            -63
        ],
        label: 0
    },
    {
        features: [
            10,
            -19
        ],
        label: 0
    },
    {
        features: [
            46,
            -29
        ],
        label: 0
    },
    {
        features: [
            -4,
            -50
        ],
        label: 0
    },
    {
        features: [
            -6,
            27
        ],
        label: 1
    },
    {
        features: [
            40,
            -86
        ],
        label: 0
    },
    {
        features: [
            31,
            45
        ],
        label: 1
    },
    {
        features: [
            42,
            -41
        ],
        label: 0
    },
    {
        features: [
            28,
            3
        ],
        label: 1
    },
    {
        features: [
            43,
            -31
        ],
        label: 0
    },
    {
        features: [
            -30,
            -15
        ],
        label: 0
    },
    {
        features: [
            -71,
            -49
        ],
        label: 0
    },
    {
        features: [
            9,
            65
        ],
        label: 1
    },
    {
        features: [
            -78,
            -81
        ],
        label: 0
    },
    {
        features: [
            61,
            35
        ],
        label: 1
    },
    {
        features: [
            14,
            22
        ],
        label: 1
    },
    {
        features: [
            -85,
            31
        ],
        label: 1
    },
    {
        features: [
            -96,
            86
        ],
        label: 1
    },
    {
        features: [
            -15,
            78
        ],
        label: 1
    },
    {
        features: [
            45,
            54
        ],
        label: 1
    },
    {
        features: [
            -22,
            73
        ],
        label: 1
    },
    {
        features: [
            14,
            -53
        ],
        label: 0
    },
    {
        features: [
            48,
            -31
        ],
        label: 0
    },
    {
        features: [
            8,
            35
        ],
        label: 1
    },
    {
        features: [
            34,
            5
        ],
        label: 1
    },
    {
        features: [
            -84,
            63
        ],
        label: 1
    },
    {
        features: [
            52,
            -88
        ],
        label: 0
    },
    {
        features: [
            -15,
            57
        ],
        label: 1
    },
    {
        features: [
            -71,
            47
        ],
        label: 1
    },
    {
        features: [
            94,
            -94
        ],
        label: 0
    },
    {
        features: [
            -3,
            -19
        ],
        label: 0
    },
    {
        features: [
            -16,
            -1
        ],
        label: 0
    },
    {
        features: [
            54,
            9
        ],
        label: 1
    },
    {
        features: [
            -9,
            -29
        ],
        label: 0
    },
    {
        features: [
            11,
            -72
        ],
        label: 0
    },
    {
        features: [
            -31,
            -26
        ],
        label: 0
    },
    {
        features: [
            -71,
            -78
        ],
        label: 0
    },
    {
        features: [
            49,
            -28
        ],
        label: 0
    },
    {
        features: [
            -11,
            -60
        ],
        label: 0
    },
    {
        features: [
            8,
            41
        ],
        label: 1
    },
    {
        features: [
            -18,
            89
        ],
        label: 1
    },
    {
        features: [
            27,
            55
        ],
        label: 1
    },
    {
        features: [
            80,
            -18
        ],
        label: 0
    },
    {
        features: [
            -52,
            -55
        ],
        label: 0
    },
    {
        features: [
            34,
            -25
        ],
        label: 0
    },
    {
        features: [
            100,
            40
        ],
        label: 1
    },
    {
        features: [
            -6,
            -8
        ],
        label: 0
    },
    {
        features: [
            38,
            -8
        ],
        label: 0
    },
    {
        features: [
            -17,
            -20
        ],
        label: 0
    },
    {
        features: [
            43,
            56
        ],
        label: 1
    },
    {
        features: [
            -9,
            -42
        ],
        label: 0
    },
    {
        features: [
            -7,
            -34
        ],
        label: 0
    },
    {
        features: [
            -4,
            -58
        ],
        label: 0
    },
    {
        features: [
            41,
            -54
        ],
        label: 0
    },
    {
        features: [
            -98,
            97
        ],
        label: 1
    },
    {
        features: [
            64,
            65
        ],
        label: 1
    },
    {
        features: [
            4,
            24
        ],
        label: 1
    },
    {
        features: [
            -82,
            10
        ],
        label: 1
    },
    {
        features: [
            -43,
            -24
        ],
        label: 0
    },
    {
        features: [
            -49,
            45
        ],
        label: 1
    },
    {
        features: [
            -52,
            70
        ],
        label: 1
    }
]

export const DATASET_2: Sample[] = [
    {
        "features": [
            74,
            90
        ],
        "label": 1
    },
    {
        "features": [
            -85,
            93
        ],
        "label": 0
    },
    {
        "features": [
            -7,
            -30
        ],
        "label": 0
    },
    {
        "features": [
            -68,
            69
        ],
        "label": 0
    },
    {
        "features": [
            21,
            -20
        ],
        "label": 1
    },
    {
        "features": [
            37,
            -77
        ],
        "label": 1
    },
    {
        "features": [
            -11,
            82
        ],
        "label": 1
    },
    {
        "features": [
            38,
            -42
        ],
        "label": 1
    },
    {
        "features": [
            -97,
            83
        ],
        "label": 0
    },
    {
        "features": [
            92,
            -60
        ],
        "label": 1
    },
    {
        "features": [
            32,
            -10
        ],
        "label": 1
    },
    {
        "features": [
            36,
            -90
        ],
        "label": 1
    },
    {
        "features": [
            37,
            -80
        ],
        "label": 1
    },
    {
        "features": [
            -8,
            -47
        ],
        "label": 0
    },
    {
        "features": [
            74,
            48
        ],
        "label": 1
    },
    {
        "features": [
            60,
            -96
        ],
        "label": 1
    },
    {
        "features": [
            -47,
            -56
        ],
        "label": 0
    },
    {
        "features": [
            91,
            32
        ],
        "label": 1
    },
    {
        "features": [
            -44,
            -13
        ],
        "label": 0
    },
    {
        "features": [
            26,
            15
        ],
        "label": 1
    },
    {
        "features": [
            -92,
            11
        ],
        "label": 0
    },
    {
        "features": [
            -44,
            6
        ],
        "label": 0
    },
    {
        "features": [
            96,
            38
        ],
        "label": 1
    },
    {
        "features": [
            -74,
            -17
        ],
        "label": 0
    },
    {
        "features": [
            -91,
            28
        ],
        "label": 0
    },
    {
        "features": [
            39,
            -4
        ],
        "label": 1
    },
    {
        "features": [
            -34,
            90
        ],
        "label": 0
    },
    {
        "features": [
            71,
            -31
        ],
        "label": 1
    },
    {
        "features": [
            36,
            9
        ],
        "label": 1
    },
    {
        "features": [
            9,
            -58
        ],
        "label": 0
    },
    {
        "features": [
            39,
            -16
        ],
        "label": 1
    },
    {
        "features": [
            -42,
            19
        ],
        "label": 0
    },
    {
        "features": [
            -81,
            -58
        ],
        "label": 0
    },
    {
        "features": [
            86,
            60
        ],
        "label": 1
    },
    {
        "features": [
            30,
            62
        ],
        "label": 1
    },
    {
        "features": [
            -88,
            -11
        ],
        "label": 0
    },
    {
        "features": [
            94,
            16
        ],
        "label": 1
    },
    {
        "features": [
            -55,
            -95
        ],
        "label": 0
    },
    {
        "features": [
            -38,
            -27
        ],
        "label": 0
    },
    {
        "features": [
            -3,
            59
        ],
        "label": 1
    },
    {
        "features": [
            65,
            93
        ],
        "label": 1
    },
    {
        "features": [
            -66,
            17
        ],
        "label": 0
    },
    {
        "features": [
            -92,
            8
        ],
        "label": 0
    },
    {
        "features": [
            44,
            -24
        ],
        "label": 1
    },
    {
        "features": [
            30,
            25
        ],
        "label": 1
    },
    {
        "features": [
            -56,
            14
        ],
        "label": 0
    },
    {
        "features": [
            -73,
            20
        ],
        "label": 0
    },
    {
        "features": [
            -36,
            -61
        ],
        "label": 0
    },
    {
        "features": [
            14,
            -59
        ],
        "label": 0
    },
    {
        "features": [
            -70,
            -72
        ],
        "label": 0
    },
    {
        "features": [
            98,
            74
        ],
        "label": 1
    },
    {
        "features": [
            -55,
            -32
        ],
        "label": 0
    },
    {
        "features": [
            84,
            -24
        ],
        "label": 1
    },
    {
        "features": [
            42,
            11
        ],
        "label": 1
    },
    {
        "features": [
            55,
            90
        ],
        "label": 1
    },
    {
        "features": [
            -97,
            3
        ],
        "label": 0
    },
    {
        "features": [
            -38,
            44
        ],
        "label": 0
    },
    {
        "features": [
            53,
            91
        ],
        "label": 1
    },
    {
        "features": [
            -29,
            -90
        ],
        "label": 0
    },
    {
        "features": [
            -85,
            21
        ],
        "label": 0
    },
    {
        "features": [
            -37,
            34
        ],
        "label": 0
    },
    {
        "features": [
            -52,
            -15
        ],
        "label": 0
    },
    {
        "features": [
            7,
            89
        ],
        "label": 1
    },
    {
        "features": [
            89,
            56
        ],
        "label": 1
    },
    {
        "features": [
            -31,
            -23
        ],
        "label": 0
    },
    {
        "features": [
            -53,
            -28
        ],
        "label": 0
    },
    {
        "features": [
            66,
            -88
        ],
        "label": 1
    },
    {
        "features": [
            56,
            -42
        ],
        "label": 1
    },
    {
        "features": [
            30,
            -8
        ],
        "label": 1
    },
    {
        "features": [
            -27,
            94
        ],
        "label": 0
    },
    {
        "features": [
            -29,
            20
        ],
        "label": 0
    },
    {
        "features": [
            -58,
            -56
        ],
        "label": 0
    },
    {
        "features": [
            33,
            85
        ],
        "label": 1
    },
    {
        "features": [
            -75,
            -43
        ],
        "label": 0
    },
    {
        "features": [
            -26,
            90
        ],
        "label": 0
    },
    {
        "features": [
            -70,
            59
        ],
        "label": 0
    },
    {
        "features": [
            -14,
            -86
        ],
        "label": 0
    },
    {
        "features": [
            12,
            65
        ],
        "label": 1
    },
    {
        "features": [
            -13,
            70
        ],
        "label": 1
    },
    {
        "features": [
            20,
            3
        ],
        "label": 1
    },
    {
        "features": [
            -34,
            -68
        ],
        "label": 0
    },
    {
        "features": [
            -76,
            27
        ],
        "label": 0
    },
    {
        "features": [
            -94,
            86
        ],
        "label": 0
    },
    {
        "features": [
            20,
            33
        ],
        "label": 1
    },
    {
        "features": [
            79,
            36
        ],
        "label": 1
    },
    {
        "features": [
            0,
            -38
        ],
        "label": 0
    },
    {
        "features": [
            -40,
            10
        ],
        "label": 0
    },
    {
        "features": [
            -13,
            -27
        ],
        "label": 0
    },
    {
        "features": [
            65,
            68
        ],
        "label": 1
    },
    {
        "features": [
            -66,
            19
        ],
        "label": 0
    },
    {
        "features": [
            -39,
            -27
        ],
        "label": 0
    },
    {
        "features": [
            -47,
            -21
        ],
        "label": 0
    },
    {
        "features": [
            39,
            39
        ],
        "label": 1
    },
    {
        "features": [
            12,
            -38
        ],
        "label": 1
    },
    {
        "features": [
            32,
            70
        ],
        "label": 1
    },
    {
        "features": [
            -95,
            -6
        ],
        "label": 0
    },
    {
        "features": [
            97,
            65
        ],
        "label": 1
    },
    {
        "features": [
            17,
            -10
        ],
        "label": 1
    },
    {
        "features": [
            12,
            58
        ],
        "label": 1
    },
    {
        "features": [
            -29,
            96
        ],
        "label": 0
    },
    {
        "features": [
            60,
            -27
        ],
        "label": 1
    },
    {
        "features": [
            -8,
            -90
        ],
        "label": 0
    },
    {
        "features": [
            97,
            30
        ],
        "label": 1
    },
    {
        "features": [
            83,
            66
        ],
        "label": 1
    },
    {
        "features": [
            99,
            -75
        ],
        "label": 1
    },
    {
        "features": [
            19,
            51
        ],
        "label": 1
    },
    {
        "features": [
            70,
            24
        ],
        "label": 1
    },
    {
        "features": [
            13,
            23
        ],
        "label": 1
    },
    {
        "features": [
            -57,
            -81
        ],
        "label": 0
    },
    {
        "features": [
            -3,
            -11
        ],
        "label": 0
    },
    {
        "features": [
            25,
            52
        ],
        "label": 1
    },
    {
        "features": [
            -16,
            98
        ],
        "label": 1
    },
    {
        "features": [
            -67,
            -50
        ],
        "label": 0
    },
    {
        "features": [
            -98,
            53
        ],
        "label": 0
    },
    {
        "features": [
            89,
            99
        ],
        "label": 1
    },
    {
        "features": [
            -7,
            10
        ],
        "label": 0
    },
    {
        "features": [
            13,
            40
        ],
        "label": 1
    },
    {
        "features": [
            -61,
            -56
        ],
        "label": 0
    },
    {
        "features": [
            -22,
            0
        ],
        "label": 0
    },
    {
        "features": [
            -13,
            57
        ],
        "label": 1
    },
    {
        "features": [
            -58,
            -51
        ],
        "label": 0
    },
    {
        "features": [
            -23,
            -18
        ],
        "label": 0
    },
    {
        "features": [
            100,
            11
        ],
        "label": 1
    },
    {
        "features": [
            67,
            -54
        ],
        "label": 1
    },
    {
        "features": [
            -95,
            -73
        ],
        "label": 0
    },
    {
        "features": [
            50,
            -12
        ],
        "label": 1
    },
    {
        "features": [
            -80,
            -61
        ],
        "label": 0
    },
    {
        "features": [
            -95,
            -4
        ],
        "label": 0
    },
    {
        "features": [
            -59,
            -26
        ],
        "label": 0
    },
    {
        "features": [
            4,
            -45
        ],
        "label": 0
    },
    {
        "features": [
            -21,
            -92
        ],
        "label": 0
    },
    {
        "features": [
            58,
            28
        ],
        "label": 1
    },
    {
        "features": [
            80,
            17
        ],
        "label": 1
    },
    {
        "features": [
            -11,
            -33
        ],
        "label": 0
    },
    {
        "features": [
            52,
            -60
        ],
        "label": 1
    },
    {
        "features": [
            -63,
            18
        ],
        "label": 0
    },
    {
        "features": [
            75,
            83
        ],
        "label": 1
    },
    {
        "features": [
            41,
            -65
        ],
        "label": 1
    },
    {
        "features": [
            18,
            31
        ],
        "label": 1
    },
    {
        "features": [
            94,
            27
        ],
        "label": 1
    },
    {
        "features": [
            8,
            -8
        ],
        "label": 1
    },
    {
        "features": [
            37,
            -89
        ],
        "label": 1
    },
    {
        "features": [
            30,
            -64
        ],
        "label": 1
    },
    {
        "features": [
            -7,
            32
        ],
        "label": 1
    },
    {
        "features": [
            88,
            34
        ],
        "label": 1
    },
    {
        "features": [
            -31,
            -98
        ],
        "label": 0
    },
    {
        "features": [
            92,
            31
        ],
        "label": 1
    },
    {
        "features": [
            37,
            -17
        ],
        "label": 1
    },
    {
        "features": [
            -13,
            73
        ],
        "label": 1
    },
    {
        "features": [
            -89,
            0
        ],
        "label": 0
    },
    {
        "features": [
            97,
            -67
        ],
        "label": 1
    },
    {
        "features": [
            8,
            35
        ],
        "label": 1
    },
    {
        "features": [
            90,
            98
        ],
        "label": 1
    },
    {
        "features": [
            -23,
            55
        ],
        "label": 0
    },
    {
        "features": [
            98,
            -52
        ],
        "label": 1
    },
    {
        "features": [
            38,
            2
        ],
        "label": 1
    },
    {
        "features": [
            32,
            -38
        ],
        "label": 1
    },
    {
        "features": [
            -21,
            79
        ],
        "label": 1
    },
    {
        "features": [
            -65,
            -60
        ],
        "label": 0
    },
    {
        "features": [
            72,
            16
        ],
        "label": 1
    },
    {
        "features": [
            -56,
            -67
        ],
        "label": 0
    },
    {
        "features": [
            38,
            3
        ],
        "label": 1
    },
    {
        "features": [
            76,
            69
        ],
        "label": 1
    },
    {
        "features": [
            19,
            33
        ],
        "label": 1
    },
    {
        "features": [
            98,
            76
        ],
        "label": 1
    },
    {
        "features": [
            -56,
            73
        ],
        "label": 0
    },
    {
        "features": [
            -18,
            -39
        ],
        "label": 0
    },
    {
        "features": [
            73,
            62
        ],
        "label": 1
    },
    {
        "features": [
            23,
            -99
        ],
        "label": 0
    },
    {
        "features": [
            77,
            25
        ],
        "label": 1
    },
    {
        "features": [
            -48,
            59
        ],
        "label": 0
    },
    {
        "features": [
            -14,
            25
        ],
        "label": 0
    },
    {
        "features": [
            -62,
            -95
        ],
        "label": 0
    },
    {
        "features": [
            56,
            85
        ],
        "label": 1
    },
    {
        "features": [
            -59,
            62
        ],
        "label": 0
    },
    {
        "features": [
            -99,
            78
        ],
        "label": 0
    },
    {
        "features": [
            -53,
            81
        ],
        "label": 0
    },
    {
        "features": [
            -45,
            -25
        ],
        "label": 0
    },
    {
        "features": [
            -58,
            51
        ],
        "label": 0
    },
    {
        "features": [
            -41,
            9
        ],
        "label": 0
    },
    {
        "features": [
            -12,
            76
        ],
        "label": 1
    },
    {
        "features": [
            62,
            62
        ],
        "label": 1
    },
    {
        "features": [
            -89,
            61
        ],
        "label": 0
    },
    {
        "features": [
            94,
            78
        ],
        "label": 1
    },
    {
        "features": [
            83,
            -87
        ],
        "label": 1
    },
    {
        "features": [
            86,
            -99
        ],
        "label": 1
    },
    {
        "features": [
            23,
            -95
        ],
        "label": 0
    },
    {
        "features": [
            -15,
            -89
        ],
        "label": 0
    },
    {
        "features": [
            -32,
            78
        ],
        "label": 0
    },
    {
        "features": [
            -54,
            52
        ],
        "label": 0
    },
    {
        "features": [
            51,
            35
        ],
        "label": 1
    },
    {
        "features": [
            2,
            52
        ],
        "label": 1
    },
    {
        "features": [
            -75,
            84
        ],
        "label": 0
    },
    {
        "features": [
            -24,
            1
        ],
        "label": 0
    },
    {
        "features": [
            63,
            -16
        ],
        "label": 1
    },
    {
        "features": [
            6,
            71
        ],
        "label": 1
    },
    {
        "features": [
            -5,
            91
        ],
        "label": 1
    },
    {
        "features": [
            41,
            54
        ],
        "label": 1
    },
    {
        "features": [
            -10,
            -44
        ],
        "label": 0
    },
    {
        "features": [
            -60,
            -8
        ],
        "label": 0
    },
    {
        "features": [
            -77,
            -83
        ],
        "label": 0
    },
    {
        "features": [
            17,
            -10
        ],
        "label": 1
    },
    {
        "features": [
            46,
            45
        ],
        "label": 1
    },
    {
        "features": [
            44,
            99
        ],
        "label": 1
    },
    {
        "features": [
            49,
            -92
        ],
        "label": 1
    },
    {
        "features": [
            38,
            65
        ],
        "label": 1
    },
    {
        "features": [
            26,
            -52
        ],
        "label": 1
    },
    {
        "features": [
            57,
            -50
        ],
        "label": 1
    },
    {
        "features": [
            16,
            2
        ],
        "label": 1
    },
    {
        "features": [
            -82,
            -90
        ],
        "label": 0
    },
    {
        "features": [
            100,
            -46
        ],
        "label": 1
    },
    {
        "features": [
            6,
            41
        ],
        "label": 1
    },
    {
        "features": [
            48,
            -81
        ],
        "label": 1
    },
    {
        "features": [
            -54,
            -82
        ],
        "label": 0
    },
    {
        "features": [
            85,
            -40
        ],
        "label": 1
    },
    {
        "features": [
            28,
            -60
        ],
        "label": 1
    },
    {
        "features": [
            34,
            0
        ],
        "label": 1
    },
    {
        "features": [
            25,
            -78
        ],
        "label": 1
    },
    {
        "features": [
            70,
            33
        ],
        "label": 1
    },
    {
        "features": [
            42,
            42
        ],
        "label": 1
    },
    {
        "features": [
            56,
            -15
        ],
        "label": 1
    },
    {
        "features": [
            -86,
            -36
        ],
        "label": 0
    },
    {
        "features": [
            82,
            -82
        ],
        "label": 1
    },
    {
        "features": [
            29,
            -46
        ],
        "label": 1
    },
    {
        "features": [
            -73,
            -33
        ],
        "label": 0
    },
    {
        "features": [
            22,
            -51
        ],
        "label": 1
    },
    {
        "features": [
            -53,
            -41
        ],
        "label": 0
    },
    {
        "features": [
            43,
            -41
        ],
        "label": 1
    },
    {
        "features": [
            94,
            15
        ],
        "label": 1
    },
    {
        "features": [
            -42,
            75
        ],
        "label": 0
    },
    {
        "features": [
            30,
            -10
        ],
        "label": 1
    },
    {
        "features": [
            24,
            59
        ],
        "label": 1
    },
    {
        "features": [
            37,
            -57
        ],
        "label": 1
    },
    {
        "features": [
            -24,
            -89
        ],
        "label": 0
    },
    {
        "features": [
            84,
            80
        ],
        "label": 1
    },
    {
        "features": [
            -76,
            -5
        ],
        "label": 0
    },
    {
        "features": [
            4,
            31
        ],
        "label": 1
    },
    {
        "features": [
            89,
            4
        ],
        "label": 1
    },
    {
        "features": [
            86,
            17
        ],
        "label": 1
    },
    {
        "features": [
            18,
            -76
        ],
        "label": 0
    },
    {
        "features": [
            -73,
            36
        ],
        "label": 0
    },
    {
        "features": [
            -23,
            -65
        ],
        "label": 0
    },
    {
        "features": [
            -33,
            -56
        ],
        "label": 0
    },
    {
        "features": [
            -40,
            -77
        ],
        "label": 0
    },
    {
        "features": [
            -4,
            -69
        ],
        "label": 0
    },
    {
        "features": [
            -99,
            77
        ],
        "label": 0
    },
    {
        "features": [
            8,
            -22
        ],
        "label": 1
    },
    {
        "features": [
            -18,
            37
        ],
        "label": 0
    },
    {
        "features": [
            90,
            47
        ],
        "label": 1
    },
    {
        "features": [
            -49,
            2
        ],
        "label": 0
    },
    {
        "features": [
            69,
            78
        ],
        "label": 1
    },
    {
        "features": [
            -94,
            70
        ],
        "label": 0
    },
    {
        "features": [
            -61,
            79
        ],
        "label": 0
    },
    {
        "features": [
            97,
            -21
        ],
        "label": 1
    },
    {
        "features": [
            -90,
            57
        ],
        "label": 0
    },
    {
        "features": [
            7,
            3
        ],
        "label": 1
    },
    {
        "features": [
            -64,
            46
        ],
        "label": 0
    },
    {
        "features": [
            -36,
            -31
        ],
        "label": 0
    },
    {
        "features": [
            -23,
            -14
        ],
        "label": 0
    },
    {
        "features": [
            -43,
            60
        ],
        "label": 0
    },
    {
        "features": [
            -53,
            -26
        ],
        "label": 0
    },
    {
        "features": [
            -62,
            -85
        ],
        "label": 0
    },
    {
        "features": [
            -30,
            -11
        ],
        "label": 0
    },
    {
        "features": [
            27,
            -6
        ],
        "label": 1
    },
    {
        "features": [
            9,
            -36
        ],
        "label": 0
    },
    {
        "features": [
            78,
            86
        ],
        "label": 1
    },
    {
        "features": [
            39,
            97
        ],
        "label": 1
    },
    {
        "features": [
            14,
            -88
        ],
        "label": 0
    },
    {
        "features": [
            73,
            14
        ],
        "label": 1
    },
    {
        "features": [
            -10,
            -32
        ],
        "label": 0
    },
    {
        "features": [
            -57,
            -97
        ],
        "label": 0
    },
    {
        "features": [
            -1,
            -90
        ],
        "label": 0
    },
    {
        "features": [
            73,
            -58
        ],
        "label": 1
    },
    {
        "features": [
            -1,
            -16
        ],
        "label": 0
    },
    {
        "features": [
            -3,
            97
        ],
        "label": 1
    },
    {
        "features": [
            2,
            -94
        ],
        "label": 0
    },
    {
        "features": [
            44,
            -86
        ],
        "label": 1
    },
    {
        "features": [
            -92,
            56
        ],
        "label": 0
    },
    {
        "features": [
            -69,
            -76
        ],
        "label": 0
    },
    {
        "features": [
            87,
            -32
        ],
        "label": 1
    },
    {
        "features": [
            52,
            46
        ],
        "label": 1
    },
    {
        "features": [
            58,
            90
        ],
        "label": 1
    },
    {
        "features": [
            -66,
            -24
        ],
        "label": 0
    },
    {
        "features": [
            28,
            94
        ],
        "label": 1
    },
    {
        "features": [
            -83,
            20
        ],
        "label": 0
    },
    {
        "features": [
            -59,
            -14
        ],
        "label": 0
    },
    {
        "features": [
            -7,
            50
        ],
        "label": 1
    },
    {
        "features": [
            -100,
            -65
        ],
        "label": 0
    },
    {
        "features": [
            -38,
            37
        ],
        "label": 0
    },
    {
        "features": [
            79,
            30
        ],
        "label": 1
    },
    {
        "features": [
            -43,
            -74
        ],
        "label": 0
    },
    {
        "features": [
            -37,
            -78
        ],
        "label": 0
    },
    {
        "features": [
            32,
            -47
        ],
        "label": 1
    },
    {
        "features": [
            -16,
            -44
        ],
        "label": 0
    },
    {
        "features": [
            -82,
            -40
        ],
        "label": 0
    },
    {
        "features": [
            -33,
            9
        ],
        "label": 0
    },
    {
        "features": [
            -66,
            -51
        ],
        "label": 0
    },
    {
        "features": [
            98,
            58
        ],
        "label": 1
    },
    {
        "features": [
            28,
            29
        ],
        "label": 1
    },
    {
        "features": [
            24,
            44
        ],
        "label": 1
    },
    {
        "features": [
            -98,
            -63
        ],
        "label": 0
    },
    {
        "features": [
            39,
            -85
        ],
        "label": 1
    },
    {
        "features": [
            25,
            26
        ],
        "label": 1
    },
    {
        "features": [
            -26,
            -5
        ],
        "label": 0
    },
    {
        "features": [
            61,
            -50
        ],
        "label": 1
    },
    {
        "features": [
            99,
            25
        ],
        "label": 1
    },
    {
        "features": [
            -65,
            -11
        ],
        "label": 0
    },
    {
        "features": [
            92,
            -58
        ],
        "label": 1
    },
    {
        "features": [
            73,
            80
        ],
        "label": 1
    },
    {
        "features": [
            -30,
            -3
        ],
        "label": 0
    },
    {
        "features": [
            -80,
            67
        ],
        "label": 0
    },
    {
        "features": [
            37,
            -59
        ],
        "label": 1
    },
    {
        "features": [
            66,
            -64
        ],
        "label": 1
    },
    {
        "features": [
            57,
            23
        ],
        "label": 1
    },
    {
        "features": [
            40,
            4
        ],
        "label": 1
    },
    {
        "features": [
            -22,
            1
        ],
        "label": 0
    },
    {
        "features": [
            21,
            52
        ],
        "label": 1
    },
    {
        "features": [
            95,
            60
        ],
        "label": 1
    },
    {
        "features": [
            -67,
            -79
        ],
        "label": 0
    },
    {
        "features": [
            36,
            -47
        ],
        "label": 1
    },
    {
        "features": [
            -55,
            -54
        ],
        "label": 0
    },
    {
        "features": [
            8,
            66
        ],
        "label": 1
    },
    {
        "features": [
            39,
            4
        ],
        "label": 1
    },
    {
        "features": [
            -71,
            -64
        ],
        "label": 0
    },
    {
        "features": [
            63,
            -29
        ],
        "label": 1
    },
    {
        "features": [
            -6,
            -55
        ],
        "label": 0
    },
    {
        "features": [
            85,
            -14
        ],
        "label": 1
    },
    {
        "features": [
            -11,
            -95
        ],
        "label": 0
    },
    {
        "features": [
            51,
            56
        ],
        "label": 1
    },
    {
        "features": [
            -10,
            -14
        ],
        "label": 0
    },
    {
        "features": [
            -23,
            67
        ],
        "label": 0
    },
    {
        "features": [
            75,
            -91
        ],
        "label": 1
    },
    {
        "features": [
            29,
            -63
        ],
        "label": 1
    },
    {
        "features": [
            1,
            -16
        ],
        "label": 0
    },
    {
        "features": [
            -100,
            -21
        ],
        "label": 0
    },
    {
        "features": [
            -65,
            9
        ],
        "label": 0
    },
    {
        "features": [
            58,
            -54
        ],
        "label": 1
    },
    {
        "features": [
            -75,
            -80
        ],
        "label": 0
    },
    {
        "features": [
            7,
            -99
        ],
        "label": 0
    },
    {
        "features": [
            -60,
            -72
        ],
        "label": 0
    },
    {
        "features": [
            79,
            81
        ],
        "label": 1
    },
    {
        "features": [
            -57,
            95
        ],
        "label": 0
    },
    {
        "features": [
            -71,
            -99
        ],
        "label": 0
    },
    {
        "features": [
            -71,
            -93
        ],
        "label": 0
    },
    {
        "features": [
            9,
            53
        ],
        "label": 1
    },
    {
        "features": [
            80,
            -92
        ],
        "label": 1
    },
    {
        "features": [
            12,
            -77
        ],
        "label": 0
    },
    {
        "features": [
            39,
            99
        ],
        "label": 1
    },
    {
        "features": [
            2,
            -100
        ],
        "label": 0
    },
    {
        "features": [
            56,
            -78
        ],
        "label": 1
    },
    {
        "features": [
            -67,
            82
        ],
        "label": 0
    },
    {
        "features": [
            -23,
            28
        ],
        "label": 0
    },
    {
        "features": [
            -72,
            57
        ],
        "label": 0
    },
    {
        "features": [
            -44,
            48
        ],
        "label": 0
    },
    {
        "features": [
            49,
            85
        ],
        "label": 1
    },
    {
        "features": [
            81,
            58
        ],
        "label": 1
    },
    {
        "features": [
            -74,
            67
        ],
        "label": 0
    },
    {
        "features": [
            76,
            -60
        ],
        "label": 1
    },
    {
        "features": [
            35,
            77
        ],
        "label": 1
    },
    {
        "features": [
            -36,
            30
        ],
        "label": 0
    },
    {
        "features": [
            -4,
            97
        ],
        "label": 1
    },
    {
        "features": [
            6,
            -23
        ],
        "label": 1
    },
    {
        "features": [
            -52,
            -26
        ],
        "label": 0
    },
    {
        "features": [
            -94,
            -64
        ],
        "label": 0
    },
    {
        "features": [
            69,
            -7
        ],
        "label": 1
    },
    {
        "features": [
            -75,
            -59
        ],
        "label": 0
    },
    {
        "features": [
            -50,
            20
        ],
        "label": 0
    },
    {
        "features": [
            -50,
            -5
        ],
        "label": 0
    },
    {
        "features": [
            14,
            -6
        ],
        "label": 1
    },
    {
        "features": [
            -79,
            66
        ],
        "label": 0
    },
    {
        "features": [
            42,
            -70
        ],
        "label": 1
    },
    {
        "features": [
            12,
            92
        ],
        "label": 1
    },
    {
        "features": [
            83,
            41
        ],
        "label": 1
    },
    {
        "features": [
            -16,
            -12
        ],
        "label": 0
    },
    {
        "features": [
            -10,
            -98
        ],
        "label": 0
    },
    {
        "features": [
            51,
            -66
        ],
        "label": 1
    },
    {
        "features": [
            22,
            9
        ],
        "label": 1
    },
    {
        "features": [
            -23,
            -64
        ],
        "label": 0
    },
    {
        "features": [
            85,
            -85
        ],
        "label": 1
    },
    {
        "features": [
            94,
            86
        ],
        "label": 1
    },
    {
        "features": [
            93,
            -4
        ],
        "label": 1
    },
    {
        "features": [
            -74,
            80
        ],
        "label": 0
    },
    {
        "features": [
            -58,
            -81
        ],
        "label": 0
    },
    {
        "features": [
            -27,
            57
        ],
        "label": 0
    },
    {
        "features": [
            -95,
            -80
        ],
        "label": 0
    },
    {
        "features": [
            -97,
            -37
        ],
        "label": 0
    },
    {
        "features": [
            -58,
            -79
        ],
        "label": 0
    },
    {
        "features": [
            -42,
            61
        ],
        "label": 0
    },
    {
        "features": [
            -25,
            90
        ],
        "label": 1
    },
    {
        "features": [
            87,
            -97
        ],
        "label": 1
    },
    {
        "features": [
            -30,
            83
        ],
        "label": 0
    },
    {
        "features": [
            51,
            -70
        ],
        "label": 1
    },
    {
        "features": [
            -82,
            71
        ],
        "label": 0
    },
    {
        "features": [
            -50,
            -71
        ],
        "label": 0
    },
    {
        "features": [
            62,
            36
        ],
        "label": 1
    },
    {
        "features": [
            39,
            51
        ],
        "label": 1
    },
    {
        "features": [
            65,
            22
        ],
        "label": 1
    },
    {
        "features": [
            -39,
            -54
        ],
        "label": 0
    },
    {
        "features": [
            70,
            57
        ],
        "label": 1
    },
    {
        "features": [
            -42,
            -45
        ],
        "label": 0
    },
    {
        "features": [
            -52,
            -56
        ],
        "label": 0
    },
    {
        "features": [
            -50,
            -87
        ],
        "label": 0
    },
    {
        "features": [
            -11,
            -51
        ],
        "label": 0
    },
    {
        "features": [
            40,
            21
        ],
        "label": 1
    },
    {
        "features": [
            52,
            31
        ],
        "label": 1
    },
    {
        "features": [
            88,
            72
        ],
        "label": 1
    },
    {
        "features": [
            30,
            -16
        ],
        "label": 1
    },
    {
        "features": [
            58,
            75
        ],
        "label": 1
    },
    {
        "features": [
            -14,
            -78
        ],
        "label": 0
    },
    {
        "features": [
            94,
            57
        ],
        "label": 1
    },
    {
        "features": [
            60,
            -79
        ],
        "label": 1
    },
    {
        "features": [
            -5,
            44
        ],
        "label": 1
    },
    {
        "features": [
            -79,
            -2
        ],
        "label": 0
    },
    {
        "features": [
            82,
            44
        ],
        "label": 1
    },
    {
        "features": [
            87,
            13
        ],
        "label": 1
    },
    {
        "features": [
            69,
            -38
        ],
        "label": 1
    },
    {
        "features": [
            82,
            48
        ],
        "label": 1
    },
    {
        "features": [
            -87,
            54
        ],
        "label": 0
    },
    {
        "features": [
            -90,
            -25
        ],
        "label": 0
    },
    {
        "features": [
            -1,
            50
        ],
        "label": 1
    },
    {
        "features": [
            -86,
            -57
        ],
        "label": 0
    },
    {
        "features": [
            41,
            71
        ],
        "label": 1
    },
    {
        "features": [
            -37,
            19
        ],
        "label": 0
    },
    {
        "features": [
            79,
            100
        ],
        "label": 1
    },
    {
        "features": [
            53,
            46
        ],
        "label": 1
    },
    {
        "features": [
            51,
            -18
        ],
        "label": 1
    },
    {
        "features": [
            71,
            -73
        ],
        "label": 1
    },
    {
        "features": [
            63,
            -6
        ],
        "label": 1
    },
    {
        "features": [
            18,
            15
        ],
        "label": 1
    },
    {
        "features": [
            77,
            5
        ],
        "label": 1
    },
    {
        "features": [
            -13,
            -64
        ],
        "label": 0
    },
    {
        "features": [
            -43,
            -24
        ],
        "label": 0
    },
    {
        "features": [
            77,
            44
        ],
        "label": 1
    },
    {
        "features": [
            86,
            37
        ],
        "label": 1
    },
    {
        "features": [
            82,
            25
        ],
        "label": 1
    },
    {
        "features": [
            -53,
            -79
        ],
        "label": 0
    },
    {
        "features": [
            -1,
            26
        ],
        "label": 1
    },
    {
        "features": [
            -97,
            15
        ],
        "label": 0
    },
    {
        "features": [
            -58,
            69
        ],
        "label": 0
    },
    {
        "features": [
            25,
            -93
        ],
        "label": 0
    },
    {
        "features": [
            -18,
            17
        ],
        "label": 0
    },
    {
        "features": [
            87,
            99
        ],
        "label": 1
    },
    {
        "features": [
            28,
            -52
        ],
        "label": 1
    },
    {
        "features": [
            -57,
            -31
        ],
        "label": 0
    },
    {
        "features": [
            55,
            -10
        ],
        "label": 1
    },
    {
        "features": [
            -76,
            14
        ],
        "label": 0
    },
    {
        "features": [
            -98,
            -7
        ],
        "label": 0
    },
    {
        "features": [
            -61,
            -67
        ],
        "label": 0
    },
    {
        "features": [
            79,
            9
        ],
        "label": 1
    },
    {
        "features": [
            100,
            24
        ],
        "label": 1
    },
    {
        "features": [
            -1,
            -92
        ],
        "label": 0
    },
    {
        "features": [
            -72,
            59
        ],
        "label": 0
    },
    {
        "features": [
            4,
            -88
        ],
        "label": 0
    },
    {
        "features": [
            -55,
            83
        ],
        "label": 0
    },
    {
        "features": [
            -17,
            -13
        ],
        "label": 0
    },
    {
        "features": [
            -32,
            -54
        ],
        "label": 0
    },
    {
        "features": [
            83,
            -4
        ],
        "label": 1
    },
    {
        "features": [
            5,
            -83
        ],
        "label": 0
    },
    {
        "features": [
            -93,
            51
        ],
        "label": 0
    },
    {
        "features": [
            11,
            62
        ],
        "label": 1
    },
    {
        "features": [
            -86,
            4
        ],
        "label": 0
    },
    {
        "features": [
            64,
            -7
        ],
        "label": 1
    },
    {
        "features": [
            -85,
            82
        ],
        "label": 0
    },
    {
        "features": [
            39,
            -77
        ],
        "label": 1
    },
    {
        "features": [
            -84,
            92
        ],
        "label": 0
    },
    {
        "features": [
            -45,
            -25
        ],
        "label": 0
    },
    {
        "features": [
            87,
            -33
        ],
        "label": 1
    },
    {
        "features": [
            -57,
            70
        ],
        "label": 0
    },
    {
        "features": [
            42,
            -39
        ],
        "label": 1
    },
    {
        "features": [
            68,
            -74
        ],
        "label": 1
    },
    {
        "features": [
            50,
            85
        ],
        "label": 1
    },
    {
        "features": [
            -20,
            44
        ],
        "label": 0
    },
    {
        "features": [
            -97,
            -64
        ],
        "label": 0
    },
    {
        "features": [
            52,
            28
        ],
        "label": 1
    },
    {
        "features": [
            34,
            -100
        ],
        "label": 1
    },
    {
        "features": [
            -84,
            59
        ],
        "label": 0
    },
    {
        "features": [
            -8,
            91
        ],
        "label": 1
    },
    {
        "features": [
            51,
            -75
        ],
        "label": 1
    },
    {
        "features": [
            72,
            37
        ],
        "label": 1
    },
    {
        "features": [
            -41,
            71
        ],
        "label": 0
    },
    {
        "features": [
            17,
            28
        ],
        "label": 1
    },
    {
        "features": [
            12,
            -35
        ],
        "label": 1
    },
    {
        "features": [
            12,
            100
        ],
        "label": 1
    },
    {
        "features": [
            52,
            90
        ],
        "label": 1
    },
    {
        "features": [
            -50,
            -26
        ],
        "label": 0
    },
    {
        "features": [
            -59,
            -81
        ],
        "label": 0
    },
    {
        "features": [
            -77,
            59
        ],
        "label": 0
    },
    {
        "features": [
            -79,
            26
        ],
        "label": 0
    },
    {
        "features": [
            -70,
            -85
        ],
        "label": 0
    },
    {
        "features": [
            -20,
            38
        ],
        "label": 0
    },
    {
        "features": [
            31,
            -19
        ],
        "label": 1
    },
    {
        "features": [
            -72,
            92
        ],
        "label": 0
    },
    {
        "features": [
            33,
            70
        ],
        "label": 1
    },
    {
        "features": [
            -78,
            0
        ],
        "label": 0
    },
    {
        "features": [
            -93,
            -18
        ],
        "label": 0
    },
    {
        "features": [
            -31,
            54
        ],
        "label": 0
    },
    {
        "features": [
            -50,
            71
        ],
        "label": 0
    },
    {
        "features": [
            -85,
            -96
        ],
        "label": 0
    },
    {
        "features": [
            -22,
            -19
        ],
        "label": 0
    },
    {
        "features": [
            -77,
            52
        ],
        "label": 0
    },
    {
        "features": [
            58,
            16
        ],
        "label": 1
    },
    {
        "features": [
            -61,
            -45
        ],
        "label": 0
    },
    {
        "features": [
            21,
            -55
        ],
        "label": 1
    },
    {
        "features": [
            -59,
            -44
        ],
        "label": 0
    },
    {
        "features": [
            -17,
            82
        ],
        "label": 1
    },
    {
        "features": [
            -38,
            -68
        ],
        "label": 0
    },
    {
        "features": [
            -61,
            80
        ],
        "label": 0
    },
    {
        "features": [
            -4,
            86
        ],
        "label": 1
    },
    {
        "features": [
            79,
            -5
        ],
        "label": 1
    },
    {
        "features": [
            37,
            24
        ],
        "label": 1
    },
    {
        "features": [
            -13,
            8
        ],
        "label": 0
    },
    {
        "features": [
            47,
            35
        ],
        "label": 1
    },
    {
        "features": [
            -15,
            -11
        ],
        "label": 0
    },
    {
        "features": [
            -35,
            72
        ],
        "label": 0
    },
    {
        "features": [
            -78,
            -19
        ],
        "label": 0
    },
    {
        "features": [
            31,
            -42
        ],
        "label": 1
    },
    {
        "features": [
            -69,
            68
        ],
        "label": 0
    },
    {
        "features": [
            25,
            32
        ],
        "label": 1
    },
    {
        "features": [
            -60,
            93
        ],
        "label": 0
    },
    {
        "features": [
            -60,
            0
        ],
        "label": 0
    },
    {
        "features": [
            -31,
            74
        ],
        "label": 0
    },
    {
        "features": [
            -6,
            -65
        ],
        "label": 0
    },
    {
        "features": [
            31,
            9
        ],
        "label": 1
    },
    {
        "features": [
            11,
            45
        ],
        "label": 1
    },
    {
        "features": [
            61,
            -10
        ],
        "label": 1
    },
    {
        "features": [
            30,
            -78
        ],
        "label": 1
    },
    {
        "features": [
            33,
            62
        ],
        "label": 1
    },
    {
        "features": [
            36,
            -99
        ],
        "label": 1
    },
    {
        "features": [
            76,
            58
        ],
        "label": 1
    },
    {
        "features": [
            20,
            79
        ],
        "label": 1
    },
    {
        "features": [
            -25,
            -32
        ],
        "label": 0
    },
    {
        "features": [
            -39,
            84
        ],
        "label": 0
    },
    {
        "features": [
            -85,
            45
        ],
        "label": 0
    },
    {
        "features": [
            30,
            -90
        ],
        "label": 1
    },
    {
        "features": [
            -60,
            -77
        ],
        "label": 0
    },
    {
        "features": [
            -86,
            23
        ],
        "label": 0
    },
    {
        "features": [
            45,
            37
        ],
        "label": 1
    },
    {
        "features": [
            -61,
            63
        ],
        "label": 0
    },
    {
        "features": [
            -35,
            99
        ],
        "label": 0
    },
    {
        "features": [
            96,
            89
        ],
        "label": 1
    },
    {
        "features": [
            8,
            -77
        ],
        "label": 0
    },
    {
        "features": [
            -94,
            -10
        ],
        "label": 0
    },
    {
        "features": [
            38,
            -23
        ],
        "label": 1
    },
    {
        "features": [
            -67,
            83
        ],
        "label": 0
    },
    {
        "features": [
            33,
            -93
        ],
        "label": 1
    },
    {
        "features": [
            41,
            -12
        ],
        "label": 1
    },
    {
        "features": [
            84,
            -53
        ],
        "label": 1
    },
    {
        "features": [
            -12,
            80
        ],
        "label": 1
    },
    {
        "features": [
            84,
            5
        ],
        "label": 1
    },
    {
        "features": [
            -36,
            -35
        ],
        "label": 0
    },
    {
        "features": [
            36,
            38
        ],
        "label": 1
    },
    {
        "features": [
            -79,
            -73
        ],
        "label": 0
    },
    {
        "features": [
            98,
            -84
        ],
        "label": 1
    },
    {
        "features": [
            -56,
            -44
        ],
        "label": 0
    },
    {
        "features": [
            -62,
            94
        ],
        "label": 0
    },
    {
        "features": [
            -4,
            53
        ],
        "label": 1
    },
    {
        "features": [
            -31,
            87
        ],
        "label": 0
    },
    {
        "features": [
            17,
            26
        ],
        "label": 1
    },
    {
        "features": [
            94,
            -89
        ],
        "label": 1
    },
    {
        "features": [
            12,
            -74
        ],
        "label": 0
    },
    {
        "features": [
            -37,
            -51
        ],
        "label": 0
    },
    {
        "features": [
            -50,
            -57
        ],
        "label": 0
    },
    {
        "features": [
            -72,
            45
        ],
        "label": 0
    },
    {
        "features": [
            -57,
            18
        ],
        "label": 0
    },
    {
        "features": [
            49,
            -35
        ],
        "label": 1
    },
    {
        "features": [
            95,
            -83
        ],
        "label": 1
    },
    {
        "features": [
            -48,
            75
        ],
        "label": 0
    },
    {
        "features": [
            -51,
            82
        ],
        "label": 0
    },
    {
        "features": [
            62,
            -31
        ],
        "label": 1
    },
    {
        "features": [
            -10,
            71
        ],
        "label": 1
    },
    {
        "features": [
            -34,
            96
        ],
        "label": 0
    },
    {
        "features": [
            0,
            92
        ],
        "label": 1
    },
    {
        "features": [
            70,
            45
        ],
        "label": 1
    },
    {
        "features": [
            85,
            -49
        ],
        "label": 1
    },
    {
        "features": [
            -29,
            -10
        ],
        "label": 0
    },
    {
        "features": [
            -40,
            -53
        ],
        "label": 0
    },
    {
        "features": [
            56,
            -15
        ],
        "label": 1
    },
    {
        "features": [
            11,
            94
        ],
        "label": 1
    },
    {
        "features": [
            -53,
            -91
        ],
        "label": 0
    },
    {
        "features": [
            -66,
            82
        ],
        "label": 0
    },
    {
        "features": [
            -76,
            41
        ],
        "label": 0
    },
    {
        "features": [
            16,
            -16
        ],
        "label": 1
    },
    {
        "features": [
            31,
            91
        ],
        "label": 1
    },
    {
        "features": [
            35,
            -79
        ],
        "label": 1
    },
    {
        "features": [
            -25,
            33
        ],
        "label": 0
    },
    {
        "features": [
            83,
            -87
        ],
        "label": 1
    },
    {
        "features": [
            -8,
            1
        ],
        "label": 0
    },
    {
        "features": [
            -31,
            50
        ],
        "label": 0
    },
    {
        "features": [
            87,
            -64
        ],
        "label": 1
    },
    {
        "features": [
            -25,
            36
        ],
        "label": 0
    },
    {
        "features": [
            -35,
            78
        ],
        "label": 0
    },
    {
        "features": [
            92,
            -39
        ],
        "label": 1
    },
    {
        "features": [
            35,
            -21
        ],
        "label": 1
    },
    {
        "features": [
            1,
            -53
        ],
        "label": 0
    },
    {
        "features": [
            -10,
            81
        ],
        "label": 1
    },
    {
        "features": [
            41,
            -18
        ],
        "label": 1
    },
    {
        "features": [
            -75,
            -40
        ],
        "label": 0
    },
    {
        "features": [
            85,
            73
        ],
        "label": 1
    },
    {
        "features": [
            86,
            79
        ],
        "label": 1
    },
    {
        "features": [
            28,
            -70
        ],
        "label": 1
    },
    {
        "features": [
            77,
            -25
        ],
        "label": 1
    },
    {
        "features": [
            20,
            -78
        ],
        "label": 0
    },
    {
        "features": [
            -7,
            -24
        ],
        "label": 0
    },
    {
        "features": [
            70,
            -74
        ],
        "label": 1
    },
    {
        "features": [
            -54,
            40
        ],
        "label": 0
    },
    {
        "features": [
            -66,
            28
        ],
        "label": 0
    },
    {
        "features": [
            73,
            -52
        ],
        "label": 1
    },
    {
        "features": [
            72,
            -60
        ],
        "label": 1
    },
    {
        "features": [
            -24,
            58
        ],
        "label": 0
    },
    {
        "features": [
            0,
            55
        ],
        "label": 1
    },
    {
        "features": [
            -51,
            72
        ],
        "label": 0
    },
    {
        "features": [
            73,
            -15
        ],
        "label": 1
    },
    {
        "features": [
            -2,
            -88
        ],
        "label": 0
    },
    {
        "features": [
            -41,
            10
        ],
        "label": 0
    },
    {
        "features": [
            -71,
            -60
        ],
        "label": 0
    },
    {
        "features": [
            19,
            64
        ],
        "label": 1
    },
    {
        "features": [
            -1,
            -68
        ],
        "label": 0
    },
    {
        "features": [
            -89,
            0
        ],
        "label": 0
    },
    {
        "features": [
            -31,
            33
        ],
        "label": 0
    },
    {
        "features": [
            -69,
            46
        ],
        "label": 0
    },
    {
        "features": [
            73,
            65
        ],
        "label": 1
    },
    {
        "features": [
            -69,
            -58
        ],
        "label": 0
    },
    {
        "features": [
            7,
            -91
        ],
        "label": 0
    },
    {
        "features": [
            59,
            79
        ],
        "label": 1
    },
    {
        "features": [
            59,
            -13
        ],
        "label": 1
    },
    {
        "features": [
            -53,
            17
        ],
        "label": 0
    },
    {
        "features": [
            18,
            10
        ],
        "label": 1
    },
    {
        "features": [
            -8,
            46
        ],
        "label": 1
    },
    {
        "features": [
            -49,
            4
        ],
        "label": 0
    },
    {
        "features": [
            82,
            -74
        ],
        "label": 1
    },
    {
        "features": [
            42,
            -67
        ],
        "label": 1
    },
    {
        "features": [
            39,
            -31
        ],
        "label": 1
    },
    {
        "features": [
            -99,
            -47
        ],
        "label": 0
    },
    {
        "features": [
            53,
            -53
        ],
        "label": 1
    },
    {
        "features": [
            -76,
            -98
        ],
        "label": 0
    },
    {
        "features": [
            -29,
            75
        ],
        "label": 0
    },
    {
        "features": [
            54,
            63
        ],
        "label": 1
    },
    {
        "features": [
            69,
            -38
        ],
        "label": 1
    },
    {
        "features": [
            93,
            84
        ],
        "label": 1
    },
    {
        "features": [
            40,
            13
        ],
        "label": 1
    },
    {
        "features": [
            -73,
            -82
        ],
        "label": 0
    },
    {
        "features": [
            39,
            89
        ],
        "label": 1
    },
    {
        "features": [
            65,
            -69
        ],
        "label": 1
    },
    {
        "features": [
            73,
            -39
        ],
        "label": 1
    },
    {
        "features": [
            59,
            41
        ],
        "label": 1
    },
    {
        "features": [
            -83,
            83
        ],
        "label": 0
    },
    {
        "features": [
            32,
            -10
        ],
        "label": 1
    },
    {
        "features": [
            -89,
            -71
        ],
        "label": 0
    },
    {
        "features": [
            59,
            11
        ],
        "label": 1
    },
    {
        "features": [
            -89,
            99
        ],
        "label": 0
    },
    {
        "features": [
            -52,
            0
        ],
        "label": 0
    },
    {
        "features": [
            14,
            33
        ],
        "label": 1
    },
    {
        "features": [
            90,
            30
        ],
        "label": 1
    },
    {
        "features": [
            -16,
            -52
        ],
        "label": 0
    },
    {
        "features": [
            -25,
            13
        ],
        "label": 0
    },
    {
        "features": [
            23,
            75
        ],
        "label": 1
    },
    {
        "features": [
            56,
            -33
        ],
        "label": 1
    },
    {
        "features": [
            -16,
            41
        ],
        "label": 0
    },
    {
        "features": [
            -42,
            -71
        ],
        "label": 0
    },
    {
        "features": [
            -18,
            9
        ],
        "label": 0
    },
    {
        "features": [
            -72,
            -46
        ],
        "label": 0
    },
    {
        "features": [
            -94,
            -35
        ],
        "label": 0
    },
    {
        "features": [
            48,
            -8
        ],
        "label": 1
    },
    {
        "features": [
            73,
            -38
        ],
        "label": 1
    },
    {
        "features": [
            -61,
            -44
        ],
        "label": 0
    },
    {
        "features": [
            -92,
            37
        ],
        "label": 0
    },
    {
        "features": [
            91,
            -49
        ],
        "label": 1
    },
    {
        "features": [
            -39,
            -92
        ],
        "label": 0
    },
    {
        "features": [
            -39,
            -74
        ],
        "label": 0
    },
    {
        "features": [
            20,
            50
        ],
        "label": 1
    },
    {
        "features": [
            83,
            -95
        ],
        "label": 1
    },
    {
        "features": [
            -100,
            -22
        ],
        "label": 0
    },
    {
        "features": [
            -95,
            87
        ],
        "label": 0
    },
    {
        "features": [
            52,
            -92
        ],
        "label": 1
    },
    {
        "features": [
            98,
            71
        ],
        "label": 1
    },
    {
        "features": [
            95,
            -48
        ],
        "label": 1
    },
    {
        "features": [
            -45,
            -67
        ],
        "label": 0
    },
    {
        "features": [
            77,
            52
        ],
        "label": 1
    },
    {
        "features": [
            -19,
            60
        ],
        "label": 0
    },
    {
        "features": [
            -93,
            -45
        ],
        "label": 0
    },
    {
        "features": [
            0,
            -58
        ],
        "label": 0
    },
    {
        "features": [
            -27,
            -47
        ],
        "label": 0
    },
    {
        "features": [
            -4,
            19
        ],
        "label": 1
    },
    {
        "features": [
            -34,
            -85
        ],
        "label": 0
    },
    {
        "features": [
            67,
            -73
        ],
        "label": 1
    },
    {
        "features": [
            -26,
            49
        ],
        "label": 0
    },
    {
        "features": [
            -17,
            -43
        ],
        "label": 0
    },
    {
        "features": [
            71,
            87
        ],
        "label": 1
    },
    {
        "features": [
            -67,
            -11
        ],
        "label": 0
    },
    {
        "features": [
            37,
            -5
        ],
        "label": 1
    },
    {
        "features": [
            19,
            -3
        ],
        "label": 1
    },
    {
        "features": [
            -44,
            56
        ],
        "label": 0
    },
    {
        "features": [
            -97,
            -22
        ],
        "label": 0
    },
    {
        "features": [
            -50,
            -36
        ],
        "label": 0
    },
    {
        "features": [
            27,
            -58
        ],
        "label": 1
    },
    {
        "features": [
            -16,
            84
        ],
        "label": 1
    },
    {
        "features": [
            6,
            -35
        ],
        "label": 0
    },
    {
        "features": [
            81,
            -33
        ],
        "label": 1
    },
    {
        "features": [
            71,
            78
        ],
        "label": 1
    },
    {
        "features": [
            -86,
            -4
        ],
        "label": 0
    },
    {
        "features": [
            -66,
            23
        ],
        "label": 0
    },
    {
        "features": [
            87,
            -2
        ],
        "label": 1
    },
    {
        "features": [
            28,
            73
        ],
        "label": 1
    },
    {
        "features": [
            59,
            86
        ],
        "label": 1
    },
    {
        "features": [
            89,
            95
        ],
        "label": 1
    },
    {
        "features": [
            80,
            88
        ],
        "label": 1
    },
    {
        "features": [
            -26,
            66
        ],
        "label": 0
    },
    {
        "features": [
            -38,
            68
        ],
        "label": 0
    },
    {
        "features": [
            34,
            -42
        ],
        "label": 1
    },
    {
        "features": [
            -43,
            -50
        ],
        "label": 0
    },
    {
        "features": [
            -16,
            -31
        ],
        "label": 0
    },
    {
        "features": [
            44,
            30
        ],
        "label": 1
    },
    {
        "features": [
            86,
            87
        ],
        "label": 1
    },
    {
        "features": [
            -42,
            -25
        ],
        "label": 0
    },
    {
        "features": [
            -98,
            -81
        ],
        "label": 0
    },
    {
        "features": [
            2,
            80
        ],
        "label": 1
    },
    {
        "features": [
            84,
            80
        ],
        "label": 1
    },
    {
        "features": [
            -33,
            -92
        ],
        "label": 0
    },
    {
        "features": [
            -29,
            -25
        ],
        "label": 0
    },
    {
        "features": [
            20,
            49
        ],
        "label": 1
    },
    {
        "features": [
            27,
            56
        ],
        "label": 1
    },
    {
        "features": [
            42,
            -35
        ],
        "label": 1
    },
    {
        "features": [
            -73,
            -77
        ],
        "label": 0
    },
    {
        "features": [
            80,
            -72
        ],
        "label": 1
    },
    {
        "features": [
            -66,
            16
        ],
        "label": 0
    },
    {
        "features": [
            -9,
            -37
        ],
        "label": 0
    },
    {
        "features": [
            -87,
            -37
        ],
        "label": 0
    },
    {
        "features": [
            -14,
            -60
        ],
        "label": 0
    },
    {
        "features": [
            -81,
            -9
        ],
        "label": 0
    },
    {
        "features": [
            -10,
            73
        ],
        "label": 1
    },
    {
        "features": [
            -70,
            52
        ],
        "label": 0
    },
    {
        "features": [
            47,
            -91
        ],
        "label": 1
    },
    {
        "features": [
            23,
            94
        ],
        "label": 1
    },
    {
        "features": [
            -83,
            65
        ],
        "label": 0
    },
    {
        "features": [
            -94,
            -14
        ],
        "label": 0
    },
    {
        "features": [
            64,
            -13
        ],
        "label": 1
    },
    {
        "features": [
            93,
            -95
        ],
        "label": 1
    },
    {
        "features": [
            -1,
            62
        ],
        "label": 1
    },
    {
        "features": [
            -14,
            38
        ],
        "label": 0
    },
    {
        "features": [
            -4,
            39
        ],
        "label": 1
    },
    {
        "features": [
            89,
            -51
        ],
        "label": 1
    },
    {
        "features": [
            -49,
            97
        ],
        "label": 0
    },
    {
        "features": [
            20,
            -24
        ],
        "label": 1
    },
    {
        "features": [
            93,
            -16
        ],
        "label": 1
    },
    {
        "features": [
            0,
            -89
        ],
        "label": 0
    },
    {
        "features": [
            -20,
            12
        ],
        "label": 0
    },
    {
        "features": [
            -54,
            -97
        ],
        "label": 0
    },
    {
        "features": [
            -29,
            83
        ],
        "label": 0
    },
    {
        "features": [
            -57,
            -51
        ],
        "label": 0
    },
    {
        "features": [
            -75,
            52
        ],
        "label": 0
    },
    {
        "features": [
            -67,
            -57
        ],
        "label": 0
    },
    {
        "features": [
            -68,
            -73
        ],
        "label": 0
    },
    {
        "features": [
            -41,
            25
        ],
        "label": 0
    },
    {
        "features": [
            -95,
            67
        ],
        "label": 0
    },
    {
        "features": [
            10,
            82
        ],
        "label": 1
    },
    {
        "features": [
            41,
            64
        ],
        "label": 1
    },
    {
        "features": [
            60,
            -46
        ],
        "label": 1
    },
    {
        "features": [
            -72,
            30
        ],
        "label": 0
    },
    {
        "features": [
            28,
            6
        ],
        "label": 1
    },
    {
        "features": [
            -54,
            -79
        ],
        "label": 0
    },
    {
        "features": [
            -74,
            -11
        ],
        "label": 0
    },
    {
        "features": [
            -37,
            -14
        ],
        "label": 0
    },
    {
        "features": [
            -91,
            -48
        ],
        "label": 0
    },
    {
        "features": [
            -91,
            51
        ],
        "label": 0
    },
    {
        "features": [
            -60,
            47
        ],
        "label": 0
    },
    {
        "features": [
            -54,
            -78
        ],
        "label": 0
    },
    {
        "features": [
            -55,
            -80
        ],
        "label": 0
    },
    {
        "features": [
            18,
            44
        ],
        "label": 1
    },
    {
        "features": [
            100,
            21
        ],
        "label": 1
    },
    {
        "features": [
            21,
            -48
        ],
        "label": 1
    },
    {
        "features": [
            -44,
            -41
        ],
        "label": 0
    },
    {
        "features": [
            55,
            100
        ],
        "label": 1
    },
    {
        "features": [
            73,
            19
        ],
        "label": 1
    },
    {
        "features": [
            91,
            87
        ],
        "label": 1
    },
    {
        "features": [
            14,
            6
        ],
        "label": 1
    },
    {
        "features": [
            41,
            -26
        ],
        "label": 1
    },
    {
        "features": [
            -86,
            -44
        ],
        "label": 0
    },
    {
        "features": [
            -40,
            -11
        ],
        "label": 0
    },
    {
        "features": [
            11,
            71
        ],
        "label": 1
    },
    {
        "features": [
            19,
            -98
        ],
        "label": 0
    },
    {
        "features": [
            -76,
            -54
        ],
        "label": 0
    },
    {
        "features": [
            73,
            34
        ],
        "label": 1
    },
    {
        "features": [
            13,
            29
        ],
        "label": 1
    },
    {
        "features": [
            2,
            -62
        ],
        "label": 0
    },
    {
        "features": [
            25,
            65
        ],
        "label": 1
    },
    {
        "features": [
            -20,
            -81
        ],
        "label": 0
    },
    {
        "features": [
            -84,
            82
        ],
        "label": 0
    },
    {
        "features": [
            -9,
            -31
        ],
        "label": 0
    },
    {
        "features": [
            39,
            -70
        ],
        "label": 1
    },
    {
        "features": [
            66,
            -77
        ],
        "label": 1
    },
    {
        "features": [
            -37,
            23
        ],
        "label": 0
    },
    {
        "features": [
            -16,
            -67
        ],
        "label": 0
    },
    {
        "features": [
            -24,
            -34
        ],
        "label": 0
    },
    {
        "features": [
            26,
            -73
        ],
        "label": 1
    },
    {
        "features": [
            -75,
            38
        ],
        "label": 0
    },
    {
        "features": [
            69,
            -79
        ],
        "label": 1
    },
    {
        "features": [
            -33,
            -55
        ],
        "label": 0
    },
    {
        "features": [
            -5,
            99
        ],
        "label": 1
    },
    {
        "features": [
            -75,
            -31
        ],
        "label": 0
    },
    {
        "features": [
            44,
            -91
        ],
        "label": 1
    },
    {
        "features": [
            -33,
            -22
        ],
        "label": 0
    },
    {
        "features": [
            -83,
            55
        ],
        "label": 0
    },
    {
        "features": [
            -93,
            -86
        ],
        "label": 0
    },
    {
        "features": [
            -49,
            30
        ],
        "label": 0
    },
    {
        "features": [
            -87,
            8
        ],
        "label": 0
    },
    {
        "features": [
            -67,
            -36
        ],
        "label": 0
    },
    {
        "features": [
            -55,
            23
        ],
        "label": 0
    },
    {
        "features": [
            60,
            24
        ],
        "label": 1
    },
    {
        "features": [
            -87,
            51
        ],
        "label": 0
    },
    {
        "features": [
            -70,
            91
        ],
        "label": 0
    },
    {
        "features": [
            -9,
            -41
        ],
        "label": 0
    },
    {
        "features": [
            -4,
            -17
        ],
        "label": 0
    },
    {
        "features": [
            -26,
            55
        ],
        "label": 0
    },
    {
        "features": [
            39,
            -79
        ],
        "label": 1
    },
    {
        "features": [
            -51,
            -70
        ],
        "label": 0
    },
    {
        "features": [
            6,
            -59
        ],
        "label": 0
    },
    {
        "features": [
            -75,
            34
        ],
        "label": 0
    },
    {
        "features": [
            -16,
            -56
        ],
        "label": 0
    },
    {
        "features": [
            -35,
            -19
        ],
        "label": 0
    },
    {
        "features": [
            57,
            68
        ],
        "label": 1
    },
    {
        "features": [
            38,
            -55
        ],
        "label": 1
    },
    {
        "features": [
            -43,
            21
        ],
        "label": 0
    },
    {
        "features": [
            -27,
            92
        ],
        "label": 0
    },
    {
        "features": [
            -4,
            52
        ],
        "label": 1
    },
    {
        "features": [
            -49,
            -98
        ],
        "label": 0
    },
    {
        "features": [
            -18,
            53
        ],
        "label": 0
    },
    {
        "features": [
            35,
            -55
        ],
        "label": 1
    },
    {
        "features": [
            51,
            18
        ],
        "label": 1
    },
    {
        "features": [
            -17,
            -7
        ],
        "label": 0
    },
    {
        "features": [
            60,
            13
        ],
        "label": 1
    },
    {
        "features": [
            -51,
            27
        ],
        "label": 0
    },
    {
        "features": [
            -65,
            -13
        ],
        "label": 0
    },
    {
        "features": [
            -45,
            -89
        ],
        "label": 0
    },
    {
        "features": [
            -54,
            60
        ],
        "label": 0
    },
    {
        "features": [
            58,
            -10
        ],
        "label": 1
    },
    {
        "features": [
            35,
            41
        ],
        "label": 1
    },
    {
        "features": [
            -86,
            90
        ],
        "label": 0
    },
    {
        "features": [
            -97,
            58
        ],
        "label": 0
    },
    {
        "features": [
            -36,
            20
        ],
        "label": 0
    },
    {
        "features": [
            74,
            -66
        ],
        "label": 1
    },
    {
        "features": [
            71,
            31
        ],
        "label": 1
    },
    {
        "features": [
            27,
            81
        ],
        "label": 1
    },
    {
        "features": [
            47,
            -57
        ],
        "label": 1
    },
    {
        "features": [
            -34,
            -44
        ],
        "label": 0
    },
    {
        "features": [
            27,
            77
        ],
        "label": 1
    },
    {
        "features": [
            -18,
            -62
        ],
        "label": 0
    },
    {
        "features": [
            83,
            95
        ],
        "label": 1
    },
    {
        "features": [
            71,
            -16
        ],
        "label": 1
    },
    {
        "features": [
            -98,
            71
        ],
        "label": 0
    },
    {
        "features": [
            8,
            -81
        ],
        "label": 0
    },
    {
        "features": [
            96,
            -29
        ],
        "label": 1
    },
    {
        "features": [
            28,
            -33
        ],
        "label": 1
    },
    {
        "features": [
            66,
            20
        ],
        "label": 1
    },
    {
        "features": [
            42,
            0
        ],
        "label": 1
    },
    {
        "features": [
            -68,
            17
        ],
        "label": 0
    },
    {
        "features": [
            -22,
            12
        ],
        "label": 0
    },
    {
        "features": [
            43,
            -37
        ],
        "label": 1
    },
    {
        "features": [
            51,
            63
        ],
        "label": 1
    },
    {
        "features": [
            -12,
            8
        ],
        "label": 0
    },
    {
        "features": [
            -56,
            94
        ],
        "label": 0
    },
    {
        "features": [
            -83,
            -48
        ],
        "label": 0
    },
    {
        "features": [
            51,
            -87
        ],
        "label": 1
    },
    {
        "features": [
            -71,
            -1
        ],
        "label": 0
    },
    {
        "features": [
            -62,
            -23
        ],
        "label": 0
    },
    {
        "features": [
            11,
            -89
        ],
        "label": 0
    },
    {
        "features": [
            -91,
            66
        ],
        "label": 0
    },
    {
        "features": [
            -42,
            99
        ],
        "label": 0
    },
    {
        "features": [
            97,
            -4
        ],
        "label": 1
    },
    {
        "features": [
            83,
            12
        ],
        "label": 1
    },
    {
        "features": [
            4,
            -72
        ],
        "label": 0
    },
    {
        "features": [
            -17,
            69
        ],
        "label": 1
    },
    {
        "features": [
            57,
            37
        ],
        "label": 1
    },
    {
        "features": [
            -97,
            -58
        ],
        "label": 0
    },
    {
        "features": [
            -83,
            20
        ],
        "label": 0
    },
    {
        "features": [
            -84,
            55
        ],
        "label": 0
    },
    {
        "features": [
            -10,
            66
        ],
        "label": 1
    },
    {
        "features": [
            -98,
            15
        ],
        "label": 0
    },
    {
        "features": [
            -11,
            58
        ],
        "label": 1
    },
    {
        "features": [
            63,
            -36
        ],
        "label": 1
    },
    {
        "features": [
            4,
            -71
        ],
        "label": 0
    },
    {
        "features": [
            -62,
            54
        ],
        "label": 0
    },
    {
        "features": [
            -69,
            83
        ],
        "label": 0
    },
    {
        "features": [
            72,
            63
        ],
        "label": 1
    },
    {
        "features": [
            -32,
            96
        ],
        "label": 0
    },
    {
        "features": [
            72,
            -71
        ],
        "label": 1
    },
    {
        "features": [
            32,
            -66
        ],
        "label": 1
    },
    {
        "features": [
            -60,
            63
        ],
        "label": 0
    },
    {
        "features": [
            96,
            96
        ],
        "label": 1
    },
    {
        "features": [
            -6,
            31
        ],
        "label": 1
    },
    {
        "features": [
            -42,
            -45
        ],
        "label": 0
    },
    {
        "features": [
            66,
            -10
        ],
        "label": 1
    },
    {
        "features": [
            -41,
            -76
        ],
        "label": 0
    },
    {
        "features": [
            64,
            -74
        ],
        "label": 1
    },
    {
        "features": [
            -39,
            -12
        ],
        "label": 0
    },
    {
        "features": [
            76,
            99
        ],
        "label": 1
    },
    {
        "features": [
            70,
            77
        ],
        "label": 1
    },
    {
        "features": [
            -98,
            95
        ],
        "label": 0
    },
    {
        "features": [
            70,
            -55
        ],
        "label": 1
    },
    {
        "features": [
            44,
            -70
        ],
        "label": 1
    },
    {
        "features": [
            88,
            68
        ],
        "label": 1
    },
    {
        "features": [
            6,
            28
        ],
        "label": 1
    },
    {
        "features": [
            -24,
            47
        ],
        "label": 0
    },
    {
        "features": [
            -60,
            50
        ],
        "label": 0
    },
    {
        "features": [
            -17,
            66
        ],
        "label": 1
    },
    {
        "features": [
            1,
            -38
        ],
        "label": 0
    },
    {
        "features": [
            12,
            -13
        ],
        "label": 1
    },
    {
        "features": [
            -5,
            -27
        ],
        "label": 0
    },
    {
        "features": [
            40,
            79
        ],
        "label": 1
    },
    {
        "features": [
            11,
            59
        ],
        "label": 1
    },
    {
        "features": [
            32,
            25
        ],
        "label": 1
    },
    {
        "features": [
            -33,
            -60
        ],
        "label": 0
    },
    {
        "features": [
            -54,
            21
        ],
        "label": 0
    },
    {
        "features": [
            77,
            78
        ],
        "label": 1
    },
    {
        "features": [
            -54,
            -13
        ],
        "label": 0
    },
    {
        "features": [
            -92,
            -100
        ],
        "label": 0
    },
    {
        "features": [
            -4,
            1
        ],
        "label": 0
    },
    {
        "features": [
            -26,
            -11
        ],
        "label": 0
    },
    {
        "features": [
            46,
            -42
        ],
        "label": 1
    },
    {
        "features": [
            65,
            -70
        ],
        "label": 1
    },
    {
        "features": [
            19,
            -99
        ],
        "label": 0
    },
    {
        "features": [
            94,
            99
        ],
        "label": 1
    },
    {
        "features": [
            -51,
            -75
        ],
        "label": 0
    },
    {
        "features": [
            -92,
            64
        ],
        "label": 0
    },
    {
        "features": [
            -61,
            17
        ],
        "label": 0
    },
    {
        "features": [
            -36,
            9
        ],
        "label": 0
    },
    {
        "features": [
            2,
            -11
        ],
        "label": 0
    },
    {
        "features": [
            7,
            47
        ],
        "label": 1
    },
    {
        "features": [
            -93,
            50
        ],
        "label": 0
    },
    {
        "features": [
            -39,
            56
        ],
        "label": 0
    },
    {
        "features": [
            22,
            41
        ],
        "label": 1
    },
    {
        "features": [
            62,
            -16
        ],
        "label": 1
    },
    {
        "features": [
            -93,
            25
        ],
        "label": 0
    },
    {
        "features": [
            94,
            0
        ],
        "label": 1
    },
    {
        "features": [
            -1,
            71
        ],
        "label": 1
    },
    {
        "features": [
            49,
            -47
        ],
        "label": 1
    },
    {
        "features": [
            67,
            4
        ],
        "label": 1
    },
    {
        "features": [
            -54,
            -65
        ],
        "label": 0
    },
    {
        "features": [
            15,
            -78
        ],
        "label": 0
    },
    {
        "features": [
            -37,
            25
        ],
        "label": 0
    },
    {
        "features": [
            -21,
            49
        ],
        "label": 0
    },
    {
        "features": [
            -4,
            6
        ],
        "label": 0
    },
    {
        "features": [
            45,
            64
        ],
        "label": 1
    },
    {
        "features": [
            -30,
            -25
        ],
        "label": 0
    },
    {
        "features": [
            -41,
            50
        ],
        "label": 0
    },
    {
        "features": [
            -48,
            -10
        ],
        "label": 0
    },
    {
        "features": [
            68,
            -25
        ],
        "label": 1
    },
    {
        "features": [
            -4,
            -58
        ],
        "label": 0
    },
    {
        "features": [
            51,
            11
        ],
        "label": 1
    },
    {
        "features": [
            -8,
            57
        ],
        "label": 1
    },
    {
        "features": [
            42,
            -43
        ],
        "label": 1
    },
    {
        "features": [
            8,
            2
        ],
        "label": 1
    },
    {
        "features": [
            -32,
            69
        ],
        "label": 0
    },
    {
        "features": [
            42,
            60
        ],
        "label": 1
    },
    {
        "features": [
            -78,
            38
        ],
        "label": 0
    },
    {
        "features": [
            -91,
            -59
        ],
        "label": 0
    },
    {
        "features": [
            -65,
            -39
        ],
        "label": 0
    },
    {
        "features": [
            -75,
            71
        ],
        "label": 0
    },
    {
        "features": [
            80,
            54
        ],
        "label": 1
    },
    {
        "features": [
            -26,
            4
        ],
        "label": 0
    },
    {
        "features": [
            16,
            48
        ],
        "label": 1
    },
    {
        "features": [
            56,
            -55
        ],
        "label": 1
    },
    {
        "features": [
            -54,
            -73
        ],
        "label": 0
    },
    {
        "features": [
            -59,
            -56
        ],
        "label": 0
    },
    {
        "features": [
            -48,
            -49
        ],
        "label": 0
    },
    {
        "features": [
            -16,
            -41
        ],
        "label": 0
    },
    {
        "features": [
            80,
            -99
        ],
        "label": 1
    },
    {
        "features": [
            -20,
            -48
        ],
        "label": 0
    },
    {
        "features": [
            -5,
            -55
        ],
        "label": 0
    },
    {
        "features": [
            -3,
            -53
        ],
        "label": 0
    },
    {
        "features": [
            -45,
            -39
        ],
        "label": 0
    },
    {
        "features": [
            55,
            -88
        ],
        "label": 1
    },
    {
        "features": [
            96,
            65
        ],
        "label": 1
    },
    {
        "features": [
            -5,
            87
        ],
        "label": 1
    },
    {
        "features": [
            -16,
            -7
        ],
        "label": 0
    },
    {
        "features": [
            -86,
            34
        ],
        "label": 0
    },
    {
        "features": [
            -74,
            -12
        ],
        "label": 0
    },
    {
        "features": [
            87,
            13
        ],
        "label": 1
    },
    {
        "features": [
            -2,
            -53
        ],
        "label": 0
    },
    {
        "features": [
            48,
            53
        ],
        "label": 1
    },
    {
        "features": [
            56,
            34
        ],
        "label": 1
    },
    {
        "features": [
            11,
            71
        ],
        "label": 1
    },
    {
        "features": [
            -38,
            -76
        ],
        "label": 0
    },
    {
        "features": [
            -60,
            16
        ],
        "label": 0
    },
    {
        "features": [
            96,
            -42
        ],
        "label": 1
    },
    {
        "features": [
            -3,
            26
        ],
        "label": 1
    },
    {
        "features": [
            12,
            -25
        ],
        "label": 1
    },
    {
        "features": [
            78,
            39
        ],
        "label": 1
    },
    {
        "features": [
            -20,
            29
        ],
        "label": 0
    },
    {
        "features": [
            65,
            -87
        ],
        "label": 1
    },
    {
        "features": [
            97,
            73
        ],
        "label": 1
    },
    {
        "features": [
            -9,
            14
        ],
        "label": 0
    },
    {
        "features": [
            -44,
            35
        ],
        "label": 0
    },
    {
        "features": [
            100,
            -47
        ],
        "label": 1
    },
    {
        "features": [
            -94,
            56
        ],
        "label": 0
    },
    {
        "features": [
            -2,
            11
        ],
        "label": 1
    },
    {
        "features": [
            -93,
            -62
        ],
        "label": 0
    },
    {
        "features": [
            -10,
            -43
        ],
        "label": 0
    },
    {
        "features": [
            7,
            -97
        ],
        "label": 0
    },
    {
        "features": [
            95,
            90
        ],
        "label": 1
    },
    {
        "features": [
            -75,
            8
        ],
        "label": 0
    }
]

export const DATASET_3: Sample[] = [
    {
        "features": [
            44,
            10
        ],
        "label": 1
    },
    {
        "features": [
            73,
            86
        ],
        "label": 1
    },
    {
        "features": [
            19,
            7
        ],
        "label": 1
    },
    {
        "features": [
            -40,
            75
        ],
        "label": 0
    },
    {
        "features": [
            -12,
            41
        ],
        "label": 0
    },
    {
        "features": [
            -78,
            86
        ],
        "label": 0
    },
    {
        "features": [
            79,
            4
        ],
        "label": 1
    },
    {
        "features": [
            48,
            69
        ],
        "label": 1
    },
    {
        "features": [
            77,
            88
        ],
        "label": 1
    },
    {
        "features": [
            -80,
            -16
        ],
        "label": 0
    },
    {
        "features": [
            0,
            42
        ],
        "label": 0
    },
    {
        "features": [
            6,
            63
        ],
        "label": 0
    },
    {
        "features": [
            -97,
            -46
        ],
        "label": 0
    },
    {
        "features": [
            -39,
            66
        ],
        "label": 0
    },
    {
        "features": [
            -92,
            83
        ],
        "label": 0
    },
    {
        "features": [
            -9,
            -72
        ],
        "label": 1
    },
    {
        "features": [
            19,
            -99
        ],
        "label": 1
    },
    {
        "features": [
            -26,
            -52
        ],
        "label": 0
    },
    {
        "features": [
            41,
            -79
        ],
        "label": 1
    },
    {
        "features": [
            -8,
            -39
        ],
        "label": 1
    },
    {
        "features": [
            -74,
            79
        ],
        "label": 0
    },
    {
        "features": [
            -95,
            32
        ],
        "label": 0
    },
    {
        "features": [
            -17,
            55
        ],
        "label": 0
    },
    {
        "features": [
            -49,
            -97
        ],
        "label": 0
    },
    {
        "features": [
            4,
            14
        ],
        "label": 1
    },
    {
        "features": [
            -4,
            20
        ],
        "label": 0
    },
    {
        "features": [
            18,
            42
        ],
        "label": 1
    },
    {
        "features": [
            -61,
            -88
        ],
        "label": 0
    },
    {
        "features": [
            -14,
            -19
        ],
        "label": 0
    },
    {
        "features": [
            -15,
            -37
        ],
        "label": 0
    },
    {
        "features": [
            94,
            44
        ],
        "label": 1
    },
    {
        "features": [
            18,
            64
        ],
        "label": 1
    },
    {
        "features": [
            -4,
            88
        ],
        "label": 0
    },
    {
        "features": [
            92,
            75
        ],
        "label": 1
    },
    {
        "features": [
            55,
            -58
        ],
        "label": 1
    },
    {
        "features": [
            -92,
            11
        ],
        "label": 0
    },
    {
        "features": [
            -63,
            61
        ],
        "label": 0
    },
    {
        "features": [
            -29,
            81
        ],
        "label": 0
    },
    {
        "features": [
            1,
            71
        ],
        "label": 0
    },
    {
        "features": [
            3,
            68
        ],
        "label": 0
    },
    {
        "features": [
            31,
            -88
        ],
        "label": 1
    },
    {
        "features": [
            -85,
            50
        ],
        "label": 0
    },
    {
        "features": [
            35,
            -47
        ],
        "label": 1
    },
    {
        "features": [
            -87,
            -5
        ],
        "label": 0
    },
    {
        "features": [
            56,
            -41
        ],
        "label": 1
    },
    {
        "features": [
            -60,
            -70
        ],
        "label": 0
    },
    {
        "features": [
            -92,
            -79
        ],
        "label": 0
    },
    {
        "features": [
            -55,
            81
        ],
        "label": 0
    },
    {
        "features": [
            -62,
            -54
        ],
        "label": 0
    },
    {
        "features": [
            34,
            20
        ],
        "label": 1
    },
    {
        "features": [
            90,
            -10
        ],
        "label": 1
    },
    {
        "features": [
            -28,
            -56
        ],
        "label": 0
    },
    {
        "features": [
            -89,
            -50
        ],
        "label": 0
    },
    {
        "features": [
            -30,
            -8
        ],
        "label": 0
    },
    {
        "features": [
            91,
            0
        ],
        "label": 1
    },
    {
        "features": [
            35,
            91
        ],
        "label": 1
    },
    {
        "features": [
            -26,
            82
        ],
        "label": 0
    },
    {
        "features": [
            27,
            -17
        ],
        "label": 1
    },
    {
        "features": [
            93,
            87
        ],
        "label": 1
    },
    {
        "features": [
            37,
            -95
        ],
        "label": 1
    },
    {
        "features": [
            -82,
            -47
        ],
        "label": 0
    },
    {
        "features": [
            -78,
            -9
        ],
        "label": 0
    },
    {
        "features": [
            79,
            58
        ],
        "label": 1
    },
    {
        "features": [
            97,
            98
        ],
        "label": 1
    },
    {
        "features": [
            63,
            39
        ],
        "label": 1
    },
    {
        "features": [
            11,
            72
        ],
        "label": 0
    },
    {
        "features": [
            -32,
            5
        ],
        "label": 0
    },
    {
        "features": [
            -75,
            -41
        ],
        "label": 0
    },
    {
        "features": [
            17,
            -85
        ],
        "label": 1
    },
    {
        "features": [
            30,
            99
        ],
        "label": 1
    },
    {
        "features": [
            -12,
            -5
        ],
        "label": 0
    },
    {
        "features": [
            -73,
            6
        ],
        "label": 0
    },
    {
        "features": [
            -52,
            -25
        ],
        "label": 0
    },
    {
        "features": [
            -14,
            -80
        ],
        "label": 1
    },
    {
        "features": [
            -49,
            69
        ],
        "label": 0
    },
    {
        "features": [
            -76,
            -74
        ],
        "label": 0
    },
    {
        "features": [
            57,
            86
        ],
        "label": 1
    },
    {
        "features": [
            13,
            -100
        ],
        "label": 1
    },
    {
        "features": [
            22,
            41
        ],
        "label": 1
    },
    {
        "features": [
            -60,
            40
        ],
        "label": 0
    },
    {
        "features": [
            -57,
            38
        ],
        "label": 0
    },
    {
        "features": [
            12,
            33
        ],
        "label": 1
    },
    {
        "features": [
            -18,
            -16
        ],
        "label": 0
    },
    {
        "features": [
            -20,
            86
        ],
        "label": 0
    },
    {
        "features": [
            93,
            -29
        ],
        "label": 1
    },
    {
        "features": [
            14,
            87
        ],
        "label": 0
    },
    {
        "features": [
            64,
            14
        ],
        "label": 1
    },
    {
        "features": [
            -81,
            -52
        ],
        "label": 0
    },
    {
        "features": [
            -5,
            64
        ],
        "label": 0
    },
    {
        "features": [
            88,
            67
        ],
        "label": 1
    },
    {
        "features": [
            -24,
            33
        ],
        "label": 0
    },
    {
        "features": [
            61,
            78
        ],
        "label": 1
    },
    {
        "features": [
            27,
            20
        ],
        "label": 1
    },
    {
        "features": [
            -12,
            82
        ],
        "label": 0
    },
    {
        "features": [
            80,
            -73
        ],
        "label": 1
    },
    {
        "features": [
            -38,
            22
        ],
        "label": 0
    },
    {
        "features": [
            63,
            87
        ],
        "label": 1
    },
    {
        "features": [
            15,
            99
        ],
        "label": 0
    },
    {
        "features": [
            35,
            43
        ],
        "label": 1
    },
    {
        "features": [
            -91,
            -91
        ],
        "label": 0
    },
    {
        "features": [
            7,
            30
        ],
        "label": 1
    },
    {
        "features": [
            37,
            -18
        ],
        "label": 1
    },
    {
        "features": [
            -19,
            16
        ],
        "label": 0
    },
    {
        "features": [
            -75,
            -33
        ],
        "label": 0
    },
    {
        "features": [
            -73,
            -3
        ],
        "label": 0
    },
    {
        "features": [
            27,
            40
        ],
        "label": 1
    },
    {
        "features": [
            18,
            -13
        ],
        "label": 1
    },
    {
        "features": [
            -18,
            -14
        ],
        "label": 0
    },
    {
        "features": [
            -52,
            92
        ],
        "label": 0
    },
    {
        "features": [
            91,
            43
        ],
        "label": 1
    },
    {
        "features": [
            -47,
            20
        ],
        "label": 0
    },
    {
        "features": [
            -86,
            -43
        ],
        "label": 0
    },
    {
        "features": [
            -93,
            12
        ],
        "label": 0
    },
    {
        "features": [
            62,
            -36
        ],
        "label": 1
    },
    {
        "features": [
            -49,
            11
        ],
        "label": 0
    },
    {
        "features": [
            -24,
            3
        ],
        "label": 0
    },
    {
        "features": [
            -48,
            -69
        ],
        "label": 0
    },
    {
        "features": [
            17,
            -36
        ],
        "label": 1
    },
    {
        "features": [
            58,
            -54
        ],
        "label": 1
    },
    {
        "features": [
            48,
            52
        ],
        "label": 1
    },
    {
        "features": [
            -46,
            24
        ],
        "label": 0
    },
    {
        "features": [
            -81,
            -51
        ],
        "label": 0
    },
    {
        "features": [
            -97,
            -69
        ],
        "label": 0
    },
    {
        "features": [
            41,
            43
        ],
        "label": 1
    },
    {
        "features": [
            33,
            39
        ],
        "label": 1
    },
    {
        "features": [
            46,
            96
        ],
        "label": 1
    },
    {
        "features": [
            81,
            61
        ],
        "label": 1
    },
    {
        "features": [
            99,
            56
        ],
        "label": 1
    },
    {
        "features": [
            -48,
            -97
        ],
        "label": 0
    },
    {
        "features": [
            93,
            -43
        ],
        "label": 1
    },
    {
        "features": [
            -45,
            -63
        ],
        "label": 0
    },
    {
        "features": [
            56,
            20
        ],
        "label": 1
    },
    {
        "features": [
            62,
            -67
        ],
        "label": 1
    },
    {
        "features": [
            -23,
            -56
        ],
        "label": 0
    },
    {
        "features": [
            -86,
            -34
        ],
        "label": 0
    },
    {
        "features": [
            -92,
            23
        ],
        "label": 0
    },
    {
        "features": [
            46,
            33
        ],
        "label": 1
    },
    {
        "features": [
            73,
            -28
        ],
        "label": 1
    },
    {
        "features": [
            15,
            6
        ],
        "label": 1
    },
    {
        "features": [
            -14,
            -36
        ],
        "label": 0
    },
    {
        "features": [
            -61,
            47
        ],
        "label": 0
    },
    {
        "features": [
            76,
            -33
        ],
        "label": 1
    },
    {
        "features": [
            -37,
            87
        ],
        "label": 0
    },
    {
        "features": [
            18,
            -22
        ],
        "label": 1
    },
    {
        "features": [
            -28,
            36
        ],
        "label": 0
    },
    {
        "features": [
            85,
            67
        ],
        "label": 1
    },
    {
        "features": [
            -93,
            53
        ],
        "label": 0
    },
    {
        "features": [
            24,
            -77
        ],
        "label": 1
    },
    {
        "features": [
            -95,
            80
        ],
        "label": 0
    },
    {
        "features": [
            92,
            36
        ],
        "label": 1
    },
    {
        "features": [
            -86,
            -41
        ],
        "label": 0
    },
    {
        "features": [
            -54,
            83
        ],
        "label": 0
    },
    {
        "features": [
            -26,
            67
        ],
        "label": 0
    },
    {
        "features": [
            -38,
            -63
        ],
        "label": 0
    },
    {
        "features": [
            -61,
            47
        ],
        "label": 0
    },
    {
        "features": [
            -51,
            93
        ],
        "label": 0
    },
    {
        "features": [
            22,
            60
        ],
        "label": 1
    },
    {
        "features": [
            48,
            -64
        ],
        "label": 1
    },
    {
        "features": [
            50,
            71
        ],
        "label": 1
    },
    {
        "features": [
            -4,
            -72
        ],
        "label": 1
    },
    {
        "features": [
            52,
            32
        ],
        "label": 1
    },
    {
        "features": [
            34,
            82
        ],
        "label": 1
    },
    {
        "features": [
            -10,
            42
        ],
        "label": 0
    },
    {
        "features": [
            11,
            72
        ],
        "label": 0
    },
    {
        "features": [
            -86,
            70
        ],
        "label": 0
    },
    {
        "features": [
            -37,
            -32
        ],
        "label": 0
    },
    {
        "features": [
            -95,
            -83
        ],
        "label": 0
    },
    {
        "features": [
            31,
            -54
        ],
        "label": 1
    },
    {
        "features": [
            -34,
            -60
        ],
        "label": 0
    },
    {
        "features": [
            -43,
            -100
        ],
        "label": 0
    },
    {
        "features": [
            93,
            58
        ],
        "label": 1
    },
    {
        "features": [
            67,
            -65
        ],
        "label": 1
    },
    {
        "features": [
            20,
            78
        ],
        "label": 1
    },
    {
        "features": [
            65,
            23
        ],
        "label": 1
    },
    {
        "features": [
            10,
            51
        ],
        "label": 0
    },
    {
        "features": [
            13,
            -6
        ],
        "label": 1
    },
    {
        "features": [
            -44,
            -18
        ],
        "label": 0
    },
    {
        "features": [
            21,
            -32
        ],
        "label": 1
    },
    {
        "features": [
            100,
            -2
        ],
        "label": 1
    },
    {
        "features": [
            -23,
            6
        ],
        "label": 0
    },
    {
        "features": [
            73,
            -95
        ],
        "label": 1
    },
    {
        "features": [
            71,
            -9
        ],
        "label": 1
    },
    {
        "features": [
            47,
            -80
        ],
        "label": 1
    },
    {
        "features": [
            33,
            13
        ],
        "label": 1
    },
    {
        "features": [
            -75,
            -88
        ],
        "label": 0
    },
    {
        "features": [
            -79,
            -67
        ],
        "label": 0
    },
    {
        "features": [
            57,
            -100
        ],
        "label": 1
    },
    {
        "features": [
            -38,
            -91
        ],
        "label": 0
    },
    {
        "features": [
            -42,
            36
        ],
        "label": 0
    },
    {
        "features": [
            -57,
            -61
        ],
        "label": 0
    },
    {
        "features": [
            -19,
            75
        ],
        "label": 0
    },
    {
        "features": [
            -97,
            -13
        ],
        "label": 0
    },
    {
        "features": [
            27,
            -38
        ],
        "label": 1
    },
    {
        "features": [
            -62,
            -19
        ],
        "label": 0
    },
    {
        "features": [
            -30,
            -67
        ],
        "label": 0
    },
    {
        "features": [
            77,
            -18
        ],
        "label": 1
    },
    {
        "features": [
            -29,
            14
        ],
        "label": 0
    },
    {
        "features": [
            6,
            29
        ],
        "label": 0
    },
    {
        "features": [
            -21,
            98
        ],
        "label": 0
    },
    {
        "features": [
            -15,
            42
        ],
        "label": 0
    },
    {
        "features": [
            68,
            47
        ],
        "label": 1
    },
    {
        "features": [
            -74,
            86
        ],
        "label": 0
    },
    {
        "features": [
            6,
            67
        ],
        "label": 0
    },
    {
        "features": [
            -83,
            47
        ],
        "label": 0
    },
    {
        "features": [
            -92,
            31
        ],
        "label": 0
    },
    {
        "features": [
            35,
            -54
        ],
        "label": 1
    },
    {
        "features": [
            -96,
            30
        ],
        "label": 0
    },
    {
        "features": [
            47,
            2
        ],
        "label": 1
    },
    {
        "features": [
            -49,
            15
        ],
        "label": 0
    },
    {
        "features": [
            -64,
            -100
        ],
        "label": 0
    },
    {
        "features": [
            -8,
            32
        ],
        "label": 0
    },
    {
        "features": [
            -73,
            -73
        ],
        "label": 0
    },
    {
        "features": [
            -36,
            3
        ],
        "label": 0
    },
    {
        "features": [
            -94,
            -84
        ],
        "label": 0
    },
    {
        "features": [
            -82,
            61
        ],
        "label": 0
    },
    {
        "features": [
            7,
            -24
        ],
        "label": 1
    },
    {
        "features": [
            22,
            -41
        ],
        "label": 1
    },
    {
        "features": [
            -16,
            88
        ],
        "label": 0
    },
    {
        "features": [
            -78,
            -62
        ],
        "label": 0
    },
    {
        "features": [
            -51,
            -67
        ],
        "label": 0
    },
    {
        "features": [
            51,
            5
        ],
        "label": 1
    },
    {
        "features": [
            57,
            1
        ],
        "label": 1
    },
    {
        "features": [
            19,
            4
        ],
        "label": 1
    },
    {
        "features": [
            -49,
            -88
        ],
        "label": 0
    },
    {
        "features": [
            -91,
            49
        ],
        "label": 0
    },
    {
        "features": [
            86,
            79
        ],
        "label": 1
    },
    {
        "features": [
            -34,
            -73
        ],
        "label": 0
    },
    {
        "features": [
            24,
            -6
        ],
        "label": 1
    },
    {
        "features": [
            37,
            97
        ],
        "label": 1
    },
    {
        "features": [
            13,
            74
        ],
        "label": 0
    },
    {
        "features": [
            -25,
            -92
        ],
        "label": 1
    },
    {
        "features": [
            -39,
            -15
        ],
        "label": 0
    },
    {
        "features": [
            34,
            -16
        ],
        "label": 1
    },
    {
        "features": [
            -31,
            -60
        ],
        "label": 0
    },
    {
        "features": [
            -71,
            -24
        ],
        "label": 0
    },
    {
        "features": [
            34,
            -14
        ],
        "label": 1
    },
    {
        "features": [
            -13,
            70
        ],
        "label": 0
    },
    {
        "features": [
            -46,
            -1
        ],
        "label": 0
    },
    {
        "features": [
            -86,
            -25
        ],
        "label": 0
    },
    {
        "features": [
            -32,
            87
        ],
        "label": 0
    },
    {
        "features": [
            46,
            9
        ],
        "label": 1
    },
    {
        "features": [
            54,
            -19
        ],
        "label": 1
    },
    {
        "features": [
            -62,
            96
        ],
        "label": 0
    },
    {
        "features": [
            52,
            -95
        ],
        "label": 1
    },
    {
        "features": [
            -76,
            35
        ],
        "label": 0
    },
    {
        "features": [
            67,
            70
        ],
        "label": 1
    },
    {
        "features": [
            -75,
            97
        ],
        "label": 0
    },
    {
        "features": [
            -96,
            -71
        ],
        "label": 0
    },
    {
        "features": [
            97,
            66
        ],
        "label": 1
    },
    {
        "features": [
            -6,
            -13
        ],
        "label": 0
    },
    {
        "features": [
            16,
            -42
        ],
        "label": 1
    },
    {
        "features": [
            81,
            0
        ],
        "label": 1
    },
    {
        "features": [
            -79,
            -29
        ],
        "label": 0
    },
    {
        "features": [
            90,
            15
        ],
        "label": 1
    },
    {
        "features": [
            -56,
            67
        ],
        "label": 0
    },
    {
        "features": [
            8,
            47
        ],
        "label": 0
    },
    {
        "features": [
            40,
            16
        ],
        "label": 1
    },
    {
        "features": [
            57,
            81
        ],
        "label": 1
    },
    {
        "features": [
            -33,
            58
        ],
        "label": 0
    },
    {
        "features": [
            -48,
            -97
        ],
        "label": 0
    },
    {
        "features": [
            -89,
            66
        ],
        "label": 0
    },
    {
        "features": [
            -22,
            -51
        ],
        "label": 0
    },
    {
        "features": [
            1,
            -9
        ],
        "label": 1
    },
    {
        "features": [
            -22,
            15
        ],
        "label": 0
    },
    {
        "features": [
            58,
            62
        ],
        "label": 1
    },
    {
        "features": [
            20,
            -1
        ],
        "label": 1
    },
    {
        "features": [
            -74,
            51
        ],
        "label": 0
    },
    {
        "features": [
            41,
            58
        ],
        "label": 1
    },
    {
        "features": [
            -13,
            31
        ],
        "label": 0
    },
    {
        "features": [
            -33,
            36
        ],
        "label": 0
    },
    {
        "features": [
            96,
            -31
        ],
        "label": 1
    },
    {
        "features": [
            27,
            18
        ],
        "label": 1
    },
    {
        "features": [
            40,
            -62
        ],
        "label": 1
    },
    {
        "features": [
            -24,
            33
        ],
        "label": 0
    },
    {
        "features": [
            70,
            77
        ],
        "label": 1
    },
    {
        "features": [
            -62,
            -46
        ],
        "label": 0
    },
    {
        "features": [
            73,
            88
        ],
        "label": 1
    },
    {
        "features": [
            -20,
            -53
        ],
        "label": 0
    },
    {
        "features": [
            41,
            47
        ],
        "label": 1
    },
    {
        "features": [
            71,
            89
        ],
        "label": 1
    },
    {
        "features": [
            73,
            61
        ],
        "label": 1
    },
    {
        "features": [
            97,
            31
        ],
        "label": 1
    },
    {
        "features": [
            -92,
            -2
        ],
        "label": 0
    },
    {
        "features": [
            94,
            -38
        ],
        "label": 1
    },
    {
        "features": [
            67,
            -84
        ],
        "label": 1
    },
    {
        "features": [
            69,
            -96
        ],
        "label": 1
    },
    {
        "features": [
            29,
            -72
        ],
        "label": 1
    },
    {
        "features": [
            -4,
            -49
        ],
        "label": 1
    },
    {
        "features": [
            -71,
            89
        ],
        "label": 0
    },
    {
        "features": [
            98,
            11
        ],
        "label": 1
    },
    {
        "features": [
            33,
            34
        ],
        "label": 1
    },
    {
        "features": [
            -23,
            -8
        ],
        "label": 0
    },
    {
        "features": [
            -90,
            5
        ],
        "label": 0
    },
    {
        "features": [
            60,
            -23
        ],
        "label": 1
    },
    {
        "features": [
            -48,
            74
        ],
        "label": 0
    },
    {
        "features": [
            86,
            7
        ],
        "label": 1
    },
    {
        "features": [
            65,
            87
        ],
        "label": 1
    },
    {
        "features": [
            -11,
            -55
        ],
        "label": 1
    },
    {
        "features": [
            72,
            71
        ],
        "label": 1
    },
    {
        "features": [
            -29,
            31
        ],
        "label": 0
    },
    {
        "features": [
            -36,
            -64
        ],
        "label": 0
    },
    {
        "features": [
            33,
            -19
        ],
        "label": 1
    },
    {
        "features": [
            23,
            -84
        ],
        "label": 1
    },
    {
        "features": [
            -9,
            -95
        ],
        "label": 1
    },
    {
        "features": [
            -49,
            -60
        ],
        "label": 0
    },
    {
        "features": [
            -62,
            55
        ],
        "label": 0
    },
    {
        "features": [
            72,
            45
        ],
        "label": 1
    },
    {
        "features": [
            36,
            96
        ],
        "label": 1
    },
    {
        "features": [
            79,
            -51
        ],
        "label": 1
    },
    {
        "features": [
            3,
            -59
        ],
        "label": 1
    },
    {
        "features": [
            -57,
            -97
        ],
        "label": 0
    },
    {
        "features": [
            23,
            -86
        ],
        "label": 1
    },
    {
        "features": [
            3,
            -51
        ],
        "label": 1
    },
    {
        "features": [
            10,
            -88
        ],
        "label": 1
    },
    {
        "features": [
            97,
            -4
        ],
        "label": 1
    },
    {
        "features": [
            22,
            -91
        ],
        "label": 1
    },
    {
        "features": [
            47,
            92
        ],
        "label": 1
    },
    {
        "features": [
            83,
            -25
        ],
        "label": 1
    },
    {
        "features": [
            -62,
            81
        ],
        "label": 0
    },
    {
        "features": [
            67,
            63
        ],
        "label": 1
    },
    {
        "features": [
            -8,
            70
        ],
        "label": 0
    },
    {
        "features": [
            71,
            -76
        ],
        "label": 1
    },
    {
        "features": [
            28,
            -49
        ],
        "label": 1
    },
    {
        "features": [
            -81,
            0
        ],
        "label": 0
    },
    {
        "features": [
            -98,
            51
        ],
        "label": 0
    },
    {
        "features": [
            -39,
            37
        ],
        "label": 0
    },
    {
        "features": [
            48,
            -56
        ],
        "label": 1
    },
    {
        "features": [
            -29,
            -60
        ],
        "label": 0
    },
    {
        "features": [
            67,
            18
        ],
        "label": 1
    },
    {
        "features": [
            -76,
            44
        ],
        "label": 0
    },
    {
        "features": [
            -10,
            -62
        ],
        "label": 1
    },
    {
        "features": [
            -4,
            65
        ],
        "label": 0
    },
    {
        "features": [
            67,
            -98
        ],
        "label": 1
    },
    {
        "features": [
            -10,
            50
        ],
        "label": 0
    },
    {
        "features": [
            94,
            -35
        ],
        "label": 1
    },
    {
        "features": [
            75,
            89
        ],
        "label": 1
    },
    {
        "features": [
            -65,
            13
        ],
        "label": 0
    },
    {
        "features": [
            -90,
            -94
        ],
        "label": 0
    },
    {
        "features": [
            29,
            -12
        ],
        "label": 1
    },
    {
        "features": [
            100,
            92
        ],
        "label": 1
    },
    {
        "features": [
            19,
            -51
        ],
        "label": 1
    },
    {
        "features": [
            4,
            85
        ],
        "label": 0
    },
    {
        "features": [
            82,
            9
        ],
        "label": 1
    },
    {
        "features": [
            -38,
            -13
        ],
        "label": 0
    },
    {
        "features": [
            14,
            -22
        ],
        "label": 1
    },
    {
        "features": [
            18,
            -70
        ],
        "label": 1
    },
    {
        "features": [
            -16,
            -28
        ],
        "label": 0
    },
    {
        "features": [
            75,
            21
        ],
        "label": 1
    },
    {
        "features": [
            -27,
            17
        ],
        "label": 0
    },
    {
        "features": [
            -42,
            26
        ],
        "label": 0
    },
    {
        "features": [
            -97,
            87
        ],
        "label": 0
    },
    {
        "features": [
            54,
            54
        ],
        "label": 1
    },
    {
        "features": [
            93,
            93
        ],
        "label": 1
    },
    {
        "features": [
            43,
            81
        ],
        "label": 1
    },
    {
        "features": [
            13,
            6
        ],
        "label": 1
    },
    {
        "features": [
            -76,
            56
        ],
        "label": 0
    },
    {
        "features": [
            54,
            98
        ],
        "label": 1
    },
    {
        "features": [
            95,
            -96
        ],
        "label": 1
    },
    {
        "features": [
            -3,
            50
        ],
        "label": 0
    },
    {
        "features": [
            -96,
            -95
        ],
        "label": 0
    },
    {
        "features": [
            -93,
            -83
        ],
        "label": 0
    },
    {
        "features": [
            16,
            56
        ],
        "label": 1
    },
    {
        "features": [
            -1,
            -4
        ],
        "label": 1
    },
    {
        "features": [
            -10,
            -30
        ],
        "label": 0
    },
    {
        "features": [
            -37,
            -97
        ],
        "label": 0
    },
    {
        "features": [
            -30,
            -90
        ],
        "label": 0
    },
    {
        "features": [
            -70,
            0
        ],
        "label": 0
    },
    {
        "features": [
            -53,
            -22
        ],
        "label": 0
    },
    {
        "features": [
            -29,
            93
        ],
        "label": 0
    },
    {
        "features": [
            10,
            15
        ],
        "label": 1
    },
    {
        "features": [
            -67,
            46
        ],
        "label": 0
    },
    {
        "features": [
            55,
            -37
        ],
        "label": 1
    },
    {
        "features": [
            -3,
            84
        ],
        "label": 0
    },
    {
        "features": [
            -6,
            37
        ],
        "label": 0
    },
    {
        "features": [
            93,
            -6
        ],
        "label": 1
    },
    {
        "features": [
            -84,
            59
        ],
        "label": 0
    },
    {
        "features": [
            54,
            -41
        ],
        "label": 1
    },
    {
        "features": [
            10,
            68
        ],
        "label": 0
    },
    {
        "features": [
            14,
            -56
        ],
        "label": 1
    },
    {
        "features": [
            80,
            100
        ],
        "label": 1
    },
    {
        "features": [
            -75,
            -39
        ],
        "label": 0
    },
    {
        "features": [
            81,
            2
        ],
        "label": 1
    },
    {
        "features": [
            -41,
            51
        ],
        "label": 0
    },
    {
        "features": [
            -25,
            22
        ],
        "label": 0
    },
    {
        "features": [
            32,
            -23
        ],
        "label": 1
    },
    {
        "features": [
            -79,
            45
        ],
        "label": 0
    },
    {
        "features": [
            -21,
            73
        ],
        "label": 0
    },
    {
        "features": [
            -10,
            -10
        ],
        "label": 0
    },
    {
        "features": [
            -96,
            2
        ],
        "label": 0
    },
    {
        "features": [
            -37,
            76
        ],
        "label": 0
    },
    {
        "features": [
            -96,
            -60
        ],
        "label": 0
    },
    {
        "features": [
            -57,
            58
        ],
        "label": 0
    },
    {
        "features": [
            -23,
            83
        ],
        "label": 0
    },
    {
        "features": [
            75,
            -73
        ],
        "label": 1
    },
    {
        "features": [
            -28,
            -73
        ],
        "label": 0
    },
    {
        "features": [
            -73,
            65
        ],
        "label": 0
    },
    {
        "features": [
            -4,
            86
        ],
        "label": 0
    },
    {
        "features": [
            -88,
            11
        ],
        "label": 0
    },
    {
        "features": [
            -23,
            99
        ],
        "label": 0
    },
    {
        "features": [
            -35,
            42
        ],
        "label": 0
    },
    {
        "features": [
            -34,
            6
        ],
        "label": 0
    },
    {
        "features": [
            41,
            80
        ],
        "label": 1
    },
    {
        "features": [
            65,
            -24
        ],
        "label": 1
    },
    {
        "features": [
            -30,
            -27
        ],
        "label": 0
    },
    {
        "features": [
            41,
            -15
        ],
        "label": 1
    },
    {
        "features": [
            27,
            -51
        ],
        "label": 1
    },
    {
        "features": [
            39,
            13
        ],
        "label": 1
    },
    {
        "features": [
            -85,
            57
        ],
        "label": 0
    },
    {
        "features": [
            20,
            87
        ],
        "label": 0
    },
    {
        "features": [
            100,
            -90
        ],
        "label": 1
    },
    {
        "features": [
            -68,
            55
        ],
        "label": 0
    },
    {
        "features": [
            -33,
            48
        ],
        "label": 0
    },
    {
        "features": [
            21,
            76
        ],
        "label": 1
    },
    {
        "features": [
            30,
            -22
        ],
        "label": 1
    },
    {
        "features": [
            61,
            37
        ],
        "label": 1
    },
    {
        "features": [
            13,
            -87
        ],
        "label": 1
    },
    {
        "features": [
            3,
            -65
        ],
        "label": 1
    },
    {
        "features": [
            -85,
            -85
        ],
        "label": 0
    },
    {
        "features": [
            41,
            -30
        ],
        "label": 1
    },
    {
        "features": [
            0,
            -10
        ],
        "label": 1
    },
    {
        "features": [
            -58,
            -24
        ],
        "label": 0
    },
    {
        "features": [
            74,
            45
        ],
        "label": 1
    },
    {
        "features": [
            6,
            16
        ],
        "label": 1
    },
    {
        "features": [
            -42,
            -74
        ],
        "label": 0
    },
    {
        "features": [
            37,
            99
        ],
        "label": 1
    },
    {
        "features": [
            44,
            7
        ],
        "label": 1
    },
    {
        "features": [
            -31,
            62
        ],
        "label": 0
    },
    {
        "features": [
            79,
            38
        ],
        "label": 1
    },
    {
        "features": [
            65,
            -50
        ],
        "label": 1
    },
    {
        "features": [
            78,
            33
        ],
        "label": 1
    },
    {
        "features": [
            89,
            27
        ],
        "label": 1
    },
    {
        "features": [
            1,
            75
        ],
        "label": 0
    },
    {
        "features": [
            56,
            90
        ],
        "label": 1
    },
    {
        "features": [
            36,
            93
        ],
        "label": 1
    },
    {
        "features": [
            -71,
            -27
        ],
        "label": 0
    },
    {
        "features": [
            70,
            -18
        ],
        "label": 1
    },
    {
        "features": [
            80,
            15
        ],
        "label": 1
    },
    {
        "features": [
            57,
            -70
        ],
        "label": 1
    },
    {
        "features": [
            36,
            -84
        ],
        "label": 1
    },
    {
        "features": [
            -36,
            90
        ],
        "label": 0
    },
    {
        "features": [
            -67,
            -48
        ],
        "label": 0
    },
    {
        "features": [
            17,
            71
        ],
        "label": 0
    },
    {
        "features": [
            10,
            65
        ],
        "label": 0
    },
    {
        "features": [
            -99,
            -62
        ],
        "label": 0
    },
    {
        "features": [
            -95,
            100
        ],
        "label": 0
    },
    {
        "features": [
            -18,
            33
        ],
        "label": 0
    },
    {
        "features": [
            -62,
            10
        ],
        "label": 0
    },
    {
        "features": [
            -36,
            -30
        ],
        "label": 0
    },
    {
        "features": [
            90,
            -56
        ],
        "label": 1
    },
    {
        "features": [
            30,
            90
        ],
        "label": 1
    },
    {
        "features": [
            12,
            -54
        ],
        "label": 1
    },
    {
        "features": [
            -82,
            -28
        ],
        "label": 0
    },
    {
        "features": [
            27,
            74
        ],
        "label": 1
    },
    {
        "features": [
            -5,
            -74
        ],
        "label": 1
    },
    {
        "features": [
            -88,
            -38
        ],
        "label": 0
    },
    {
        "features": [
            80,
            -33
        ],
        "label": 1
    },
    {
        "features": [
            24,
            73
        ],
        "label": 1
    },
    {
        "features": [
            -3,
            99
        ],
        "label": 0
    },
    {
        "features": [
            49,
            -72
        ],
        "label": 1
    },
    {
        "features": [
            92,
            -89
        ],
        "label": 1
    },
    {
        "features": [
            2,
            54
        ],
        "label": 0
    },
    {
        "features": [
            -62,
            82
        ],
        "label": 0
    },
    {
        "features": [
            70,
            -85
        ],
        "label": 1
    },
    {
        "features": [
            -5,
            -87
        ],
        "label": 1
    },
    {
        "features": [
            24,
            17
        ],
        "label": 1
    },
    {
        "features": [
            49,
            -16
        ],
        "label": 1
    },
    {
        "features": [
            49,
            -68
        ],
        "label": 1
    },
    {
        "features": [
            -47,
            61
        ],
        "label": 0
    },
    {
        "features": [
            92,
            4
        ],
        "label": 1
    },
    {
        "features": [
            -20,
            45
        ],
        "label": 0
    },
    {
        "features": [
            76,
            -30
        ],
        "label": 1
    },
    {
        "features": [
            6,
            -33
        ],
        "label": 1
    },
    {
        "features": [
            56,
            73
        ],
        "label": 1
    },
    {
        "features": [
            -47,
            -53
        ],
        "label": 0
    },
    {
        "features": [
            26,
            31
        ],
        "label": 1
    },
    {
        "features": [
            72,
            -66
        ],
        "label": 1
    },
    {
        "features": [
            16,
            -70
        ],
        "label": 1
    },
    {
        "features": [
            2,
            72
        ],
        "label": 0
    },
    {
        "features": [
            -52,
            -9
        ],
        "label": 0
    },
    {
        "features": [
            -21,
            -40
        ],
        "label": 0
    },
    {
        "features": [
            -100,
            55
        ],
        "label": 0
    },
    {
        "features": [
            51,
            63
        ],
        "label": 1
    },
    {
        "features": [
            36,
            -46
        ],
        "label": 1
    },
    {
        "features": [
            84,
            62
        ],
        "label": 1
    },
    {
        "features": [
            -12,
            68
        ],
        "label": 0
    },
    {
        "features": [
            -3,
            98
        ],
        "label": 0
    },
    {
        "features": [
            75,
            -79
        ],
        "label": 1
    },
    {
        "features": [
            79,
            -12
        ],
        "label": 1
    },
    {
        "features": [
            -99,
            34
        ],
        "label": 0
    },
    {
        "features": [
            73,
            -36
        ],
        "label": 1
    },
    {
        "features": [
            -20,
            25
        ],
        "label": 0
    },
    {
        "features": [
            9,
            -31
        ],
        "label": 1
    },
    {
        "features": [
            -6,
            27
        ],
        "label": 0
    },
    {
        "features": [
            33,
            22
        ],
        "label": 1
    },
    {
        "features": [
            -53,
            -76
        ],
        "label": 0
    },
    {
        "features": [
            11,
            -2
        ],
        "label": 1
    },
    {
        "features": [
            -74,
            -43
        ],
        "label": 0
    },
    {
        "features": [
            20,
            75
        ],
        "label": 1
    },
    {
        "features": [
            58,
            88
        ],
        "label": 1
    },
    {
        "features": [
            -34,
            -87
        ],
        "label": 0
    },
    {
        "features": [
            3,
            7
        ],
        "label": 1
    },
    {
        "features": [
            -15,
            79
        ],
        "label": 0
    },
    {
        "features": [
            58,
            -90
        ],
        "label": 1
    },
    {
        "features": [
            50,
            -83
        ],
        "label": 1
    },
    {
        "features": [
            -49,
            81
        ],
        "label": 0
    },
    {
        "features": [
            96,
            23
        ],
        "label": 1
    },
    {
        "features": [
            -46,
            -69
        ],
        "label": 0
    },
    {
        "features": [
            16,
            -49
        ],
        "label": 1
    },
    {
        "features": [
            58,
            26
        ],
        "label": 1
    },
    {
        "features": [
            -45,
            -93
        ],
        "label": 0
    },
    {
        "features": [
            18,
            75
        ],
        "label": 0
    },
    {
        "features": [
            37,
            15
        ],
        "label": 1
    },
    {
        "features": [
            -33,
            -92
        ],
        "label": 0
    },
    {
        "features": [
            34,
            7
        ],
        "label": 1
    },
    {
        "features": [
            -53,
            -37
        ],
        "label": 0
    },
    {
        "features": [
            38,
            -81
        ],
        "label": 1
    },
    {
        "features": [
            -67,
            87
        ],
        "label": 0
    },
    {
        "features": [
            -37,
            82
        ],
        "label": 0
    },
    {
        "features": [
            -69,
            -6
        ],
        "label": 0
    },
    {
        "features": [
            -16,
            -56
        ],
        "label": 1
    },
    {
        "features": [
            -14,
            53
        ],
        "label": 0
    },
    {
        "features": [
            91,
            52
        ],
        "label": 1
    },
    {
        "features": [
            81,
            4
        ],
        "label": 1
    },
    {
        "features": [
            58,
            86
        ],
        "label": 1
    },
    {
        "features": [
            -44,
            23
        ],
        "label": 0
    },
    {
        "features": [
            -1,
            94
        ],
        "label": 0
    },
    {
        "features": [
            87,
            -59
        ],
        "label": 1
    },
    {
        "features": [
            46,
            -97
        ],
        "label": 1
    },
    {
        "features": [
            -11,
            -36
        ],
        "label": 1
    },
    {
        "features": [
            -62,
            55
        ],
        "label": 0
    },
    {
        "features": [
            27,
            -26
        ],
        "label": 1
    },
    {
        "features": [
            23,
            88
        ],
        "label": 1
    },
    {
        "features": [
            51,
            -55
        ],
        "label": 1
    },
    {
        "features": [
            24,
            -98
        ],
        "label": 1
    },
    {
        "features": [
            -87,
            60
        ],
        "label": 0
    },
    {
        "features": [
            -65,
            45
        ],
        "label": 0
    },
    {
        "features": [
            54,
            83
        ],
        "label": 1
    },
    {
        "features": [
            68,
            74
        ],
        "label": 1
    },
    {
        "features": [
            9,
            53
        ],
        "label": 0
    },
    {
        "features": [
            19,
            86
        ],
        "label": 0
    },
    {
        "features": [
            93,
            25
        ],
        "label": 1
    },
    {
        "features": [
            57,
            27
        ],
        "label": 1
    },
    {
        "features": [
            -51,
            -99
        ],
        "label": 0
    },
    {
        "features": [
            15,
            -88
        ],
        "label": 1
    },
    {
        "features": [
            -31,
            67
        ],
        "label": 0
    },
    {
        "features": [
            51,
            -38
        ],
        "label": 1
    },
    {
        "features": [
            -46,
            -54
        ],
        "label": 0
    },
    {
        "features": [
            -76,
            -43
        ],
        "label": 0
    },
    {
        "features": [
            -100,
            53
        ],
        "label": 0
    },
    {
        "features": [
            -12,
            44
        ],
        "label": 0
    },
    {
        "features": [
            98,
            -84
        ],
        "label": 1
    },
    {
        "features": [
            51,
            -42
        ],
        "label": 1
    },
    {
        "features": [
            -22,
            20
        ],
        "label": 0
    },
    {
        "features": [
            62,
            -45
        ],
        "label": 1
    },
    {
        "features": [
            46,
            33
        ],
        "label": 1
    },
    {
        "features": [
            -3,
            48
        ],
        "label": 0
    },
    {
        "features": [
            -74,
            -92
        ],
        "label": 0
    },
    {
        "features": [
            18,
            -63
        ],
        "label": 1
    },
    {
        "features": [
            52,
            44
        ],
        "label": 1
    },
    {
        "features": [
            -63,
            -100
        ],
        "label": 0
    },
    {
        "features": [
            38,
            -89
        ],
        "label": 1
    },
    {
        "features": [
            -27,
            45
        ],
        "label": 0
    },
    {
        "features": [
            -28,
            -17
        ],
        "label": 0
    },
    {
        "features": [
            -28,
            -59
        ],
        "label": 0
    },
    {
        "features": [
            -5,
            -46
        ],
        "label": 1
    },
    {
        "features": [
            -13,
            55
        ],
        "label": 0
    },
    {
        "features": [
            -51,
            54
        ],
        "label": 0
    },
    {
        "features": [
            7,
            95
        ],
        "label": 0
    },
    {
        "features": [
            73,
            -9
        ],
        "label": 1
    },
    {
        "features": [
            -100,
            -59
        ],
        "label": 0
    },
    {
        "features": [
            -78,
            14
        ],
        "label": 0
    },
    {
        "features": [
            -95,
            -47
        ],
        "label": 0
    },
    {
        "features": [
            -91,
            -79
        ],
        "label": 0
    },
    {
        "features": [
            83,
            45
        ],
        "label": 1
    },
    {
        "features": [
            -91,
            81
        ],
        "label": 0
    },
    {
        "features": [
            87,
            -68
        ],
        "label": 1
    },
    {
        "features": [
            -19,
            -53
        ],
        "label": 0
    },
    {
        "features": [
            23,
            26
        ],
        "label": 1
    },
    {
        "features": [
            -73,
            55
        ],
        "label": 0
    },
    {
        "features": [
            14,
            -11
        ],
        "label": 1
    },
    {
        "features": [
            35,
            44
        ],
        "label": 1
    },
    {
        "features": [
            -37,
            0
        ],
        "label": 0
    },
    {
        "features": [
            18,
            21
        ],
        "label": 1
    },
    {
        "features": [
            -5,
            34
        ],
        "label": 0
    },
    {
        "features": [
            32,
            99
        ],
        "label": 1
    },
    {
        "features": [
            -98,
            -18
        ],
        "label": 0
    },
    {
        "features": [
            -39,
            -43
        ],
        "label": 0
    },
    {
        "features": [
            -74,
            69
        ],
        "label": 0
    },
    {
        "features": [
            76,
            76
        ],
        "label": 1
    },
    {
        "features": [
            35,
            -85
        ],
        "label": 1
    },
    {
        "features": [
            57,
            48
        ],
        "label": 1
    },
    {
        "features": [
            84,
            -17
        ],
        "label": 1
    },
    {
        "features": [
            -49,
            -63
        ],
        "label": 0
    },
    {
        "features": [
            -64,
            -11
        ],
        "label": 0
    },
    {
        "features": [
            66,
            80
        ],
        "label": 1
    },
    {
        "features": [
            -31,
            93
        ],
        "label": 0
    },
    {
        "features": [
            -60,
            12
        ],
        "label": 0
    },
    {
        "features": [
            -72,
            -88
        ],
        "label": 0
    },
    {
        "features": [
            38,
            -24
        ],
        "label": 1
    },
    {
        "features": [
            46,
            -46
        ],
        "label": 1
    },
    {
        "features": [
            -92,
            57
        ],
        "label": 0
    },
    {
        "features": [
            56,
            -59
        ],
        "label": 1
    },
    {
        "features": [
            6,
            57
        ],
        "label": 0
    },
    {
        "features": [
            -61,
            34
        ],
        "label": 0
    },
    {
        "features": [
            -63,
            -66
        ],
        "label": 0
    },
    {
        "features": [
            76,
            52
        ],
        "label": 1
    },
    {
        "features": [
            -19,
            -62
        ],
        "label": 0
    },
    {
        "features": [
            -30,
            92
        ],
        "label": 0
    },
    {
        "features": [
            73,
            62
        ],
        "label": 1
    },
    {
        "features": [
            -80,
            49
        ],
        "label": 0
    },
    {
        "features": [
            23,
            -63
        ],
        "label": 1
    },
    {
        "features": [
            -6,
            87
        ],
        "label": 0
    },
    {
        "features": [
            40,
            -56
        ],
        "label": 1
    },
    {
        "features": [
            92,
            -34
        ],
        "label": 1
    },
    {
        "features": [
            -57,
            29
        ],
        "label": 0
    },
    {
        "features": [
            -24,
            -57
        ],
        "label": 0
    },
    {
        "features": [
            9,
            -66
        ],
        "label": 1
    },
    {
        "features": [
            -38,
            63
        ],
        "label": 0
    },
    {
        "features": [
            -47,
            3
        ],
        "label": 0
    },
    {
        "features": [
            25,
            -15
        ],
        "label": 1
    },
    {
        "features": [
            45,
            -42
        ],
        "label": 1
    },
    {
        "features": [
            -26,
            -24
        ],
        "label": 0
    },
    {
        "features": [
            18,
            -31
        ],
        "label": 1
    },
    {
        "features": [
            77,
            -37
        ],
        "label": 1
    },
    {
        "features": [
            -26,
            30
        ],
        "label": 0
    },
    {
        "features": [
            45,
            -24
        ],
        "label": 1
    },
    {
        "features": [
            99,
            -42
        ],
        "label": 1
    },
    {
        "features": [
            33,
            93
        ],
        "label": 1
    },
    {
        "features": [
            39,
            92
        ],
        "label": 1
    },
    {
        "features": [
            -55,
            33
        ],
        "label": 0
    },
    {
        "features": [
            55,
            -73
        ],
        "label": 1
    },
    {
        "features": [
            -71,
            -42
        ],
        "label": 0
    },
    {
        "features": [
            -78,
            38
        ],
        "label": 0
    },
    {
        "features": [
            -30,
            43
        ],
        "label": 0
    },
    {
        "features": [
            -21,
            11
        ],
        "label": 0
    },
    {
        "features": [
            31,
            -55
        ],
        "label": 1
    },
    {
        "features": [
            11,
            75
        ],
        "label": 0
    },
    {
        "features": [
            21,
            33
        ],
        "label": 1
    },
    {
        "features": [
            24,
            -64
        ],
        "label": 1
    },
    {
        "features": [
            -86,
            26
        ],
        "label": 0
    },
    {
        "features": [
            76,
            -20
        ],
        "label": 1
    },
    {
        "features": [
            -82,
            14
        ],
        "label": 0
    },
    {
        "features": [
            75,
            -35
        ],
        "label": 1
    },
    {
        "features": [
            98,
            -71
        ],
        "label": 1
    },
    {
        "features": [
            -6,
            -33
        ],
        "label": 1
    },
    {
        "features": [
            55,
            56
        ],
        "label": 1
    },
    {
        "features": [
            75,
            21
        ],
        "label": 1
    },
    {
        "features": [
            20,
            19
        ],
        "label": 1
    },
    {
        "features": [
            87,
            -16
        ],
        "label": 1
    },
    {
        "features": [
            -93,
            -89
        ],
        "label": 0
    },
    {
        "features": [
            27,
            -87
        ],
        "label": 1
    },
    {
        "features": [
            71,
            -54
        ],
        "label": 1
    },
    {
        "features": [
            42,
            39
        ],
        "label": 1
    },
    {
        "features": [
            -26,
            91
        ],
        "label": 0
    },
    {
        "features": [
            72,
            45
        ],
        "label": 1
    },
    {
        "features": [
            61,
            -1
        ],
        "label": 1
    },
    {
        "features": [
            97,
            -87
        ],
        "label": 1
    },
    {
        "features": [
            86,
            33
        ],
        "label": 1
    },
    {
        "features": [
            46,
            38
        ],
        "label": 1
    },
    {
        "features": [
            -37,
            -18
        ],
        "label": 0
    },
    {
        "features": [
            29,
            87
        ],
        "label": 1
    },
    {
        "features": [
            -85,
            81
        ],
        "label": 0
    },
    {
        "features": [
            87,
            -71
        ],
        "label": 1
    },
    {
        "features": [
            -51,
            65
        ],
        "label": 0
    },
    {
        "features": [
            46,
            -79
        ],
        "label": 1
    },
    {
        "features": [
            98,
            -95
        ],
        "label": 1
    },
    {
        "features": [
            79,
            -64
        ],
        "label": 1
    },
    {
        "features": [
            -55,
            22
        ],
        "label": 0
    },
    {
        "features": [
            -12,
            -62
        ],
        "label": 1
    },
    {
        "features": [
            -30,
            33
        ],
        "label": 0
    },
    {
        "features": [
            27,
            -19
        ],
        "label": 1
    },
    {
        "features": [
            -37,
            3
        ],
        "label": 0
    },
    {
        "features": [
            -54,
            -53
        ],
        "label": 0
    },
    {
        "features": [
            57,
            38
        ],
        "label": 1
    },
    {
        "features": [
            -94,
            -89
        ],
        "label": 0
    },
    {
        "features": [
            -78,
            86
        ],
        "label": 0
    },
    {
        "features": [
            66,
            -41
        ],
        "label": 1
    },
    {
        "features": [
            -80,
            -38
        ],
        "label": 0
    },
    {
        "features": [
            32,
            -3
        ],
        "label": 1
    },
    {
        "features": [
            47,
            13
        ],
        "label": 1
    },
    {
        "features": [
            34,
            59
        ],
        "label": 1
    },
    {
        "features": [
            -56,
            -93
        ],
        "label": 0
    },
    {
        "features": [
            70,
            54
        ],
        "label": 1
    },
    {
        "features": [
            -1,
            -22
        ],
        "label": 1
    },
    {
        "features": [
            -73,
            23
        ],
        "label": 0
    },
    {
        "features": [
            -96,
            5
        ],
        "label": 0
    },
    {
        "features": [
            46,
            -27
        ],
        "label": 1
    },
    {
        "features": [
            -94,
            23
        ],
        "label": 0
    },
    {
        "features": [
            49,
            -12
        ],
        "label": 1
    },
    {
        "features": [
            -32,
            30
        ],
        "label": 0
    },
    {
        "features": [
            51,
            -84
        ],
        "label": 1
    },
    {
        "features": [
            55,
            -51
        ],
        "label": 1
    },
    {
        "features": [
            22,
            -69
        ],
        "label": 1
    },
    {
        "features": [
            -49,
            -40
        ],
        "label": 0
    },
    {
        "features": [
            20,
            80
        ],
        "label": 1
    },
    {
        "features": [
            80,
            49
        ],
        "label": 1
    },
    {
        "features": [
            64,
            -45
        ],
        "label": 1
    },
    {
        "features": [
            7,
            65
        ],
        "label": 0
    },
    {
        "features": [
            41,
            43
        ],
        "label": 1
    },
    {
        "features": [
            14,
            -43
        ],
        "label": 1
    },
    {
        "features": [
            11,
            76
        ],
        "label": 0
    },
    {
        "features": [
            42,
            -29
        ],
        "label": 1
    },
    {
        "features": [
            -63,
            -11
        ],
        "label": 0
    },
    {
        "features": [
            -14,
            59
        ],
        "label": 0
    },
    {
        "features": [
            50,
            -7
        ],
        "label": 1
    },
    {
        "features": [
            -22,
            -31
        ],
        "label": 0
    },
    {
        "features": [
            95,
            -67
        ],
        "label": 1
    },
    {
        "features": [
            -86,
            -79
        ],
        "label": 0
    },
    {
        "features": [
            -94,
            -65
        ],
        "label": 0
    },
    {
        "features": [
            -42,
            96
        ],
        "label": 0
    },
    {
        "features": [
            -12,
            -45
        ],
        "label": 1
    },
    {
        "features": [
            1,
            99
        ],
        "label": 0
    },
    {
        "features": [
            -69,
            75
        ],
        "label": 0
    },
    {
        "features": [
            -52,
            -19
        ],
        "label": 0
    },
    {
        "features": [
            -54,
            27
        ],
        "label": 0
    },
    {
        "features": [
            -33,
            66
        ],
        "label": 0
    },
    {
        "features": [
            -49,
            16
        ],
        "label": 0
    },
    {
        "features": [
            69,
            65
        ],
        "label": 1
    },
    {
        "features": [
            -79,
            -13
        ],
        "label": 0
    },
    {
        "features": [
            -11,
            69
        ],
        "label": 0
    },
    {
        "features": [
            61,
            -66
        ],
        "label": 1
    },
    {
        "features": [
            41,
            17
        ],
        "label": 1
    },
    {
        "features": [
            -67,
            -15
        ],
        "label": 0
    },
    {
        "features": [
            -44,
            66
        ],
        "label": 0
    },
    {
        "features": [
            -28,
            50
        ],
        "label": 0
    },
    {
        "features": [
            48,
            -16
        ],
        "label": 1
    },
    {
        "features": [
            -30,
            75
        ],
        "label": 0
    },
    {
        "features": [
            96,
            82
        ],
        "label": 1
    },
    {
        "features": [
            -5,
            -29
        ],
        "label": 1
    },
    {
        "features": [
            -82,
            35
        ],
        "label": 0
    },
    {
        "features": [
            -92,
            -83
        ],
        "label": 0
    },
    {
        "features": [
            -38,
            13
        ],
        "label": 0
    },
    {
        "features": [
            62,
            72
        ],
        "label": 1
    },
    {
        "features": [
            -45,
            83
        ],
        "label": 0
    },
    {
        "features": [
            36,
            -96
        ],
        "label": 1
    },
    {
        "features": [
            -25,
            55
        ],
        "label": 0
    },
    {
        "features": [
            -61,
            45
        ],
        "label": 0
    },
    {
        "features": [
            81,
            0
        ],
        "label": 1
    },
    {
        "features": [
            43,
            -28
        ],
        "label": 1
    },
    {
        "features": [
            72,
            17
        ],
        "label": 1
    },
    {
        "features": [
            89,
            10
        ],
        "label": 1
    },
    {
        "features": [
            93,
            89
        ],
        "label": 1
    },
    {
        "features": [
            49,
            -80
        ],
        "label": 1
    },
    {
        "features": [
            -3,
            -69
        ],
        "label": 1
    },
    {
        "features": [
            8,
            -88
        ],
        "label": 1
    },
    {
        "features": [
            30,
            -92
        ],
        "label": 1
    },
    {
        "features": [
            64,
            10
        ],
        "label": 1
    },
    {
        "features": [
            80,
            18
        ],
        "label": 1
    },
    {
        "features": [
            89,
            77
        ],
        "label": 1
    },
    {
        "features": [
            99,
            98
        ],
        "label": 1
    },
    {
        "features": [
            78,
            59
        ],
        "label": 1
    },
    {
        "features": [
            -43,
            -80
        ],
        "label": 0
    },
    {
        "features": [
            -75,
            -77
        ],
        "label": 0
    },
    {
        "features": [
            11,
            21
        ],
        "label": 1
    },
    {
        "features": [
            28,
            21
        ],
        "label": 1
    },
    {
        "features": [
            61,
            28
        ],
        "label": 1
    },
    {
        "features": [
            -58,
            53
        ],
        "label": 0
    },
    {
        "features": [
            -63,
            -4
        ],
        "label": 0
    },
    {
        "features": [
            -98,
            43
        ],
        "label": 0
    },
    {
        "features": [
            -60,
            71
        ],
        "label": 0
    },
    {
        "features": [
            58,
            21
        ],
        "label": 1
    },
    {
        "features": [
            28,
            -34
        ],
        "label": 1
    },
    {
        "features": [
            -97,
            -94
        ],
        "label": 0
    },
    {
        "features": [
            -64,
            -92
        ],
        "label": 0
    },
    {
        "features": [
            -45,
            -74
        ],
        "label": 0
    },
    {
        "features": [
            30,
            27
        ],
        "label": 1
    },
    {
        "features": [
            -94,
            -55
        ],
        "label": 0
    },
    {
        "features": [
            -87,
            -40
        ],
        "label": 0
    },
    {
        "features": [
            -60,
            29
        ],
        "label": 0
    },
    {
        "features": [
            -19,
            -76
        ],
        "label": 1
    },
    {
        "features": [
            25,
            -72
        ],
        "label": 1
    },
    {
        "features": [
            -1,
            -19
        ],
        "label": 1
    },
    {
        "features": [
            -91,
            75
        ],
        "label": 0
    },
    {
        "features": [
            -43,
            85
        ],
        "label": 0
    },
    {
        "features": [
            -55,
            1
        ],
        "label": 0
    },
    {
        "features": [
            14,
            44
        ],
        "label": 1
    },
    {
        "features": [
            -24,
            -49
        ],
        "label": 0
    },
    {
        "features": [
            31,
            -47
        ],
        "label": 1
    },
    {
        "features": [
            85,
            88
        ],
        "label": 1
    },
    {
        "features": [
            63,
            18
        ],
        "label": 1
    },
    {
        "features": [
            8,
            -24
        ],
        "label": 1
    },
    {
        "features": [
            59,
            -90
        ],
        "label": 1
    },
    {
        "features": [
            11,
            84
        ],
        "label": 0
    },
    {
        "features": [
            55,
            -95
        ],
        "label": 1
    },
    {
        "features": [
            0,
            4
        ],
        "label": 1
    },
    {
        "features": [
            -66,
            -10
        ],
        "label": 0
    },
    {
        "features": [
            84,
            -83
        ],
        "label": 1
    },
    {
        "features": [
            50,
            26
        ],
        "label": 1
    },
    {
        "features": [
            -89,
            12
        ],
        "label": 0
    },
    {
        "features": [
            -29,
            99
        ],
        "label": 0
    },
    {
        "features": [
            23,
            43
        ],
        "label": 1
    },
    {
        "features": [
            65,
            78
        ],
        "label": 1
    },
    {
        "features": [
            29,
            26
        ],
        "label": 1
    },
    {
        "features": [
            81,
            25
        ],
        "label": 1
    },
    {
        "features": [
            97,
            -79
        ],
        "label": 1
    },
    {
        "features": [
            -50,
            26
        ],
        "label": 0
    },
    {
        "features": [
            -45,
            -74
        ],
        "label": 0
    },
    {
        "features": [
            -72,
            61
        ],
        "label": 0
    },
    {
        "features": [
            -99,
            66
        ],
        "label": 0
    },
    {
        "features": [
            61,
            67
        ],
        "label": 1
    },
    {
        "features": [
            34,
            88
        ],
        "label": 1
    },
    {
        "features": [
            3,
            49
        ],
        "label": 0
    },
    {
        "features": [
            72,
            -96
        ],
        "label": 1
    },
    {
        "features": [
            58,
            33
        ],
        "label": 1
    },
    {
        "features": [
            -52,
            69
        ],
        "label": 0
    },
    {
        "features": [
            44,
            -99
        ],
        "label": 1
    },
    {
        "features": [
            72,
            91
        ],
        "label": 1
    },
    {
        "features": [
            92,
            94
        ],
        "label": 1
    },
    {
        "features": [
            -17,
            -71
        ],
        "label": 1
    },
    {
        "features": [
            79,
            -87
        ],
        "label": 1
    },
    {
        "features": [
            42,
            28
        ],
        "label": 1
    },
    {
        "features": [
            -64,
            37
        ],
        "label": 0
    },
    {
        "features": [
            -56,
            67
        ],
        "label": 0
    },
    {
        "features": [
            51,
            39
        ],
        "label": 1
    },
    {
        "features": [
            -84,
            70
        ],
        "label": 0
    },
    {
        "features": [
            -84,
            -28
        ],
        "label": 0
    },
    {
        "features": [
            29,
            -15
        ],
        "label": 1
    },
    {
        "features": [
            93,
            54
        ],
        "label": 1
    },
    {
        "features": [
            32,
            -11
        ],
        "label": 1
    },
    {
        "features": [
            71,
            -89
        ],
        "label": 1
    },
    {
        "features": [
            -91,
            -89
        ],
        "label": 0
    },
    {
        "features": [
            50,
            89
        ],
        "label": 1
    },
    {
        "features": [
            -21,
            -27
        ],
        "label": 0
    },
    {
        "features": [
            46,
            -92
        ],
        "label": 1
    },
    {
        "features": [
            79,
            22
        ],
        "label": 1
    },
    {
        "features": [
            74,
            -43
        ],
        "label": 1
    },
    {
        "features": [
            -36,
            34
        ],
        "label": 0
    },
    {
        "features": [
            59,
            -66
        ],
        "label": 1
    },
    {
        "features": [
            38,
            41
        ],
        "label": 1
    },
    {
        "features": [
            84,
            84
        ],
        "label": 1
    },
    {
        "features": [
            -13,
            -38
        ],
        "label": 0
    },
    {
        "features": [
            -54,
            -88
        ],
        "label": 0
    },
    {
        "features": [
            7,
            80
        ],
        "label": 0
    },
    {
        "features": [
            -54,
            -20
        ],
        "label": 0
    },
    {
        "features": [
            82,
            -95
        ],
        "label": 1
    },
    {
        "features": [
            -23,
            -77
        ],
        "label": 0
    },
    {
        "features": [
            -79,
            3
        ],
        "label": 0
    },
    {
        "features": [
            -62,
            -99
        ],
        "label": 0
    },
    {
        "features": [
            89,
            -40
        ],
        "label": 1
    },
    {
        "features": [
            -74,
            21
        ],
        "label": 0
    },
    {
        "features": [
            38,
            98
        ],
        "label": 1
    },
    {
        "features": [
            45,
            -45
        ],
        "label": 1
    },
    {
        "features": [
            -21,
            -25
        ],
        "label": 0
    },
    {
        "features": [
            -77,
            -92
        ],
        "label": 0
    },
    {
        "features": [
            -55,
            -39
        ],
        "label": 0
    },
    {
        "features": [
            -10,
            -85
        ],
        "label": 1
    },
    {
        "features": [
            -58,
            -9
        ],
        "label": 0
    },
    {
        "features": [
            30,
            10
        ],
        "label": 1
    },
    {
        "features": [
            -6,
            -3
        ],
        "label": 0
    },
    {
        "features": [
            -77,
            33
        ],
        "label": 0
    },
    {
        "features": [
            -45,
            86
        ],
        "label": 0
    },
    {
        "features": [
            59,
            56
        ],
        "label": 1
    },
    {
        "features": [
            31,
            -49
        ],
        "label": 1
    },
    {
        "features": [
            47,
            -47
        ],
        "label": 1
    },
    {
        "features": [
            1,
            19
        ],
        "label": 0
    },
    {
        "features": [
            41,
            82
        ],
        "label": 1
    },
    {
        "features": [
            -25,
            89
        ],
        "label": 0
    },
    {
        "features": [
            76,
            -82
        ],
        "label": 1
    },
    {
        "features": [
            -99,
            -16
        ],
        "label": 0
    },
    {
        "features": [
            -63,
            -44
        ],
        "label": 0
    },
    {
        "features": [
            -99,
            -45
        ],
        "label": 0
    },
    {
        "features": [
            52,
            93
        ],
        "label": 1
    },
    {
        "features": [
            -30,
            -60
        ],
        "label": 0
    },
    {
        "features": [
            57,
            -52
        ],
        "label": 1
    },
    {
        "features": [
            -86,
            76
        ],
        "label": 0
    },
    {
        "features": [
            54,
            -95
        ],
        "label": 1
    },
    {
        "features": [
            25,
            93
        ],
        "label": 1
    },
    {
        "features": [
            40,
            -38
        ],
        "label": 1
    },
    {
        "features": [
            -66,
            0
        ],
        "label": 0
    },
    {
        "features": [
            1,
            40
        ],
        "label": 0
    },
    {
        "features": [
            77,
            60
        ],
        "label": 1
    },
    {
        "features": [
            -75,
            -23
        ],
        "label": 0
    },
    {
        "features": [
            -27,
            66
        ],
        "label": 0
    },
    {
        "features": [
            72,
            44
        ],
        "label": 1
    },
    {
        "features": [
            -42,
            91
        ],
        "label": 0
    },
    {
        "features": [
            -76,
            -35
        ],
        "label": 0
    },
    {
        "features": [
            -16,
            33
        ],
        "label": 0
    },
    {
        "features": [
            17,
            -71
        ],
        "label": 1
    },
    {
        "features": [
            -64,
            -1
        ],
        "label": 0
    },
    {
        "features": [
            -100,
            100
        ],
        "label": 0
    },
    {
        "features": [
            -64,
            -80
        ],
        "label": 0
    },
    {
        "features": [
            -2,
            -33
        ],
        "label": 1
    },
    {
        "features": [
            -63,
            -25
        ],
        "label": 0
    },
    {
        "features": [
            52,
            -92
        ],
        "label": 1
    },
    {
        "features": [
            1,
            55
        ],
        "label": 0
    },
    {
        "features": [
            64,
            91
        ],
        "label": 1
    },
    {
        "features": [
            -3,
            84
        ],
        "label": 0
    },
    {
        "features": [
            -90,
            8
        ],
        "label": 0
    },
    {
        "features": [
            -21,
            -50
        ],
        "label": 0
    },
    {
        "features": [
            73,
            -75
        ],
        "label": 1
    },
    {
        "features": [
            66,
            -7
        ],
        "label": 1
    },
    {
        "features": [
            20,
            -37
        ],
        "label": 1
    },
    {
        "features": [
            -32,
            -39
        ],
        "label": 0
    },
    {
        "features": [
            44,
            79
        ],
        "label": 1
    },
    {
        "features": [
            -6,
            -77
        ],
        "label": 1
    },
    {
        "features": [
            -53,
            74
        ],
        "label": 0
    },
    {
        "features": [
            -20,
            48
        ],
        "label": 0
    },
    {
        "features": [
            -14,
            44
        ],
        "label": 0
    },
    {
        "features": [
            43,
            -55
        ],
        "label": 1
    },
    {
        "features": [
            30,
            -1
        ],
        "label": 1
    },
    {
        "features": [
            -100,
            -34
        ],
        "label": 0
    },
    {
        "features": [
            -76,
            -15
        ],
        "label": 0
    },
    {
        "features": [
            -24,
            18
        ],
        "label": 0
    },
    {
        "features": [
            84,
            10
        ],
        "label": 1
    },
    {
        "features": [
            -68,
            -16
        ],
        "label": 0
    },
    {
        "features": [
            62,
            67
        ],
        "label": 1
    },
    {
        "features": [
            7,
            51
        ],
        "label": 0
    },
    {
        "features": [
            15,
            -31
        ],
        "label": 1
    },
    {
        "features": [
            -57,
            9
        ],
        "label": 0
    },
    {
        "features": [
            81,
            -54
        ],
        "label": 1
    },
    {
        "features": [
            10,
            -80
        ],
        "label": 1
    },
    {
        "features": [
            -85,
            -2
        ],
        "label": 0
    },
    {
        "features": [
            26,
            -80
        ],
        "label": 1
    },
    {
        "features": [
            -80,
            -62
        ],
        "label": 0
    },
    {
        "features": [
            -38,
            17
        ],
        "label": 0
    },
    {
        "features": [
            88,
            8
        ],
        "label": 1
    },
    {
        "features": [
            17,
            -70
        ],
        "label": 1
    },
    {
        "features": [
            -2,
            7
        ],
        "label": 0
    },
    {
        "features": [
            -60,
            -5
        ],
        "label": 0
    },
    {
        "features": [
            -5,
            -90
        ],
        "label": 1
    },
    {
        "features": [
            30,
            -92
        ],
        "label": 1
    },
    {
        "features": [
            -91,
            -2
        ],
        "label": 0
    },
    {
        "features": [
            -33,
            -57
        ],
        "label": 0
    },
    {
        "features": [
            -70,
            22
        ],
        "label": 0
    },
    {
        "features": [
            -31,
            75
        ],
        "label": 0
    },
    {
        "features": [
            92,
            13
        ],
        "label": 1
    },
    {
        "features": [
            52,
            1
        ],
        "label": 1
    },
    {
        "features": [
            66,
            88
        ],
        "label": 1
    },
    {
        "features": [
            -76,
            55
        ],
        "label": 0
    },
    {
        "features": [
            -19,
            37
        ],
        "label": 0
    },
    {
        "features": [
            -93,
            20
        ],
        "label": 0
    },
    {
        "features": [
            38,
            7
        ],
        "label": 1
    },
    {
        "features": [
            -61,
            -39
        ],
        "label": 0
    },
    {
        "features": [
            -64,
            -94
        ],
        "label": 0
    },
    {
        "features": [
            -71,
            16
        ],
        "label": 0
    },
    {
        "features": [
            -81,
            57
        ],
        "label": 0
    },
    {
        "features": [
            -32,
            -33
        ],
        "label": 0
    },
    {
        "features": [
            11,
            89
        ],
        "label": 0
    },
    {
        "features": [
            34,
            48
        ],
        "label": 1
    },
    {
        "features": [
            29,
            -99
        ],
        "label": 1
    },
    {
        "features": [
            79,
            -99
        ],
        "label": 1
    },
    {
        "features": [
            52,
            50
        ],
        "label": 1
    },
    {
        "features": [
            1,
            50
        ],
        "label": 0
    },
    {
        "features": [
            55,
            -53
        ],
        "label": 1
    },
    {
        "features": [
            54,
            89
        ],
        "label": 1
    },
    {
        "features": [
            -32,
            84
        ],
        "label": 0
    },
    {
        "features": [
            17,
            -50
        ],
        "label": 1
    },
    {
        "features": [
            38,
            -71
        ],
        "label": 1
    },
    {
        "features": [
            -22,
            -74
        ],
        "label": 0
    },
    {
        "features": [
            9,
            -25
        ],
        "label": 1
    },
    {
        "features": [
            77,
            24
        ],
        "label": 1
    },
    {
        "features": [
            90,
            97
        ],
        "label": 1
    },
    {
        "features": [
            -89,
            -92
        ],
        "label": 0
    },
    {
        "features": [
            -79,
            -43
        ],
        "label": 0
    },
    {
        "features": [
            6,
            -98
        ],
        "label": 1
    },
    {
        "features": [
            93,
            -82
        ],
        "label": 1
    },
    {
        "features": [
            -21,
            45
        ],
        "label": 0
    },
    {
        "features": [
            -25,
            14
        ],
        "label": 0
    },
    {
        "features": [
            -100,
            6
        ],
        "label": 0
    },
    {
        "features": [
            -22,
            53
        ],
        "label": 0
    },
    {
        "features": [
            -17,
            11
        ],
        "label": 0
    },
    {
        "features": [
            -71,
            64
        ],
        "label": 0
    },
    {
        "features": [
            -14,
            -35
        ],
        "label": 0
    },
    {
        "features": [
            -31,
            94
        ],
        "label": 0
    },
    {
        "features": [
            34,
            62
        ],
        "label": 1
    },
    {
        "features": [
            76,
            -44
        ],
        "label": 1
    },
    {
        "features": [
            36,
            -85
        ],
        "label": 1
    },
    {
        "features": [
            27,
            -16
        ],
        "label": 1
    },
    {
        "features": [
            91,
            -26
        ],
        "label": 1
    },
    {
        "features": [
            14,
            39
        ],
        "label": 1
    },
    {
        "features": [
            72,
            -12
        ],
        "label": 1
    },
    {
        "features": [
            -32,
            -27
        ],
        "label": 0
    },
    {
        "features": [
            -28,
            -58
        ],
        "label": 0
    },
    {
        "features": [
            47,
            52
        ],
        "label": 1
    },
    {
        "features": [
            -31,
            -58
        ],
        "label": 0
    },
    {
        "features": [
            52,
            93
        ],
        "label": 1
    },
    {
        "features": [
            -11,
            16
        ],
        "label": 0
    },
    {
        "features": [
            -100,
            -8
        ],
        "label": 0
    },
    {
        "features": [
            13,
            100
        ],
        "label": 0
    },
    {
        "features": [
            63,
            94
        ],
        "label": 1
    },
    {
        "features": [
            -89,
            -53
        ],
        "label": 0
    },
    {
        "features": [
            45,
            -26
        ],
        "label": 1
    },
    {
        "features": [
            -91,
            51
        ],
        "label": 0
    },
    {
        "features": [
            68,
            -48
        ],
        "label": 1
    },
    {
        "features": [
            68,
            -32
        ],
        "label": 1
    },
    {
        "features": [
            23,
            -20
        ],
        "label": 1
    },
    {
        "features": [
            60,
            18
        ],
        "label": 1
    },
    {
        "features": [
            27,
            -45
        ],
        "label": 1
    },
    {
        "features": [
            -98,
            -45
        ],
        "label": 0
    },
    {
        "features": [
            80,
            -19
        ],
        "label": 1
    },
    {
        "features": [
            -37,
            -88
        ],
        "label": 0
    },
    {
        "features": [
            49,
            -76
        ],
        "label": 1
    },
    {
        "features": [
            -100,
            -72
        ],
        "label": 0
    },
    {
        "features": [
            -1,
            -64
        ],
        "label": 1
    },
    {
        "features": [
            -44,
            -82
        ],
        "label": 0
    },
    {
        "features": [
            -57,
            18
        ],
        "label": 0
    },
    {
        "features": [
            37,
            74
        ],
        "label": 1
    },
    {
        "features": [
            -99,
            -27
        ],
        "label": 0
    },
    {
        "features": [
            24,
            10
        ],
        "label": 1
    },
    {
        "features": [
            -87,
            17
        ],
        "label": 0
    }
]