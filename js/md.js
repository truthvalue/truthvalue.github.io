let app = {}; 
let init = function(app) {
    app.cache = {};
    app.data = {
        content: 'loading...',
        sidebar: 'loading...'
    };
    app.vue = new Vue({el:'#target', data:app.data});
    app.init = function() {
        var page = window.location.hash.substr(1) || 'index';
        if(app.cache.sidebar) {
            app.vue.sidebar = app.cache.sidebar;
        } else {
            axios.get('md/sidebar.md').then(function(res) {
                    app.vue.sidebar = app.cache.sidebar = marked(res.data);
                });     
        }
        if(app.cache[page]) {
            app.vue.content = app.cache[page];
        } else {
            axios.get('md/'+page+'.md').then(function(res) {
                    app.vue.content = app.cache[page] = marked(res.data);
                });        
        }
        window.onhashchange = app.init;
        Vue.nextTick(function() {
                MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
            });
    };
    MathJax.Hub.Config({tex2jax: {inlineMath: [['$$','$$'], ['\\(','\\)']]}});
    app.init();
};    

init(app);
