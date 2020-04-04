(this.webpackJsonpreactwarriors=this.webpackJsonpreactwarriors||[]).push([[0],{15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(6),l=a.n(i),o=a(8),r=a(1),s=a(2),m=a(3),u=a(4),v=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).state={willWatch:!1},n}return Object(s.a)(a,[{key:"render",value:function(){var e=this,t=this.props,a=t.movie,n=t.removeMovie,i=t.addMovieToWillWatch,l=t.removeMovieFromWillWatch;return c.a.createElement("div",{className:"card"},c.a.createElement("img",{className:"card-img-top",src:"https://image.tmdb.org/t/p/w500".concat(a.backdrop_path||a.poster_path),alt:""}),c.a.createElement("div",{className:"card-body"},c.a.createElement("h6",{className:"card-title"},a.title),c.a.createElement("div",{className:"d-flex justify-content-between align-items-center"},c.a.createElement("p",{className:"mb-0"},"Rating: ",a.vote_average),c.a.createElement("button",{type:"button",className:this.state.willWatch?"btn btn-success":"btn btn-secondary",onClick:function(){e.setState({willWatch:!e.state.willWatch}),e.state.willWatch?l(a):i(a)}},this.state.willWatch?"Remove Will Watch":"Add Will Watch")),c.a.createElement("button",{onClick:n.bind(null,a)},"Delete movie")))}}]),a}(n.Component),d=a(7),h=a.n(d),p=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"shouldComponentUpdate",value:function(e,t,a){return e.sort_by!==this.props.sort_by}},{key:"render",value:function(){var e=this.props,t=e.sort_by,a=e.updateSortBy,n=function(e){return function(){a(e)}},i=function(e){return h()("btn nav-link",{active:t===e})};return c.a.createElement("ul",{className:"tabs nav nav-pills"},c.a.createElement("li",{className:"nav-item"},c.a.createElement("div",{className:i("popularity.desc"),onClick:n("popularity.desc")},"Popularity desc")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("div",{className:i("revenue.desc"),onClick:n("revenue.desc")},"Revenue desc")),c.a.createElement("li",{className:"nav-item"},c.a.createElement("div",{className:i("vote_count.desc"),onClick:n("vote_count.desc")},"Vote count desc")))}}]),a}(n.Component),b=function(e){var t=e.changePage,a=function(e){return function(){t(e)}};return c.a.createElement(c.a.Fragment,null,c.a.createElement("button",{onClick:a(-1),className:"m-3"},"Prev"),c.a.createElement("button",{onClick:a(1),className:"m-3"},"Next"))},W=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){var e=this.props.moviesWillWatch;return c.a.createElement(c.a.Fragment,null,c.a.createElement("h4",null,"Will Watch: ",e.length),c.a.createElement("ul",{className:"list-group"},e.map((function(e){return c.a.createElement("li",{key:e.id,className:"list-group-item"},c.a.createElement("div",{className:"d-flex justify-content-between"},c.a.createElement("p",null,e.title),c.a.createElement("p",null,e.vote_average)))}))))}}]),a}(n.Component),f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).getMovies=function(){fetch("".concat("https://api.themoviedb.org/3","/discover/movie?api_key=").concat("3f4ca4f3a9750da53450646ced312397","&sort_by=").concat(n.state.sort_by,"&page=").concat(n.state.page)).then((function(e){return e.json()})).then((function(e){n.setState({movies:e.results})}))},n.removeMovie=function(e){var t=n.state.movies.filter((function(t){return t.id!==e.id}));n.setState({movies:t}),n.removeMovieFromWillWatch(e)},n.addMovieToWillWatch=function(e){var t=[].concat(Object(o.a)(n.state.moviesWillWatch),[e]);n.setState({moviesWillWatch:t})},n.removeMovieFromWillWatch=function(e){var t=n.state.moviesWillWatch.filter((function(t){return t.id!==e.id}));n.setState({moviesWillWatch:t})},n.updateSortBy=function(e){n.setState({sort_by:e})},n.changePage=function(e){var t,a=n.state.page;t=1===a&&-1===e?500:500===a&&1===e?1:a+e,n.setState({page:t})},n.state={movies:[],moviesWillWatch:[],sort_by:"popularity.desc",page:1},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"componentDidUpdate",value:function(e,t,a){t.sort_by!==this.state.sort_by&&this.getMovies(),t.page!==this.state.page&&(this.getMovies(),console.log(this.state.page))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-9"},c.a.createElement("div",{className:"row mb-4"},c.a.createElement("div",{className:"col-12"},c.a.createElement(p,{sort_by:this.state.sort_by,updateSortBy:this.updateSortBy}))),c.a.createElement("div",{className:"row"},this.state.movies.map((function(t){return c.a.createElement("div",{className:"col-6 mb-4",key:t.id},c.a.createElement(v,{movie:t,removeMovie:e.removeMovie,addMovieToWillWatch:e.addMovieToWillWatch,removeMovieFromWillWatch:e.removeMovieFromWillWatch}))}))),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"m-auto"},c.a.createElement(b,{changePage:this.changePage})))),c.a.createElement("div",{className:"col-3"},c.a.createElement(W,{moviesWillWatch:this.state.moviesWillWatch}))))}}]),a}(n.Component);a(14);l.a.render(c.a.createElement(f,null),document.getElementById("root"))},9:function(e,t,a){e.exports=a(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.504ea013.chunk.js.map