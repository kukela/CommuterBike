// 0: mm, 1：in
var tireUnit = 0

const wheelDiameterMap = {
    "700c": { v: 622, t: "700c（622mm）" }, "650b": { v: 584, t: "650b（584mm）" }, "650c": { v: 571, t: "650c（571mm）" },
    "29in": { v: 622, t: "29 英寸（622mm）" }, "27.5in": { v: 584, t: "27.5 英寸（584mm）" }, "26in": { v: 559, t: "26 英寸（559mm）" },
    "24in": { v: 507, t: "24 英寸（507mm）" }, "22in": { v: 457, t: "22 英寸（457mm）" }, "20in": { v: 406, t: "20 英寸（406mm）" },
    "18in": { v: 355, t: "18 英寸（355mm）" }, "16in": { v: 305, t: "16 英寸（305mm）" }, "14in": { v: 254, t: "14 英寸（254mm）" },
    "12.5in": { v: 203, t: "12.5 英寸（203mm）" }
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