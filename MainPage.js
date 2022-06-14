var Web = /** @class */ (function () {
    function Web() {
        this.textInput = document.querySelector('#text-input');
        this.textButton = document.querySelector('#change-button');
        this.textResult = document.querySelector('#label');
    }
    Web.prototype.init = function () {
        var _this = this;
        this.textButton.addEventListener('click', function () {
            var value = _this.textInput.value;
            _this.textResult.textContent = value;
        });
    };
    return Web;
}());
var app = new Web();
window.onload = function () {
    app.init();
};
