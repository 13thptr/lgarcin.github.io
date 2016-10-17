(function() {
    var __rt = srequire('streamline/lib/callbacks/runtime').runtime(__filename, false),
        __func = __rt.__func;

    function range(start, stop, step) {
        if ((arguments.length <= 1)) {
            stop = (start || 0);
            start = 0;
        };

        step = (arguments[2] || 1);
        var length = Math.max(Math.ceil(stop["-"](start)["/"](step)), 0);
        var idx = 0;
        var range = new Array(length);
        while ((idx < length)) {
            range[idx++] = start;
            start += step;
        };

        return range;
    };

    function main(wait) {
        var version, box, sphere, cylinder, pyramid, cone, helix, ellipsoid, ring, arrow, graph, display, vector, _$rapyd$_Temp, _$rapyd$_print, arange, scene, n, j, i, k;
        var __frame = {
            name: "main",
            line: 16
        };
        return __func(wait, this, arguments, main, 0, __frame, function __$main() {

            version = ["2.1", "glowscript", ];
            Array.prototype["+"] = function(r) {
                return this.concat(r);
            };
            window.__GSlang = "vpython";
            box = vp_box;
            sphere = vp_sphere;
            cylinder = vp_cylinder;
            pyramid = vp_pyramid;
            cone = vp_cone;
            helix = vp_helix;
            ellipsoid = vp_ellipsoid;
            ring = vp_ring;
            arrow = vp_arrow;
            graph = vp_graph;
            display = canvas;
            vector = vec;
            _$rapyd$_Temp = 0;
            _$rapyd$_print = GSprint;
            arange = range;
            scene = canvas();
            "3";
            n = 5;
            "5";
            for (k = 0;
                (k < n); k++) {
                "6";
                for (i = k;
                    (i < n); i++) {
                    "7";
                    for (j = k;
                        (j < n); j++) {
                        "8";
                        box({
                            color: color.hsv_to_rgb(vector(min(i, j)["/"](n), 1, 1)),
                            pos: vector(i["*"](2)["-"](3["*"](n)), j["*"](2)["-"](n), k["*"](2)),
                            size: vector(1, 1, 1)
                        });
                        "9";
                        box({
                            color: color.hsv_to_rgb(vector(k["/"](n), 1, 1)),
                            pos: vector(i["*"](2)["+"](n), j["*"](2)["-"](n), k["*"](2)),
                            size: vector(1, 1, 1)
                        });
                    };
                };
            };;
        });
    };
    main;

    ;
    $(function() {
        window.__context = {
            glowscript_container: $("#glowscript").removeAttr("id")
        };
        main(__func)
    })
})()