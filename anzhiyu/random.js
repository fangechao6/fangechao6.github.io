var posts=["posts/0.html","posts/2f9c8e6b.html","posts/a9704e29.html","posts/4f3227e6.html","posts/5c36621f.html","posts/67914616.html","posts/9236725a.html","posts/f2de103c.html","posts/bf83ba3c.html","posts/dd6a6641.html","posts/e31246ea.html","posts/b422b938.html","posts/b78651e0.html","posts/d4e669f.html","posts/1148aeae.html","posts/405bf84.html","posts/5cb25666.html","posts/88748b59.html","posts/b340e08.html","posts/33225426.html","posts/b39a6957.html","posts/b510980d.html","posts/a231bb16.html","posts/42e61835.html","posts/b1c89471.html","posts/f3cd2de6.html"];function toRandomPost(){pjax.loadUrl("/"+posts[Math.floor(Math.random()*posts.length)])}