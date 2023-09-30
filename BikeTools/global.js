// 0: mm, 1：in
var tireUnit = 0

const wheelDiameterMap = {
    "700c": { v: 622, t: "700c" }, "650b": { v: 584, t: "650b" }, "650c": { v: 571, t: "650c" },
    "29in": { v: 622, t: "29 英寸" }, "27.5in": { v: 584, t: "27.5 英寸" }, "26in": { v: 559, t: "26 英寸" },
    "24in": { v: 507, t: "24 英寸" }, "20in": { v: 406, t: "20 英寸" }, "16in": { v: 305, t: "16 英寸" },
    "14in": { v: 254, t: "14 英寸" }, "12.5in": { v: 203, t: "12.5 英寸" }
}

function convertInchesToMM(_) {
    let T = Number(_);
    return T *= 25.4, T = Math.round(T)
}

function getELWithName(n) {
    return document.querySelector("[name='" + n + "']");
}

function getOptionList(list) {
    let t = ""
    list.forEach(e => {
        t += "<option value='" + e.v + "''>" + e.t + "</option>"
    });
    return t
}

function setRangeMap(name, map) {
    let rEl = getELWithName(name)
    rEl.max = map.max
    rEl.min = map.min
    rEl.step = map.step
    rEl.value = map.v
    rEl.dispatchEvent(new InputEvent('input'));
}

function setRangeValue(name, v) {
    let rEl = getELWithName(name)
    rEl.value = v
    rEl.dispatchEvent(new InputEvent('input'));
}

function getTireUnitText() {
    switch (tireUnit) {
        case 1:
            return "in"
        default:
            return "mm"
    }
}