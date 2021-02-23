(function() {

    var width, height, largeHeader, canvas, ctx, circles, circles1, target, animateHeader = true;

    // Main
    initHeader();
    addListeners();

    function initHeader() {
        width = window.innerWidth;
        height = 885;
        target = {x: 0, y: height};

        largeHeader = document.getElementById('large-header');
        largeHeader.style.height = height+'px';

        canvas = document.getElementById('demo-canvas');
        canvas.width = width;
        canvas.height = height;
        ctx = canvas.getContext('2d');

        // create particles
        circles = [];
        for(var x = 0; x < width*0.1; x++) { //CUANTAS BOLITAS QUIERO QUE SALGAN
            var c = new Circle();
            circles.push(c);
        }

        circles1 = [];
        for(var x = 0; x < width*0.1; x++) { //CUANTAS BOLITAS QUIERO QUE SALGAN
            var c = new Circle1();
            circles1.push(c);
        }
        animate();
    }

    // Event handling
    function addListeners() {
        window.addEventListener('scroll', scrollCheck);
        window.addEventListener('resize', resize);
    }

    function scrollCheck() {
        if(document.body.scrollTop > height) animateHeader = false;
        else animateHeader = true;
    }

    function resize() {
        width = window.innerWidth;
        height = window.innerHeight;
        largeHeader.style.height = height+'px';
        canvas.width = width;
        canvas.height = height;
    }

    function animate() {
        if(animateHeader) {
            ctx.clearRect(0,0,width,height);
            for(var i in circles) {
                circles[i].draw();
            }
            for(var i in circles1) {
                circles1[i].draw();
            }
        }
        requestAnimationFrame(animate);
    }

    // CIRCULOS DEL PRIMER COLOR
    function Circle() {
        var _this = this;

        // constructor
        (function() {
            _this.pos = {};
            init();
            console.log(_this);
        })();

        function init() {
            _this.pos.x = Math.random()*width;
            _this.pos.y = height+Math.random()*100;
            _this.alpha = 0.8;
            _this.scale = 1.5; //GROSOR DE LAS BOLITAS
            _this.velocity = Math.random();
        }

        this.draw = function() {
            if(_this.alpha <= 0) {
                init();
            }
            _this.pos.y -= _this.velocity;
            _this.alpha -= 0.0010; //limite de las bolitas
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.scale*10, 0, 2 * Math.PI, false);
            //EL THIS.ALPHA ES LA TRANSPARENCIA
            ctx.fillStyle = 'rgba(255,255,255,'+ _this.alpha+')';
            ctx.fill();
        };
    }

    // CIRCULOS DEL SEGUNDO COLOR
    function Circle1() {
        var _this = this;

        // constructor
        (function() {
            _this.pos = {};
            init();
            console.log(_this);
        })();

        function init() {
            _this.pos.x = Math.random()*width;
            _this.pos.y = height+Math.random()*100;
            _this.alpha = 0.9;
            _this.scale = 0.7;
            _this.velocity = Math.random();
        }

        this.draw = function() {
            if(_this.alpha <= 0) {
                init();
            }
            _this.pos.y -= _this.velocity;
            _this.alpha -= 0.0010; //limite de las bolitas
            ctx.beginPath();
            ctx.arc(_this.pos.x, _this.pos.y, _this.scale*10, 0, 2 * Math.PI, false);
            //EL THIS.ALPHA ES LA TRANSPARENCIA
            ctx.fillStyle = 'rgba(245,198,161,'+ _this.alpha+')';
            ctx.fill();
        };
    }

})();
