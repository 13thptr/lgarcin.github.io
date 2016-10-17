document.addEventListener("DOMContentLoaded", function(event) {

    (function(global) {
      function now() {
        return new Date();
      }

      var force = "";

      if (typeof (window._bokeh_onload_callbacks) === "undefined" || force !== "") {
        window._bokeh_onload_callbacks = [];
        window._bokeh_is_loading = undefined;
      }





      function run_callbacks() {
        window._bokeh_onload_callbacks.forEach(function(callback) { callback() });
        delete window._bokeh_onload_callbacks
        console.info("Bokeh: all callbacks have finished");
      }

      function load_libs(js_urls, callback) {
        window._bokeh_onload_callbacks.push(callback);
        if (window._bokeh_is_loading > 0) {
          console.log("Bokeh: BokehJS is being loaded, scheduling callback at", now());
          return null;
        }
        if (js_urls == null || js_urls.length === 0) {
          run_callbacks();
          return null;
        }
        console.log("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
        window._bokeh_is_loading = js_urls.length;
        for (var i = 0; i < js_urls.length; i++) {
          var url = js_urls[i];
          var s = document.createElement('script');
          s.src = url;
          s.async = false;
          s.onreadystatechange = s.onload = function() {
            window._bokeh_is_loading--;
            if (window._bokeh_is_loading === 0) {
              console.log("Bokeh: all BokehJS libraries loaded");
              run_callbacks()
            }
          };
          s.onerror = function() {
            console.warn("failed to load library " + url);
          };
          console.log("Bokeh: injecting script tag for BokehJS library: ", url);
          document.getElementsByTagName("head")[0].appendChild(s);
        }
      };var element = document.getElementById("cab4a16f-d6df-4e0f-b217-22423a26042c");
      if (element == null) {
        console.log("Bokeh: ERROR: autoload.js configured with elementid 'cab4a16f-d6df-4e0f-b217-22423a26042c' but no matching script tag was found. ")
        return false;
      }

      var js_urls = ['https://cdn.pydata.org/bokeh/release/bokeh-0.12.2.min.js', 'https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.2.min.js', 'https://cdn.pydata.org/bokeh/release/bokeh-compiler-0.12.2.min.js'];

      var inline_js = [
        function(Bokeh) {
          Bokeh.set_log_level("info");
        },

        function(Bokeh) {
          Bokeh.$(function() {
              Bokeh.safely(function() {
                  var docs_json = {"26e815f8-2beb-475c-8a44-a7381505e5b5":{"roots":{"references":[{"attributes":{"callback":null},"id":"68c3aec7-6e15-49ed-a298-4ce05b315d60","type":"DataRange1d"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"ef829232-1444-4277-975e-dae262b66dc9","type":"Line"},{"attributes":{},"id":"ce6a876c-7f3f-41a9-8a89-45744a5e0c4f","type":"BasicTickFormatter"},{"attributes":{"dimension":1,"plot":{"id":"3d2b2804-4758-4f57-8452-a8a978f6f3a9","subtype":"Figure","type":"Plot"},"ticker":{"id":"3dfad28d-045a-46ff-98c8-6dc0423476c9","type":"BasicTicker"}},"id":"b5a027d4-57de-4b9e-ba1e-9a7eb624743c","type":"Grid"},{"attributes":{"line_color":{"value":"blue"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"7b36ed2d-0985-47c8-86d9-a6035965b173","type":"Line"},{"attributes":{"line_color":{"value":"green"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"d145c9a9-12a2-4962-9580-84887a9617ac","type":"Line"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[100000.0,10100000.0,20100000.0,30100000.0,40100000.0,50100000.0,60100000.0,70100000.0,80100000.0,90100000.0,100100000.0,110100000.0,120100000.0,130100000.0,140100000.0,150100000.0,160100000.0,170100000.0,180100000.0,190100000.0,200100000.0,210100000.0,220100000.0,230100000.0,240100000.0,250100000.0,260100000.0,270100000.0,280100000.0,290100000.0,300100000.0,310100000.0,320100000.0,330100000.0,340100000.0,350100000.0,360100000.0,370100000.0,380100000.0,390100000.0,400100000.0,410100000.0,420100000.0,430100000.0,440100000.0,450100000.0,460100000.0,470100000.0,480100000.0,490100000.0,500100000.0,510100000.0,520100000.0,530100000.0,540100000.0,550100000.0,560100000.0,570100000.0,580100000.0,590100000.0,600100000.0,610100000.0,620100000.0,630100000.0,640100000.0,650100000.0,660100000.0,670100000.0,680100000.0,690100000.0,700100000.0,710100000.0,720100000.0,730100000.0,740100000.0,750100000.0,760100000.0,770100000.0,780100000.0,790100000.0,800100000.0,810100000.0,820100000.0,830100000.0,840100000.0,850100000.0,860100000.0,870100000.0,880100000.0,890100000.0,900100000.0,910100000.0,920100000.0,930100000.0,940100000.0,950100000.0,960100000.0,970100000.0,980100000.0,990100000.0,1000100000.0,1010100000.0,1020100000.0,1030100000.0,1040100000.0,1050100000.0,1060100000.0,1070100000.0,1080100000.0,1090100000.0,1100100000.0,1110100000.0,1120100000.0,1130100000.0,1140100000.0,1150100000.0,1160100000.0,1170100000.0,1180100000.0,1190100000.0,1200100000.0,1210100000.0,1220100000.0,1230100000.0,1240100000.0,1250100000.0,1260100000.0,1270100000.0,1280100000.0,1290100000.0,1300100000.0,1310100000.0,1320100000.0,1330100000.0,1340100000.0,1350100000.0,1360100000.0,1370100000.0,1380100000.0,1390100000.0,1400100000.0,1410100000.0,1420100000.0,1430100000.0,1440100000.0,1450100000.0,1460100000.0,1470100000.0,1480100000.0,1490100000.0,1500100000.0,1510100000.0,1520100000.0,1530100000.0,1540100000.0,1550100000.0,1560100000.0,1570100000.0,1580100000.0,1590100000.0,1600100000.0,1610100000.0,1620100000.0,1630100000.0,1640100000.0,1650100000.0,1660100000.0,1670100000.0,1680100000.0,1690100000.0,1700100000.0,1710100000.0,1720100000.0,1730100000.0,1740100000.0,1750100000.0,1760100000.0,1770100000.0,1780100000.0,1790100000.0,1800100000.0,1810100000.0,1820100000.0,1830100000.0,1840100000.0,1850100000.0,1860100000.0,1870100000.0,1880100000.0,1890100000.0,1900100000.0,1910100000.0,1920100000.0,1930100000.0,1940100000.0,1950100000.0,1960100000.0,1970100000.0,1980100000.0,1990100000.0],"y":[1.9874727000000004e+35,1.98115123575676e+35,1.9877980961737e+35,2.0054278770170022e+35,2.030180129896572e+35,2.059649999819538e+35,2.0990092392047756e+35,2.1427315045936215e+35,2.1882083561724423e+35,2.2349884452432176e+35,2.2829746815178423e+35,2.329331889828605e+35,2.3715427121494432e+35,2.4051831507098882e+35,2.428083455271793e+35,2.440145009148602e+35,2.438422213675809e+35,2.425837807213144e+35,2.402243272107663e+35,2.368625965748777e+35,2.3261924266439234e+35,2.278595290587371e+35,2.2296493783067235e+35,2.181459875100059e+35,2.1351884128890904e+35,2.0919784376593516e+35,2.0529168123463684e+35,2.0182815333681595e+35,1.988604916170496e+35,1.965736810802267e+35,1.9520408765307424e+35,1.9422316824869053e+35,1.941173834385023e+35,1.9473811352359093e+35,1.960164596059022e+35,1.9790517955942656e+35,2.0032619680060617e+35,2.032375696746336e+35,2.0666520560516808e+35,2.1059763399735273e+35,2.1494164523004265e+35,2.1953941841022484e+35,2.241850106607494e+35,2.2864365622146285e+35,2.326718258294747e+35,2.3602018292071246e+35,2.3844292932347214e+35,2.3976685365586448e+35,2.3994121066955398e+35,2.3899363674719365e+35,2.3699655520675423e+35,2.3406955479479865e+35,2.3037492730653555e+35,2.261007421089428e+35,2.214446258822304e+35,2.166021603335937e+35,2.117485722114822e+35,2.0702041450343436e+35,2.0253622163840735e+35,1.9843735444430427e+35,1.9488545992725154e+35,1.9204966133026846e+35,1.8952614239013804e+35,1.8780219896294423e+35,1.8679746994687504e+35,1.8647888147765673e+35,1.868194059177151e+35,1.8779093625377075e+35,1.893623189166806e+35,1.914881662665276e+35,1.9410688954271245e+35,1.9716663640151513e+35,2.0063736136880275e+35,2.0447811816114112e+35,2.0860708706024988e+35,2.1289855267737077e+35,2.1719057156715607e+35,2.2129335022725623e+35,2.2499911078746444e+35,2.2809692633112357e+35,2.3039425610587086e+35,2.317413061674878e+35,2.320453502830135e+35,2.3127224694109716e+35,2.2945388280867075e+35,2.2670492012703254e+35,2.232141805470795e+35,2.19201809016582e+35,2.1488342308004274e+35,2.1045450620933425e+35,2.0608439006308458e+35,2.019135123999937e+35,1.9805272448752136e+35,1.9458494407493438e+35,1.915696729137759e+35,1.890495480691505e+35,1.8705503419778553e+35,1.8560327727141678e+35,1.846952696897421e+35,1.8432370307783846e+35,1.8449099852131582e+35,1.8521350933383972e+35,1.86505862474791e+35,1.883677654177521e+35,1.9078141918631546e+35,1.9371231073154428e+35,1.971087634436248e+35,2.0089989892980665e+35,2.0499345555415453e+35,2.0927443582869632e+35,2.1360492255347105e+35,2.1782654084850825e+35,2.2176480162279487e+35,2.2523425490586183e+35,2.2804799084017556e+35,2.3003691709090155e+35,2.3107703085669638e+35,2.3110957455431757e+35,2.301420174327413e+35,2.282389983318413e+35,2.255128141304045e+35,2.221121056404009e+35,2.1820720502661763e+35,2.1397455210823423e+35,2.095832101136914e+35,2.051851755881411e+35,2.0091017180559375e+35,1.9686465799259688e+35,1.9313363349967844e+35,1.8978366482928967e+35,1.8686344543591356e+35,1.84408566852192e+35,1.8245108911789513e+35,1.8108297699595552e+35,1.799841252438598e+35,1.794140272835528e+35,1.794371948957173e+35,1.800249501917682e+35,1.811671730744064e+35,1.828494546944984e+35,1.8504917046209567e+35,1.87732956020959e+35,1.9085429578967642e+35,1.943512226386805e+35,1.981437481291723e+35,2.0213182152601113e+35,2.061948224373053e+35,2.1019264911002585e+35,2.139683501757123e+35,2.173529954363411e+35,2.2017504093690803e+35,2.2227591115761076e+35,2.2352987946400802e+35,2.238619603376366e+35,2.232557788515851e+35,2.2175098442004393e+35,2.1943544306624927e+35,2.164350675057019e+35,2.1290151927899308e+35,2.089984416221858e+35,2.0488822083455662e+35,2.007214831217379e+35,1.966304174892662e+35,1.9272577174178052e+35,1.8909678834311263e+35,1.8581318122387262e+35,1.8292811609178668e+35,1.8048111324722104e+35,1.785000230210004e+35,1.7700198083444783e+35,1.7599441530938805e+35,1.7547788848031596e+35,1.754511484274569e+35,1.7591526237408862e+35,1.768728881842276e+35,1.7832346498476966e+35,1.802585920429286e+35,1.8265979592531916e+35,1.85497861898054e+35,1.887321040264383e+35,1.923086384431095e+35,1.961578601821044e+35,2.0019202276694145e+35,2.0430381271231384e+35,2.0836669321962433e+35,2.1223799336144557e+35,2.1576530598324917e+35,2.1879522055788653e+35,2.2118393343956096e+35,2.2280922296444407e+35,2.2358185893094755e+35,2.2345465814938856e+35,2.224282810167524e+35,2.205532360384447e+35,2.1792661404426766e+35,2.1468196263905695e+35,2.1097370835092724e+35,2.069603324688629e+35,2.027913954298233e+35,1.9860022467258938e+35]}},"id":"55b747a1-ea43-4a0e-a522-3a70689490b4","type":"ColumnDataSource"},{"attributes":{"bottom_units":"screen","fill_alpha":{"value":0.5},"fill_color":{"value":"lightgrey"},"left_units":"screen","level":"overlay","line_alpha":{"value":1.0},"line_color":{"value":"black"},"line_dash":[4,4],"line_width":{"value":2},"plot":null,"render_mode":"css","right_units":"screen","top_units":"screen"},"id":"4df09cbc-30d1-43ad-9098-577abb1e448d","type":"BoxAnnotation"},{"attributes":{"plot":{"id":"3d2b2804-4758-4f57-8452-a8a978f6f3a9","subtype":"Figure","type":"Plot"}},"id":"849acbbd-6fe8-42e8-bd31-7ecd7261dc09","type":"ResetTool"},{"attributes":{"data_source":{"id":"55b747a1-ea43-4a0e-a522-3a70689490b4","type":"ColumnDataSource"},"glyph":{"id":"fc362d55-73a7-490f-b9a4-c83b88e8fc1f","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"ef829232-1444-4277-975e-dae262b66dc9","type":"Line"},"selection_glyph":null},"id":"3a9bacbe-4d0d-44f1-aaa6-93db1a9a888b","type":"GlyphRenderer"},{"attributes":{"plot":{"id":"3d2b2804-4758-4f57-8452-a8a978f6f3a9","subtype":"Figure","type":"Plot"}},"id":"bd366124-67aa-4c6f-9d42-ae4f8f2c40da","type":"PanTool"},{"attributes":{},"id":"ae770e08-e83c-4ac6-aae6-51dba54094af","type":"BasicTicker"},{"attributes":{"below":[{"id":"47581fdc-65aa-4c3b-80a2-db64f7d5ef56","type":"LinearAxis"}],"left":[{"id":"bc8d9f62-2325-40c5-89b3-db4cec61b023","type":"LinearAxis"}],"plot_height":400,"renderers":[{"id":"47581fdc-65aa-4c3b-80a2-db64f7d5ef56","type":"LinearAxis"},{"id":"28441e92-f646-440f-8d24-48ac34428ce1","type":"Grid"},{"id":"bc8d9f62-2325-40c5-89b3-db4cec61b023","type":"LinearAxis"},{"id":"b5a027d4-57de-4b9e-ba1e-9a7eb624743c","type":"Grid"},{"id":"4df09cbc-30d1-43ad-9098-577abb1e448d","type":"BoxAnnotation"},{"id":"dda1bc88-7898-4403-a050-b253e8d502d5","type":"Legend"},{"id":"3a9bacbe-4d0d-44f1-aaa6-93db1a9a888b","type":"GlyphRenderer"},{"id":"8526cdc2-b5df-4663-8b39-966452977fa8","type":"GlyphRenderer"},{"id":"b7805d0d-ad7c-4191-a137-c2b6b3390a36","type":"GlyphRenderer"}],"title":{"id":"56e65b22-abc7-41ba-9036-6785b2cac923","type":"Title"},"tool_events":{"id":"16a3b590-3101-4453-b733-46c1af9eb3f8","type":"ToolEvents"},"toolbar":{"id":"9ecad6e5-dc0a-4275-b5cf-b72cb7e828fd","type":"Toolbar"},"x_range":{"id":"4a9a538c-8cc4-443f-b44a-7fdf83d18806","type":"DataRange1d"},"y_range":{"id":"68c3aec7-6e15-49ed-a298-4ce05b315d60","type":"DataRange1d"}},"id":"3d2b2804-4758-4f57-8452-a8a978f6f3a9","subtype":"Figure","type":"Plot"},{"attributes":{"active_drag":"auto","active_scroll":"auto","active_tap":"auto","tools":[{"id":"bd366124-67aa-4c6f-9d42-ae4f8f2c40da","type":"PanTool"},{"id":"c3455978-8932-414d-9132-1686d3fbdd70","type":"WheelZoomTool"},{"id":"a85c9416-267c-449d-83b6-53a10e1e57b9","type":"BoxZoomTool"},{"id":"60cd5ddb-4f71-4ff0-a744-f6bbb7463804","type":"SaveTool"},{"id":"849acbbd-6fe8-42e8-bd31-7ecd7261dc09","type":"ResetTool"},{"id":"a95b3f4e-0797-41ce-963c-c5d65b014d62","type":"HelpTool"}]},"id":"9ecad6e5-dc0a-4275-b5cf-b72cb7e828fd","type":"Toolbar"},{"attributes":{},"id":"16a3b590-3101-4453-b733-46c1af9eb3f8","type":"ToolEvents"},{"attributes":{"plot":null,"text":"Evolution de l'\u00e9nergie"},"id":"56e65b22-abc7-41ba-9036-6785b2cac923","type":"Title"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[100000.0,10100000.0,20100000.0,30100000.0,40100000.0,50100000.0,60100000.0,70100000.0,80100000.0,90100000.0,100100000.0,110100000.0,120100000.0,130100000.0,140100000.0,150100000.0,160100000.0,170100000.0,180100000.0,190100000.0,200100000.0,210100000.0,220100000.0,230100000.0,240100000.0,250100000.0,260100000.0,270100000.0,280100000.0,290100000.0,300100000.0,310100000.0,320100000.0,330100000.0,340100000.0,350100000.0,360100000.0,370100000.0,380100000.0,390100000.0,400100000.0,410100000.0,420100000.0,430100000.0,440100000.0,450100000.0,460100000.0,470100000.0,480100000.0,490100000.0,500100000.0,510100000.0,520100000.0,530100000.0,540100000.0,550100000.0,560100000.0,570100000.0,580100000.0,590100000.0,600100000.0,610100000.0,620100000.0,630100000.0,640100000.0,650100000.0,660100000.0,670100000.0,680100000.0,690100000.0,700100000.0,710100000.0,720100000.0,730100000.0,740100000.0,750100000.0,760100000.0,770100000.0,780100000.0,790100000.0,800100000.0,810100000.0,820100000.0,830100000.0,840100000.0,850100000.0,860100000.0,870100000.0,880100000.0,890100000.0,900100000.0,910100000.0,920100000.0,930100000.0,940100000.0,950100000.0,960100000.0,970100000.0,980100000.0,990100000.0,1000100000.0,1010100000.0,1020100000.0,1030100000.0,1040100000.0,1050100000.0,1060100000.0,1070100000.0,1080100000.0,1090100000.0,1100100000.0,1110100000.0,1120100000.0,1130100000.0,1140100000.0,1150100000.0,1160100000.0,1170100000.0,1180100000.0,1190100000.0,1200100000.0,1210100000.0,1220100000.0,1230100000.0,1240100000.0,1250100000.0,1260100000.0,1270100000.0,1280100000.0,1290100000.0,1300100000.0,1310100000.0,1320100000.0,1330100000.0,1340100000.0,1350100000.0,1360100000.0,1370100000.0,1380100000.0,1390100000.0,1400100000.0,1410100000.0,1420100000.0,1430100000.0,1440100000.0,1450100000.0,1460100000.0,1470100000.0,1480100000.0,1490100000.0,1500100000.0,1510100000.0,1520100000.0,1530100000.0,1540100000.0,1550100000.0,1560100000.0,1570100000.0,1580100000.0,1590100000.0,1600100000.0,1610100000.0,1620100000.0,1630100000.0,1640100000.0,1650100000.0,1660100000.0,1670100000.0,1680100000.0,1690100000.0,1700100000.0,1710100000.0,1720100000.0,1730100000.0,1740100000.0,1750100000.0,1760100000.0,1770100000.0,1780100000.0,1790100000.0,1800100000.0,1810100000.0,1820100000.0,1830100000.0,1840100000.0,1850100000.0,1860100000.0,1870100000.0,1880100000.0,1890100000.0,1900100000.0,1910100000.0,1920100000.0,1930100000.0,1940100000.0,1950100000.0,1960100000.0,1970100000.0,1980100000.0,1990100000.0],"y":[-4.218832999386881e+35,-4.202943755528241e+35,-4.2043677951101836e+35,-4.217866161209299e+35,-4.238852050384327e+35,-4.2652433859843024e+35,-4.301845921690588e+35,-4.342511727125616e+35,-4.3852485876121015e+35,-4.4294830687725506e+35,-4.4749913473107485e+35,-4.51885950683571e+35,-4.558513767345893e+35,-4.5895146676458795e+35,-4.609830109351869e+35,-4.6191566879042996e+35,-4.6149437280099125e+35,-4.5999144009231595e+35,-4.573929287999001e+35,-4.5379805810066286e+35,-4.493336682374109e+35,-4.443708905113596e+35,-4.3928784372188146e+35,-4.3429014129165066e+35,-4.294917777560876e+35,-4.250068477907729e+35,-4.2094294910703124e+35,-4.173273493233302e+35,-4.142162681404729e+35,-4.117954147074753e+35,-4.1028952705666616e+35,-4.091724637748121e+35,-4.0894041907253926e+35,-4.094333060870192e+35,-4.105819000720985e+35,-4.1233829374014116e+35,-4.146244639861762e+35,-4.174002760108265e+35,-4.206918450558777e+35,-4.244853950190357e+35,-4.2868501906184966e+35,-4.3313077566700965e+35,-4.376154241105939e+35,-4.419038888821696e+35,-4.457530971040304e+35,-4.489146071603327e+35,-4.511446541727395e+35,-4.52273682323477e+35,-4.522542752076764e+35,-4.511159179959357e+35,-4.489322653458656e+35,-4.4582401864129435e+35,-4.419543929220254e+35,-4.37512130354775e+35,-4.32695329569734e+35,-4.276997747025901e+35,-4.227004828776392e+35,-4.178337729464801e+35,-4.132185773422332e+35,-4.089966375026154e+35,-4.053288177729484e+35,-4.02374567506847e+35,-3.997389851262677e+35,-3.979112997519956e+35,-3.968040329872207e+35,-3.963829991009623e+35,-3.966202971088999e+35,-3.97487141637268e+35,-3.9895171861271546e+35,-4.0096796159402584e+35,-4.034739857976405e+35,-4.0641816688818094e+35,-4.0977041186161225e+35,-4.134889487080072e+35,-4.174907665464957e+35,-4.2164905794505624e+35,-4.258010787387391e+35,-4.297566084325736e+35,-4.333079042371634e+35,-4.362446419576683e+35,-4.3837550134429005e+35,-4.395524110332072e+35,-4.396846254475855e+35,-4.387401569739961e+35,-4.367533455556323e+35,-4.338413705889031e+35,-4.301948885799261e+35,-4.260348719056901e+35,-4.215770316960355e+35,-4.1701651770850796e+35,-4.125220657650067e+35,-4.082333498661351e+35,-4.042603682583964e+35,-4.0068517772302265e+35,-3.975664835358287e+35,-3.949462114975722e+35,-3.928541424305551e+35,-3.913067114291626e+35,-3.903042767422298e+35,-3.898391883160045e+35,-3.899137573887026e+35,-3.9054405260202605e+35,-3.9174404928411345e+35,-3.935125893282238e+35,-3.958309576963841e+35,-3.986637366715516e+35,-4.019583725978353e+35,-4.056431514898636e+35,-4.096250478601998e+35,-4.1378842180224096e+35,-4.179948961170304e+35,-4.220858679413877e+35,-4.2588687705856884e+35,-4.2921279867780616e+35,-4.318774621407574e+35,-4.33713081605371e+35,-4.345974957851349e+35,-4.3447399214490966e+35,-4.33351953311248e+35,-4.312976841324561e+35,-4.284248689107224e+35,-4.2488320133449366e+35,-4.208436859624289e+35,-4.16483056896684e+35,-4.119703411073784e+35,-4.074572435629898e+35,-4.030730281701653e+35,-3.989236037504278e+35,-3.9509337895765434e+35,-3.916483032081769e+35,-3.8863641078377366e+35,-3.8609266509576686e+35,-3.84048576000022e+35,-3.825940647320198e+35,-3.81401973893051e+35,-3.807498272098503e+35,-3.806916076077914e+35,-3.8119791201974445e+35,-3.822579539112857e+35,-3.838566526219483e+35,-3.859707068219911e+35,-3.885660690495987e+35,-3.915955430482518e+35,-3.949965006363968e+35,-3.986883377281961e+35,-4.025704692139545e+35,-4.0652186243360294e+35,-4.104021663396758e+35,-4.140543864058583e+35,-4.173098141350828e+35,-4.1999747690727984e+35,-4.21959801077421e+35,-4.2307248680251014e+35,-4.2326224477121315e+35,-4.225144361080068e+35,-4.2087031664677115e+35,-4.184191408074164e+35,-4.152879341256129e+35,-4.1162914841893224e+35,-4.076068729908917e+35,-4.0338361505572755e+35,-3.9910985092652945e+35,-3.949174195573277e+35,-3.9091658820446195e+35,-3.8719604832248246e+35,-3.838249366777857e+35,-3.808558407544172e+35,-3.7832770839567606e+35,-3.762678210397248e+35,-3.7469275424840374e+35,-3.736094130036335e+35,-3.730179125036813e+35,-3.7291664109374505e+35,-3.733063350165649e+35,-3.741892624969784e+35,-3.755643778470395e+35,-3.774227267823789e+35,-3.79745256597392e+35,-3.8250217371283065e+35,-3.856522199678687e+35,-3.891409463066749e+35,-3.928982003875157e+35,-3.968357333077454e+35,-4.00845815079489e+35,-4.048016291744049e+35,-4.085604182042702e+35,-4.1196993416082694e+35,-4.1487720770648004e+35,-4.171391722380052e+35,-4.186346229001507e+35,-4.192755799690288e+35,-4.190162761141642e+35,-4.1785887038045955e+35,-4.158553496698188e+35,-4.131041268217342e+35,-4.097397730782567e+35,-4.059173600624469e+35,-4.017956479929122e+35,-3.975241812185901e+35,-3.9323605634244126e+35]}},"id":"c41c1cec-b9dd-42f0-a5d3-69ab425ccdc0","type":"ColumnDataSource"},{"attributes":{"line_color":{"value":"red"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"fc362d55-73a7-490f-b9a4-c83b88e8fc1f","type":"Line"},{"attributes":{},"id":"257ec280-b130-42be-8c20-990d69190324","type":"BasicTickFormatter"},{"attributes":{},"id":"3dfad28d-045a-46ff-98c8-6dc0423476c9","type":"BasicTicker"},{"attributes":{"legends":[["Energie cin\u00e9tique",[{"id":"3a9bacbe-4d0d-44f1-aaa6-93db1a9a888b","type":"GlyphRenderer"}]],["Energie potentielle",[{"id":"8526cdc2-b5df-4663-8b39-966452977fa8","type":"GlyphRenderer"}]],["Energie totale",[{"id":"b7805d0d-ad7c-4191-a137-c2b6b3390a36","type":"GlyphRenderer"}]]],"location":"left_center","plot":{"id":"3d2b2804-4758-4f57-8452-a8a978f6f3a9","subtype":"Figure","type":"Plot"}},"id":"dda1bc88-7898-4403-a050-b253e8d502d5","type":"Legend"},{"attributes":{"formatter":{"id":"257ec280-b130-42be-8c20-990d69190324","type":"BasicTickFormatter"},"plot":{"id":"3d2b2804-4758-4f57-8452-a8a978f6f3a9","subtype":"Figure","type":"Plot"},"ticker":{"id":"ae770e08-e83c-4ac6-aae6-51dba54094af","type":"BasicTicker"}},"id":"47581fdc-65aa-4c3b-80a2-db64f7d5ef56","type":"LinearAxis"},{"attributes":{"callback":null,"column_names":["x","y"],"data":{"x":[100000.0,10100000.0,20100000.0,30100000.0,40100000.0,50100000.0,60100000.0,70100000.0,80100000.0,90100000.0,100100000.0,110100000.0,120100000.0,130100000.0,140100000.0,150100000.0,160100000.0,170100000.0,180100000.0,190100000.0,200100000.0,210100000.0,220100000.0,230100000.0,240100000.0,250100000.0,260100000.0,270100000.0,280100000.0,290100000.0,300100000.0,310100000.0,320100000.0,330100000.0,340100000.0,350100000.0,360100000.0,370100000.0,380100000.0,390100000.0,400100000.0,410100000.0,420100000.0,430100000.0,440100000.0,450100000.0,460100000.0,470100000.0,480100000.0,490100000.0,500100000.0,510100000.0,520100000.0,530100000.0,540100000.0,550100000.0,560100000.0,570100000.0,580100000.0,590100000.0,600100000.0,610100000.0,620100000.0,630100000.0,640100000.0,650100000.0,660100000.0,670100000.0,680100000.0,690100000.0,700100000.0,710100000.0,720100000.0,730100000.0,740100000.0,750100000.0,760100000.0,770100000.0,780100000.0,790100000.0,800100000.0,810100000.0,820100000.0,830100000.0,840100000.0,850100000.0,860100000.0,870100000.0,880100000.0,890100000.0,900100000.0,910100000.0,920100000.0,930100000.0,940100000.0,950100000.0,960100000.0,970100000.0,980100000.0,990100000.0,1000100000.0,1010100000.0,1020100000.0,1030100000.0,1040100000.0,1050100000.0,1060100000.0,1070100000.0,1080100000.0,1090100000.0,1100100000.0,1110100000.0,1120100000.0,1130100000.0,1140100000.0,1150100000.0,1160100000.0,1170100000.0,1180100000.0,1190100000.0,1200100000.0,1210100000.0,1220100000.0,1230100000.0,1240100000.0,1250100000.0,1260100000.0,1270100000.0,1280100000.0,1290100000.0,1300100000.0,1310100000.0,1320100000.0,1330100000.0,1340100000.0,1350100000.0,1360100000.0,1370100000.0,1380100000.0,1390100000.0,1400100000.0,1410100000.0,1420100000.0,1430100000.0,1440100000.0,1450100000.0,1460100000.0,1470100000.0,1480100000.0,1490100000.0,1500100000.0,1510100000.0,1520100000.0,1530100000.0,1540100000.0,1550100000.0,1560100000.0,1570100000.0,1580100000.0,1590100000.0,1600100000.0,1610100000.0,1620100000.0,1630100000.0,1640100000.0,1650100000.0,1660100000.0,1670100000.0,1680100000.0,1690100000.0,1700100000.0,1710100000.0,1720100000.0,1730100000.0,1740100000.0,1750100000.0,1760100000.0,1770100000.0,1780100000.0,1790100000.0,1800100000.0,1810100000.0,1820100000.0,1830100000.0,1840100000.0,1850100000.0,1860100000.0,1870100000.0,1880100000.0,1890100000.0,1900100000.0,1910100000.0,1920100000.0,1930100000.0,1940100000.0,1950100000.0,1960100000.0,1970100000.0,1980100000.0,1990100000.0],"y":[-2.2313602993868803e+35,-2.2217925197714814e+35,-2.2165696989364836e+35,-2.2124382841922968e+35,-2.2086719204877553e+35,-2.2055933861647643e+35,-2.202836682485812e+35,-2.1997802225319945e+35,-2.1970402314396592e+35,-2.194494623529333e+35,-2.1920166657929062e+35,-2.189527617007105e+35,-2.1869710551964497e+35,-2.1843315169359913e+35,-2.1817466540800764e+35,-2.1790116787556978e+35,-2.1765215143341033e+35,-2.1740765937100153e+35,-2.171686015891338e+35,-2.1693546152578517e+35,-2.1671442557301852e+35,-2.1651136145262252e+35,-2.163229058912091e+35,-2.1614415378164475e+35,-2.1597293646717854e+35,-2.1580900402483773e+35,-2.156512678723944e+35,-2.1549919598651424e+35,-2.1535577652342332e+35,-2.1522173362724864e+35,-2.1508543940359192e+35,-2.149492955261216e+35,-2.1482303563403695e+35,-2.1469519256342826e+35,-2.1456544046619634e+35,-2.144331141807146e+35,-2.1429826718557e+35,-2.141627063361929e+35,-2.1402663945070964e+35,-2.1388776102168294e+35,-2.13743373831807e+35,-2.135913572567848e+35,-2.1343041344984447e+35,-2.1326023266070673e+35,-2.130812712745557e+35,-2.1289442423962026e+35,-2.1270172484926736e+35,-2.125068286676125e+35,-2.123130645381224e+35,-2.1212228124874206e+35,-2.1193571013911135e+35,-2.117544638464957e+35,-2.1157946561548983e+35,-2.1141138824583217e+35,-2.1125070368750363e+35,-2.110976143689964e+35,-2.1095191066615697e+35,-2.1081335844304575e+35,-2.1068235570382582e+35,-2.105592830583111e+35,-2.1044335784569682e+35,-2.1032490617657856e+35,-2.1021284273612963e+35,-2.1010910078905138e+35,-2.100065630403457e+35,-2.0990411762330554e+35,-2.0980089119118483e+35,-2.0969620538349724e+35,-2.0958939969603486e+35,-2.0947979532749823e+35,-2.0936709625492802e+35,-2.092515304866658e+35,-2.091330504928095e+35,-2.090108305468661e+35,-2.0888367948624582e+35,-2.0875050526768547e+35,-2.08610507171583e+35,-2.0846325820531738e+35,-2.0830879344969893e+35,-2.0814771562654475e+35,-2.079812452384192e+35,-2.0781110486571937e+35,-2.0763927516457203e+35,-2.0746791003289897e+35,-2.0729946274696158e+35,-2.071364504618706e+35,-2.0698070803284658e+35,-2.068330628891081e+35,-2.066936086159928e+35,-2.065620114991737e+35,-2.0643767570192213e+35,-2.0631983746614144e+35,-2.0620764377087505e+35,-2.0610023364808827e+35,-2.059968106220528e+35,-2.058966634284217e+35,-2.0579910823276954e+35,-2.0570343415774584e+35,-2.0560900705248773e+35,-2.0551548523816604e+35,-2.054227588673868e+35,-2.0533054326818632e+35,-2.0523818680932245e+35,-2.0514482391047174e+35,-2.0504953851006864e+35,-2.049514259400073e+35,-2.0484960915421048e+35,-2.0474325256005697e+35,-2.0463159230604527e+35,-2.0451398597354464e+35,-2.0438997356355936e+35,-2.042593270928794e+35,-2.0412207543577397e+35,-2.0397854377194433e+35,-2.0382947130058183e+35,-2.0367616451446943e+35,-2.0352046492843852e+35,-2.033644175905921e+35,-2.0320993587850672e+35,-2.030586858006148e+35,-2.0291205478031787e+35,-2.0277109569409276e+35,-2.0263648093581127e+35,-2.0250850478844975e+35,-2.0238713099368702e+35,-2.022720679748487e+35,-2.0216285636457157e+35,-2.020589457578309e+35,-2.019597454579759e+35,-2.0186463837888724e+35,-2.017729653478601e+35,-2.0168409824357485e+35,-2.015974868821269e+35,-2.015110877360643e+35,-2.0141784864919118e+35,-2.0133579992629752e+35,-2.0125441271207412e+35,-2.0117296182797626e+35,-2.0109078083687928e+35,-2.0100719792744986e+35,-2.0092153635989545e+35,-2.008331130286397e+35,-2.0074124725857534e+35,-2.006452779977163e+35,-2.005445895990238e+35,-2.0043864768794334e+35,-2.0032703999629764e+35,-2.0020951722964993e+35,-2.00086036230146e+35,-1.9995681869874166e+35,-1.998224359703718e+35,-1.9968388991981022e+35,-1.9954260733850212e+35,-1.9940028443357654e+35,-1.9925865725642165e+35,-1.991193322267272e+35,-1.9898369774116713e+35,-1.98852866619911e+35,-1.9872762913993917e+35,-1.9860843136870588e+35,-1.9849539422117093e+35,-1.9838836780479153e+35,-1.982870020680615e+35,-1.9819081646268143e+35,-1.9809925997936984e+35,-1.9801175545391305e+35,-1.9792772466263055e+35,-1.9784659514845503e+35,-1.977677980187244e+35,-1.976907734139559e+35,-1.9761499769424546e+35,-1.975400240233653e+35,-1.9746549266628814e+35,-1.9739107264247628e+35,-1.9731637431275076e+35,-1.9724091286226988e+35,-1.971641347394503e+35,-1.9708546067207286e+35,-1.9700431181477664e+35,-1.969201159414304e+35,-1.9683230786356536e+35,-1.9674034020541133e+35,-1.9664371054080398e+35,-1.9654200236717514e+35,-1.964349359547806e+35,-1.9632242484282464e+35,-1.9620462817757777e+35,-1.960819871485935e+35,-1.9595523879844423e+35,-1.9582539993570662e+35,-1.9569372103808125e+35,-1.9556161796477564e+35,-1.9543058936370714e+35,-1.953021136313741e+35,-1.9517751277746657e+35,-1.9505781043919975e+35,-1.9494365171151968e+35,-1.948353155240493e+35,-1.947327857887668e+35,-1.946358316698519e+35]}},"id":"6861e5df-dd35-452e-989d-9f73769f3c17","type":"ColumnDataSource"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"33d6bed2-42fa-47bb-9c75-9945a127f7c3","type":"Line"},{"attributes":{"plot":{"id":"3d2b2804-4758-4f57-8452-a8a978f6f3a9","subtype":"Figure","type":"Plot"}},"id":"a95b3f4e-0797-41ce-963c-c5d65b014d62","type":"HelpTool"},{"attributes":{"overlay":{"id":"4df09cbc-30d1-43ad-9098-577abb1e448d","type":"BoxAnnotation"},"plot":{"id":"3d2b2804-4758-4f57-8452-a8a978f6f3a9","subtype":"Figure","type":"Plot"}},"id":"a85c9416-267c-449d-83b6-53a10e1e57b9","type":"BoxZoomTool"},{"attributes":{"plot":{"id":"3d2b2804-4758-4f57-8452-a8a978f6f3a9","subtype":"Figure","type":"Plot"},"ticker":{"id":"ae770e08-e83c-4ac6-aae6-51dba54094af","type":"BasicTicker"}},"id":"28441e92-f646-440f-8d24-48ac34428ce1","type":"Grid"},{"attributes":{"formatter":{"id":"ce6a876c-7f3f-41a9-8a89-45744a5e0c4f","type":"BasicTickFormatter"},"plot":{"id":"3d2b2804-4758-4f57-8452-a8a978f6f3a9","subtype":"Figure","type":"Plot"},"ticker":{"id":"3dfad28d-045a-46ff-98c8-6dc0423476c9","type":"BasicTicker"}},"id":"bc8d9f62-2325-40c5-89b3-db4cec61b023","type":"LinearAxis"},{"attributes":{"data_source":{"id":"c41c1cec-b9dd-42f0-a5d3-69ab425ccdc0","type":"ColumnDataSource"},"glyph":{"id":"d145c9a9-12a2-4962-9580-84887a9617ac","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"607869a3-55fe-4a2b-9c2c-76f4dd5368d4","type":"Line"},"selection_glyph":null},"id":"8526cdc2-b5df-4663-8b39-966452977fa8","type":"GlyphRenderer"},{"attributes":{"callback":null},"id":"4a9a538c-8cc4-443f-b44a-7fdf83d18806","type":"DataRange1d"},{"attributes":{"plot":{"id":"3d2b2804-4758-4f57-8452-a8a978f6f3a9","subtype":"Figure","type":"Plot"}},"id":"c3455978-8932-414d-9132-1686d3fbdd70","type":"WheelZoomTool"},{"attributes":{"plot":{"id":"3d2b2804-4758-4f57-8452-a8a978f6f3a9","subtype":"Figure","type":"Plot"}},"id":"60cd5ddb-4f71-4ff0-a744-f6bbb7463804","type":"SaveTool"},{"attributes":{"data_source":{"id":"6861e5df-dd35-452e-989d-9f73769f3c17","type":"ColumnDataSource"},"glyph":{"id":"7b36ed2d-0985-47c8-86d9-a6035965b173","type":"Line"},"hover_glyph":null,"nonselection_glyph":{"id":"33d6bed2-42fa-47bb-9c75-9945a127f7c3","type":"Line"},"selection_glyph":null},"id":"b7805d0d-ad7c-4191-a137-c2b6b3390a36","type":"GlyphRenderer"},{"attributes":{"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"line_width":{"value":2},"x":{"field":"x"},"y":{"field":"y"}},"id":"607869a3-55fe-4a2b-9c2c-76f4dd5368d4","type":"Line"}],"root_ids":["3d2b2804-4758-4f57-8452-a8a978f6f3a9"]},"title":"Bokeh Application","version":"0.12.2"}};
                  var render_items = [{"docid":"26e815f8-2beb-475c-8a44-a7381505e5b5","elementid":"cab4a16f-d6df-4e0f-b217-22423a26042c","modelid":"3d2b2804-4758-4f57-8452-a8a978f6f3a9"}];

                  Bokeh.embed.embed_items(docs_json, render_items);
              });
          });
        },
        function(Bokeh) {
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-0.12.2.min.css");
          console.log("Bokeh: injecting CSS: https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
          Bokeh.embed.inject_css("https://cdn.pydata.org/bokeh/release/bokeh-widgets-0.12.2.min.css");
        }
      ];

      function run_inline_js() {

        for (var i = 0; i < inline_js.length; i++) {
          inline_js[i](window.Bokeh);
        }

      }

      if (window._bokeh_is_loading === 0) {
        console.log("Bokeh: BokehJS loaded, going straight to plotting");
        run_inline_js();
      } else {
        load_libs(js_urls, function() {
          console.log("Bokeh: BokehJS plotting callback run at", now());
          run_inline_js();
        });
      }
    }(this));
});