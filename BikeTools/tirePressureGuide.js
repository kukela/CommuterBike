const RIDE_STYLE_CROSS = "RIDE_STYLE_CROSS",
    RIDE_STYLE_FAT = "RIDE_STYLE_FAT",
    RIDE_STYLE_DOWNHILL_MTB = "RIDE_STYLE_DOWNHILL_MTB",
    RIDE_STYLE_ENDURO_MTB = "RIDE_STYLE_ENDURO_MTB",
    RIDE_STYLE_GRAVEL = "RIDE_STYLE_GRAVEL",
    RIDE_STYLE_ROAD = "RIDE_STYLE_ROAD",
    RIDE_STYLE_TRAIL_MTB = "RIDE_STYLE_TRAIL_MTB",
    RIDE_STYLE_XCOUNTRY_MTB = "RIDE_STYLE_XCOUNTRY_MTB",
    RIM_TYPE_TUBELESS_CROCHET = "RIM_TYPE_TUBELESS_CROCHET",
    RIM_TYPE_TUBELESS_STRAIGHT_SIDE = "RIM_TYPE_TUBELESS_STRAIGHT_SIDE",
    RIM_TYPE_TUBULAR = "RIM_TYPE_TUBULAR",
    SURFACE_DRY = "SURFACE_DRY",
    SURFACE_SNOW = "SURFACE_SNOW",
    TIRE_CASING_DOUBLE = "TIRE_CASING_DOUBLE",
    TIRE_CASING_REINFORCED = "TIRE_CASING_REINFORCED",
    TIRE_CASING_STANDARD = "TIRE_CASING_STANDARD",
    CASING_FUDGE = {
        TIRE_CASING_DOUBLE: .9,
        TIRE_CASING_REINFORCED: .95,
        TIRE_CASING_STANDARD: 1,
        TIRE_CASING_THIN: 1.1
    },
    FR_RATIO = {
        WHEEL_FRONT: .94,
        WHEEL_REAR: 1
    },
    RIDE_STYLE_FUDGE = {
        RIDE_STYLE_CROSS: .6,
        RIDE_STYLE_DOWNHILL_MTB: 1.1,
        RIDE_STYLE_ENDURO_MTB: 1.05,
        RIDE_STYLE_FAT: 1,
        RIDE_STYLE_GRAVEL: .9,
        RIDE_STYLE_ROAD: 1,
        RIDE_STYLE_TRAIL_MTB: 1.05,
        RIDE_STYLE_XCOUNTRY_MTB: .9
    },
    RIM_TYPE_FUDGE = {
        RIM_TYPE_TUBELESS_CROCHET: 1.03,
        RIM_TYPE_TUBELESS_STRAIGHT_SIDE: .955,
        RIM_TYPE_TUBES: 1.05,
        RIM_TYPE_TUBULAR: 1.1
    },
    RIM_TYPE_FUDGE_CROSS = {
        RIM_TYPE_TUBELESS_CROCHET: 1.03,
        RIM_TYPE_TUBELESS_STRAIGHT_SIDE: .955,
        RIM_TYPE_TUBES: 1.05,
        RIM_TYPE_TUBULAR: .9
    },
    WET_FUDGE = {
        SURFACE_DRY: 1,
        SURFACE_SNOW: .5,
        SURFACE_WET: .9
    },
    COMPATIBLE_TIRE_RIM_WIDTHS = [{
        compatibleRimWidth: 15,
        max: 22,
        min: 18
    },
    {
        compatibleRimWidth: 17,
        max: 25,
        min: 22
    },
    {
        compatibleRimWidth: 19,
        max: 29,
        min: 25
    },
    {
        compatibleRimWidth: 21,
        max: 35,
        min: 29
    },
    {
        compatibleRimWidth: 23,
        max: 47,
        min: 35
    },
    {
        compatibleRimWidth: 25,
        max: 58,
        min: 47
    },
    {
        compatibleRimWidth: 35,
        max: 66,
        min: 58
    },
    {
        compatibleRimWidth: 45,
        max: 72,
        min: 66
    },
    {
        compatibleRimWidth: 76,
        max: 84,
        min: 72
    },
    {
        compatibleRimWidth: 85,
        max: 112,
        min: 84
    },
    {
        compatibleRimWidth: 94,
        max: 132,
        min: 112
    }];

function getCompatibleRimWidth(_) {
    const T = COMPATIBLE_TIRE_RIM_WIDTHS.find(({
        max: T,
        min: E
    }) => _ >= E && _ < T);
    return T ? T.compatibleRimWidth : 0
}

function getDefaultSettingValues(_) {
    switch (_) {
        case RIDE_STYLE_ROAD:
            return {
                bikeWeight: 6.8,
                frontTireCasing: TIRE_CASING_STANDARD,
                frontTireWidth: 25,
                innerRimWidth: 23,
                rearTireCasing: TIRE_CASING_STANDARD,
                rearTireWidth: 25,
                rimType: RIM_TYPE_TUBELESS_STRAIGHT_SIDE,
                surface: SURFACE_DRY,
                wheelDiameter: 622
            };
        case RIDE_STYLE_CROSS:
            return {
                bikeWeight: 7.7,
                frontTireCasing: TIRE_CASING_STANDARD,
                frontTireWidth: 32,
                innerRimWidth: 21,
                rearTireCasing: TIRE_CASING_STANDARD,
                rearTireWidth: 32,
                rimType: RIM_TYPE_TUBULAR,
                surface: SURFACE_DRY,
                wheelDiameter: 622
            };
        case RIDE_STYLE_GRAVEL:
            return {
                bikeWeight: 9,
                frontTireCasing: TIRE_CASING_STANDARD,
                frontTireWidth: 38,
                innerRimWidth: 23,
                rearTireCasing: TIRE_CASING_STANDARD,
                rearTireWidth: 38,
                rimType: RIM_TYPE_TUBELESS_CROCHET,
                surface: SURFACE_DRY,
                wheelDiameter: 622
            };
        case RIDE_STYLE_XCOUNTRY_MTB:
            return {
                bikeWeight: 10.9,
                frontTireCasing: TIRE_CASING_STANDARD,
                frontTireWidth: 2.3,
                innerRimWidth: 23,
                rearTireCasing: TIRE_CASING_STANDARD,
                rearTireWidth: 2.3,
                rimType: RIM_TYPE_TUBELESS_CROCHET,
                surface: SURFACE_DRY,
                wheelDiameter: 622
            };
        case RIDE_STYLE_TRAIL_MTB:
            return {
                bikeWeight: 11.8,
                frontTireCasing: TIRE_CASING_REINFORCED,
                frontTireWidth: 2.4,
                innerRimWidth: 28,
                rearTireCasing: TIRE_CASING_REINFORCED,
                rearTireWidth: 2.4,
                rimType: RIM_TYPE_TUBELESS_CROCHET,
                surface: SURFACE_DRY,
                wheelDiameter: 622
            };
        case RIDE_STYLE_ENDURO_MTB:
            return {
                bikeWeight: 12.7,
                frontTireCasing: TIRE_CASING_REINFORCED,
                frontTireWidth: 2.4,
                innerRimWidth: 30,
                rearTireCasing: TIRE_CASING_REINFORCED,
                rearTireWidth: 2.4,
                rimType: RIM_TYPE_TUBELESS_CROCHET,
                surface: SURFACE_DRY,
                wheelDiameter: 622
            };
        case RIDE_STYLE_DOWNHILL_MTB:
            return {
                bikeWeight: 15.9,
                frontTireCasing: TIRE_CASING_DOUBLE,
                frontTireWidth: 2.5,
                innerRimWidth: 30,
                rearTireCasing: TIRE_CASING_DOUBLE,
                rearTireWidth: 2.5,
                rimType: RIM_TYPE_TUBELESS_CROCHET,
                surface: SURFACE_DRY,
                wheelDiameter: 571
            };
        case RIDE_STYLE_FAT:
            return {
                bikeWeight: 18.1,
                frontTireCasing: TIRE_CASING_STANDARD,
                frontTireWidth: 3.8,
                innerRimWidth: 100,
                rearTireCasing: TIRE_CASING_STANDARD,
                rearTireWidth: 3.8,
                rimType: RIM_TYPE_TUBELESS_CROCHET,
                surface: SURFACE_SNOW,
                wheelDiameter: 571
            };
        default:
            return {}
    }
}

function getTireWidthSliderValues(_) {
    switch (_) {
        case RIDE_STYLE_FAT:
            return {
                maxTireWidth: 5,
                minTireWidth: 3.8
            };
        case RIDE_STYLE_DOWNHILL_MTB:
        case RIDE_STYLE_ENDURO_MTB:
            return {
                maxTireWidth: 3.8,
                minTireWidth: 2
            };
        case RIDE_STYLE_TRAIL_MTB:
        case RIDE_STYLE_XCOUNTRY_MTB:
            return {
                maxTireWidth: 3.8,
                minTireWidth: 2
            };
        case RIDE_STYLE_GRAVEL:
            return {
                maxTireWidth: 65,
                minTireWidth: 18
            };
        case RIDE_STYLE_CROSS:
        case RIDE_STYLE_ROAD:
        default:
            return {
                maxTireWidth: 50,
                minTireWidth: 18
            }
    }
}

function convertInchesToMM(_) {
    let T = Number(_);
    return T *= 25.4, T = Math.round(T)
}

function calculateRecommendedPressure(_) {
    const T = RIDE_STYLE_FUDGE[_.rideStyle] || 0,
        E = FR_RATIO[_.wheelPosition] || .5;
    let i = _.rideStyle === RIDE_STYLE_CROSS ? RIM_TYPE_FUDGE_CROSS[_.rimType] : RIM_TYPE_FUDGE[_.rimType];
    i || (i = 1);
    const R = CASING_FUDGE[_.tireCasing] || 1,
        e = WET_FUDGE[_.surface] || 1,
        r = _.tireWidth + .4 * (_.innerRimWidth - getCompatibleRimWidth(_.tireWidth));
    let S = 10 ** 8.684670773 * (4 * Math.PI ** 2 * (_.wheelDiameter / 2 + r / 2) * (r / 2)) ** -1.304556655 * (1 + .0025 * (2.2 * (_.bikeWeight + _.riderWeight) - 180)) * E;
    return 68.9476 * (S *= i * T * e * R)
}