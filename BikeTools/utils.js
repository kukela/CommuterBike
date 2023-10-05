function isES6() {
    var arrowFunction = "var t = () => {};";
    try {
        f = new Function(arrowFunction);
        return true
    } catch (e) {
        alert("当前浏览器不支持ES6，请使用更先进的浏览器！")
        return false
    }
}