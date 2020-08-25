(() => {
    const animation = {
        init() {
            document.documentElement.classList.add('js-enabled');
            this.i = 1;

            this.olElt = document.createElement("ol");
            this.olElt.setAttribute('id', "fizzbuzz");
            this.olElt.className = "grid";
            document.querySelector("h1").insertAdjacentElement("afterend", this.olElt);

            this.createItems(101)

            window.addEventListener("scroll", e => {
                if (document.documentElement.scrollHeight - (window.innerHeight + scrollY) <= 100) {
                    this.createItems(10 + this.i)
                }
            })

        }, createItems(maxScroll) {
            for (this.i; this.i < maxScroll; this.i++) {
                if (this.i % 3 === 0 || this.i % 5 === 0) {
                    if (this.i % 3 !== 0) {
                        this.htmlcode = `<li class="buzz">BU<i>zz</i></li>`;
                    } else if (this.i % 5 !== 0) {
                        this.htmlcode = `<li class="fizz">FI<i>zz</i></li>`;
                    } else {
                        this.htmlcode = `<li class="fizzbuzz">FI<i>zz</i>BU<i>zz</i></li>`;
                    }
                } else {
                    this.htmlcode = `<li>` + this.i + `</li>`;
                }
                this.newHtml(this.htmlcode)
            }
        }, newHtml(txt) {
            document.getElementById("fizzbuzz").insertAdjacentHTML("beforeend", txt);
        }

    };
    animation.init();
})();