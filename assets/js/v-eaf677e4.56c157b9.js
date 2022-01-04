"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[571],{185:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-eaf677e4",path:"/other/eslintConfig.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"接下来需要初始化esLint： eslint --init",slug:"接下来需要初始化eslint-eslint-init",children:[]},{level:2,title:"接下来就是配置eslint",slug:"接下来就是配置eslint",children:[]},{level:2,title:"在你的项目根目录下面会有一个.eslintrc.js文件，里面内容为",slug:"在你的项目根目录下面会有一个-eslintrc-js文件-里面内容为",children:[]},{level:2,title:"然后还要在package.json文件里面配置",slug:"然后还要在package-json文件里面配置",children:[]},{level:2,title:"然后就可以在控制台输入",slug:"然后就可以在控制台输入",children:[]}],filePathRelative:"other/eslintConfig.md",git:{updatedTime:1641261966e3,contributors:[{name:"tomato",email:"h20333@qq.com",commits:1}]}}},8836:(s,n,a)=>{a.r(n),a.d(n,{default:()=>o});const e=(0,a(6252).uE)('<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>## 下载安装Eslint\n\n```javascript\n全局安装： npm install -g eslint\n项目安装： npm install eslint --save-dev\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><blockquote><p>注意： 1.如果你想你所有项目都使用eslint，请全局安装；如果你想当前项目使用，请局部安装。 2.局部安装时请使用–save-dev，因为eslint是适用于开发环境（Software Development Environment，SDE）的插件，qing请不要添加到生产环境中。</p></blockquote><h2 id="接下来需要初始化eslint-eslint-init" tabindex="-1"><a class="header-anchor" href="#接下来需要初始化eslint-eslint-init" aria-hidden="true">#</a> 接下来需要初始化esLint： eslint --init</h2><p>上面的这个命令我使用没有效果，我用的这个 <code>./node_modules/.bin/eslint --init</code></p><h2 id="接下来就是配置eslint" tabindex="-1"><a class="header-anchor" href="#接下来就是配置eslint" aria-hidden="true">#</a> 接下来就是配置eslint</h2><p><img src="https://img-blog.csdnimg.cn/20201127164845818.png?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3dlaXhpbl80NTY0NDMzNQ==,size_16,color_FFFFFF,t_70#pic_center" alt="在这里插入图片描述"><strong>你想怎样使用eslint</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token constant">PS</span> <span class="token constant">F</span><span class="token operator">:</span>\\resource<span class="token operator">&gt;</span>  <span class="token punctuation">.</span><span class="token operator">/</span>node_modules<span class="token operator">/</span><span class="token punctuation">.</span>bin<span class="token operator">/</span>eslint <span class="token operator">--</span>init\n<span class="token operator">?</span> How would you like to use ESLint<span class="token operator">?</span> <span class="token punctuation">(</span>Use arrow keys<span class="token punctuation">)</span>\n  To check syntax only <span class="token comment">//只检查语法</span>\n<span class="token operator">&gt;</span> To check syntax and find problems<span class="token comment">//检查语法、发现问题</span>\n  To check syntax<span class="token punctuation">,</span> find problems<span class="token punctuation">,</span> and enforce code style<span class="token comment">//检查语法、发现问题并执行代码样式</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>您的项目使用什么类型的模块? vue中用的JavaScript modules</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token constant">PS</span> <span class="token constant">F</span><span class="token operator">:</span>\\resource<span class="token operator">&gt;</span>  <span class="token punctuation">.</span><span class="token operator">/</span>node_modules<span class="token operator">/</span><span class="token punctuation">.</span>bin<span class="token operator">/</span>eslint <span class="token operator">--</span>init\n<span class="token operator">?</span> How would you like to use ESLint<span class="token operator">?</span> To check syntax<span class="token punctuation">,</span> find problems<span class="token punctuation">,</span> and enforce code style\n<span class="token operator">?</span> What type <span class="token keyword">of</span> modules does your project use<span class="token operator">?</span> <span class="token punctuation">(</span>Use arrow keys<span class="token punctuation">)</span>\n<span class="token operator">&gt;</span> JavaScript <span class="token function">modules</span> <span class="token punctuation">(</span><span class="token keyword">import</span><span class="token operator">/</span><span class="token keyword">export</span><span class="token punctuation">)</span>\n  <span class="token function">CommonJS</span> <span class="token punctuation">(</span>require<span class="token operator">/</span>exports<span class="token punctuation">)</span>\n  None <span class="token keyword">of</span> these\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>项目中使用的什么框架？ 我用的vue</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token constant">PS</span> <span class="token constant">F</span><span class="token operator">:</span>\\resource<span class="token operator">&gt;</span>  <span class="token punctuation">.</span><span class="token operator">/</span>node_modules<span class="token operator">/</span><span class="token punctuation">.</span>bin<span class="token operator">/</span>eslint <span class="token operator">--</span>init\n<span class="token operator">?</span> How would you like to use ESLint<span class="token operator">?</span> To check syntax<span class="token punctuation">,</span> find problems<span class="token punctuation">,</span> and enforce code style\n<span class="token operator">?</span> What type <span class="token keyword">of</span> modules does your project use<span class="token operator">?</span> JavaScript <span class="token function">modules</span> <span class="token punctuation">(</span><span class="token keyword">import</span><span class="token operator">/</span><span class="token keyword">export</span><span class="token punctuation">)</span>\n<span class="token operator">?</span> Which framework does your project use<span class="token operator">?</span> <span class="token punctuation">(</span>Use arrow keys<span class="token punctuation">)</span>\n<span class="token operator">&gt;</span> React\n  Vue<span class="token punctuation">.</span>js\n  None <span class="token keyword">of</span> these\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>你的代码运行在什么地方？ 这里是多选，我选的浏览器和node</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token constant">PS</span> <span class="token constant">F</span><span class="token operator">:</span>\\resource<span class="token operator">&gt;</span>  <span class="token punctuation">.</span><span class="token operator">/</span>node_modules<span class="token operator">/</span><span class="token punctuation">.</span>bin<span class="token operator">/</span>eslint <span class="token operator">--</span>init\n<span class="token operator">?</span> How would you like to use ESLint<span class="token operator">?</span> To check syntax<span class="token punctuation">,</span> find problems<span class="token punctuation">,</span> and enforce code style\n<span class="token operator">?</span> What type <span class="token keyword">of</span> modules does your project use<span class="token operator">?</span> JavaScript <span class="token function">modules</span> <span class="token punctuation">(</span><span class="token keyword">import</span><span class="token operator">/</span><span class="token keyword">export</span><span class="token punctuation">)</span>\n<span class="token operator">?</span> Which framework does your project use<span class="token operator">?</span> Vue<span class="token punctuation">.</span>js\n<span class="token operator">?</span> Where does your code run<span class="token operator">?</span> <span class="token punctuation">(</span>Press <span class="token operator">&lt;</span>space<span class="token operator">&gt;</span> to select<span class="token punctuation">,</span> <span class="token operator">&lt;</span>a<span class="token operator">&gt;</span> to toggle all<span class="token punctuation">,</span> <span class="token operator">&lt;</span>i<span class="token operator">&gt;</span> to invert selection<span class="token punctuation">)</span>\n<span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token operator">*</span><span class="token punctuation">)</span> <span class="token function">Browser</span>\n <span class="token punctuation">(</span> <span class="token punctuation">)</span> Node\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>您想如何为您的项目定义一个样式? 我选的第二个，问问题</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token constant">PS</span> <span class="token constant">F</span><span class="token operator">:</span>\\resource<span class="token operator">&gt;</span>  <span class="token punctuation">.</span><span class="token operator">/</span>node_modules<span class="token operator">/</span><span class="token punctuation">.</span>bin<span class="token operator">/</span>eslint <span class="token operator">--</span>init\n<span class="token operator">?</span> How would you like to use ESLint<span class="token operator">?</span> To check syntax<span class="token punctuation">,</span> find problems<span class="token punctuation">,</span> and enforce code style\n<span class="token operator">?</span> What type <span class="token keyword">of</span> modules does your project use<span class="token operator">?</span> JavaScript <span class="token function">modules</span> <span class="token punctuation">(</span><span class="token keyword">import</span><span class="token operator">/</span><span class="token keyword">export</span><span class="token punctuation">)</span>\n<span class="token operator">?</span> Which framework does your project use<span class="token operator">?</span> Vue<span class="token punctuation">.</span>js\n<span class="token operator">?</span> Where does your code run<span class="token operator">?</span> Browser<span class="token punctuation">,</span> Node\n<span class="token operator">?</span> How would you like to define a style <span class="token keyword">for</span> your project<span class="token operator">?</span> <span class="token punctuation">(</span>Use arrow keys<span class="token punctuation">)</span>\n<span class="token operator">&gt;</span> Use a popular style guide   <span class="token comment">// 1. 使用大厂的</span>\n  Answer questions about your style  <span class="token comment">//2. 问问题</span>\n  Inspect your JavaScript <span class="token function">file</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>  <span class="token comment">//3. 检查现有的代码自动生成</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>您希望配置文件的格式是什么? 我选JavaScript</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token constant">PS</span> <span class="token constant">F</span><span class="token operator">:</span>\\resource<span class="token operator">&gt;</span>  <span class="token punctuation">.</span><span class="token operator">/</span>node_modules<span class="token operator">/</span><span class="token punctuation">.</span>bin<span class="token operator">/</span>eslint <span class="token operator">--</span>init\n<span class="token operator">?</span> How would you like to use ESLint<span class="token operator">?</span> To check syntax<span class="token punctuation">,</span> find problems<span class="token punctuation">,</span> and enforce code style\n<span class="token operator">?</span> What type <span class="token keyword">of</span> modules does your project use<span class="token operator">?</span> JavaScript <span class="token function">modules</span> <span class="token punctuation">(</span><span class="token keyword">import</span><span class="token operator">/</span><span class="token keyword">export</span><span class="token punctuation">)</span>\n<span class="token operator">?</span> Which framework does your project use<span class="token operator">?</span> Vue<span class="token punctuation">.</span>js\n<span class="token operator">?</span> Where does your code run<span class="token operator">?</span> Browser<span class="token punctuation">,</span> Node\n<span class="token operator">?</span> How would you like to define a style <span class="token keyword">for</span> your project<span class="token operator">?</span> Answer questions about your style\n<span class="token operator">?</span> What format <span class="token keyword">do</span> you want your config file to be <span class="token keyword">in</span><span class="token operator">?</span>\n<span class="token operator">&gt;</span> JavaScript\n  <span class="token constant">YAML</span>\n  <span class="token constant">JSON</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>你用什么来进行缩进 我比较爱用tabs</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token constant">PS</span> <span class="token constant">F</span><span class="token operator">:</span>\\resource<span class="token operator">&gt;</span>  <span class="token punctuation">.</span><span class="token operator">/</span>node_modules<span class="token operator">/</span><span class="token punctuation">.</span>bin<span class="token operator">/</span>eslint <span class="token operator">--</span>init\n<span class="token operator">?</span> How would you like to use ESLint<span class="token operator">?</span> To check syntax<span class="token punctuation">,</span> find problems<span class="token punctuation">,</span> and enforce code style\n<span class="token operator">?</span> What type <span class="token keyword">of</span> modules does your project use<span class="token operator">?</span> JavaScript <span class="token function">modules</span> <span class="token punctuation">(</span><span class="token keyword">import</span><span class="token operator">/</span><span class="token keyword">export</span><span class="token punctuation">)</span>\n<span class="token operator">?</span> Which framework does your project use<span class="token operator">?</span> Vue<span class="token punctuation">.</span>js\n<span class="token operator">?</span> Where does your code run<span class="token operator">?</span> Browser<span class="token punctuation">,</span> Node\n<span class="token operator">?</span> How would you like to define a style <span class="token keyword">for</span> your project<span class="token operator">?</span> Answer questions about your style\n<span class="token operator">?</span> What format <span class="token keyword">do</span> you want your config file to be <span class="token keyword">in</span><span class="token operator">?</span> JavaScript\n<span class="token operator">?</span> What style <span class="token keyword">of</span> indentation <span class="token keyword">do</span> you use<span class="token operator">?</span> <span class="token punctuation">(</span>Use arrow keys<span class="token punctuation">)</span>\n<span class="token operator">&gt;</span> Tabs\n  Spaces\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>字符串用什么引号？单引号还是双引号</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token operator">?</span> How would you like to use ESLint<span class="token operator">?</span> To check syntax<span class="token punctuation">,</span> find problems<span class="token punctuation">,</span> and enforce code style\n<span class="token operator">?</span> What type <span class="token keyword">of</span> modules does your project use<span class="token operator">?</span> JavaScript <span class="token function">modules</span> <span class="token punctuation">(</span><span class="token keyword">import</span><span class="token operator">/</span><span class="token keyword">export</span><span class="token punctuation">)</span>\n<span class="token operator">?</span> Which framework does your project use<span class="token operator">?</span> Vue<span class="token punctuation">.</span>js\n<span class="token operator">?</span> Where does your code run<span class="token operator">?</span> Browser<span class="token punctuation">,</span> Node\n<span class="token operator">?</span> How would you like to define a style <span class="token keyword">for</span> your project<span class="token operator">?</span> Answer questions about your style\n<span class="token operator">?</span> What format <span class="token keyword">do</span> you want your config file to be <span class="token keyword">in</span><span class="token operator">?</span> JavaScript\n<span class="token operator">?</span> What style <span class="token keyword">of</span> indentation <span class="token keyword">do</span> you use<span class="token operator">?</span> Tabs\n<span class="token operator">?</span> What quotes <span class="token keyword">do</span> you use <span class="token keyword">for</span> strings<span class="token operator">?</span> <span class="token punctuation">(</span>Use arrow keys<span class="token punctuation">)</span>\n<span class="token operator">&gt;</span> Double\n  Single\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>你用什么行尾? 我用的window</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token constant">PS</span> <span class="token constant">F</span><span class="token operator">:</span>\\resource<span class="token operator">&gt;</span>  <span class="token punctuation">.</span><span class="token operator">/</span>node_modules<span class="token operator">/</span><span class="token punctuation">.</span>bin<span class="token operator">/</span>eslint <span class="token operator">--</span>init\n<span class="token operator">?</span> How would you like to use ESLint<span class="token operator">?</span> To check syntax<span class="token punctuation">,</span> find problems<span class="token punctuation">,</span> and enforce code style\n<span class="token operator">?</span> What type <span class="token keyword">of</span> modules does your project use<span class="token operator">?</span> JavaScript <span class="token function">modules</span> <span class="token punctuation">(</span><span class="token keyword">import</span><span class="token operator">/</span><span class="token keyword">export</span><span class="token punctuation">)</span>\n<span class="token operator">?</span> Which framework does your project use<span class="token operator">?</span> Vue<span class="token punctuation">.</span>js\n<span class="token operator">?</span> Where does your code run<span class="token operator">?</span> Browser<span class="token punctuation">,</span> Node\n<span class="token operator">?</span> How would you like to define a style <span class="token keyword">for</span> your project<span class="token operator">?</span> Answer questions about your style\n<span class="token operator">?</span> What format <span class="token keyword">do</span> you want your config file to be <span class="token keyword">in</span><span class="token operator">?</span> JavaScript\n<span class="token operator">?</span> What style <span class="token keyword">of</span> indentation <span class="token keyword">do</span> you use<span class="token operator">?</span> Tabs\n<span class="token operator">?</span> What quotes <span class="token keyword">do</span> you use <span class="token keyword">for</span> strings<span class="token operator">?</span> Single\n<span class="token operator">?</span> What line endings <span class="token keyword">do</span> you use<span class="token operator">?</span> <span class="token punctuation">(</span>Use arrow keys<span class="token punctuation">)</span>\n<span class="token operator">&gt;</span> Unix\n  Windows\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p>你需要分号吗?</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token constant">PS</span> <span class="token constant">F</span><span class="token operator">:</span>\\resource<span class="token operator">&gt;</span>  <span class="token punctuation">.</span><span class="token operator">/</span>node_modules<span class="token operator">/</span><span class="token punctuation">.</span>bin<span class="token operator">/</span>eslint <span class="token operator">--</span>init\n<span class="token operator">?</span> How would you like to use ESLint<span class="token operator">?</span> To check syntax<span class="token punctuation">,</span> find problems<span class="token punctuation">,</span> and enforce code style\n<span class="token operator">?</span> What type <span class="token keyword">of</span> modules does your project use<span class="token operator">?</span> JavaScript <span class="token function">modules</span> <span class="token punctuation">(</span><span class="token keyword">import</span><span class="token operator">/</span><span class="token keyword">export</span><span class="token punctuation">)</span>\n<span class="token operator">?</span> Which framework does your project use<span class="token operator">?</span> Vue<span class="token punctuation">.</span>js\n<span class="token operator">?</span> Where does your code run<span class="token operator">?</span> Browser<span class="token punctuation">,</span> Node\n<span class="token operator">?</span> How would you like to define a style <span class="token keyword">for</span> your project<span class="token operator">?</span> Answer questions about your style\n<span class="token operator">?</span> What format <span class="token keyword">do</span> you want your config file to be <span class="token keyword">in</span><span class="token operator">?</span> JavaScript\n<span class="token operator">?</span> What style <span class="token keyword">of</span> indentation <span class="token keyword">do</span> you use<span class="token operator">?</span> Tabs\n<span class="token operator">?</span> What quotes <span class="token keyword">do</span> you use <span class="token keyword">for</span> strings<span class="token operator">?</span> Single\n<span class="token operator">?</span> What line endings <span class="token keyword">do</span> you use<span class="token operator">?</span> Windows\n<span class="token operator">?</span> Do you require semicolons<span class="token operator">?</span> <span class="token punctuation">(</span><span class="token constant">Y</span><span class="token operator">/</span>n<span class="token punctuation">)</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>您希望配置文件的格式是什么?</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token constant">PS</span> <span class="token constant">F</span><span class="token operator">:</span>\\resource<span class="token operator">&gt;</span>  <span class="token punctuation">.</span><span class="token operator">/</span>node_modules<span class="token operator">/</span><span class="token punctuation">.</span>bin<span class="token operator">/</span>eslint <span class="token operator">--</span>init\n<span class="token operator">?</span> How would you like to use ESLint<span class="token operator">?</span> To check syntax<span class="token punctuation">,</span> find problems<span class="token punctuation">,</span> and enforce code style\n<span class="token operator">?</span> What type <span class="token keyword">of</span> modules does your project use<span class="token operator">?</span> JavaScript <span class="token function">modules</span> <span class="token punctuation">(</span><span class="token keyword">import</span><span class="token operator">/</span><span class="token keyword">export</span><span class="token punctuation">)</span>\n<span class="token operator">?</span> Which framework does your project use<span class="token operator">?</span> Vue<span class="token punctuation">.</span>js\n<span class="token operator">?</span> Where does your code run<span class="token operator">?</span> Browser<span class="token punctuation">,</span> Node\n<span class="token operator">?</span> How would you like to define a style <span class="token keyword">for</span> your project<span class="token operator">?</span> Answer questions about your style\n<span class="token operator">?</span> What format <span class="token keyword">do</span> you want your config file to be <span class="token keyword">in</span><span class="token operator">?</span> JavaScript\n<span class="token operator">?</span> What style <span class="token keyword">of</span> indentation <span class="token keyword">do</span> you use<span class="token operator">?</span> Tabs\n<span class="token operator">?</span> What quotes <span class="token keyword">do</span> you use <span class="token keyword">for</span> strings<span class="token operator">?</span> Single\n<span class="token operator">?</span> What line endings <span class="token keyword">do</span> you use<span class="token operator">?</span> Windows\n<span class="token operator">?</span> Do you require semicolons<span class="token operator">?</span> Yes\n<span class="token operator">?</span> What format <span class="token keyword">do</span> you want your config file to be <span class="token keyword">in</span><span class="token operator">?</span> <span class="token punctuation">(</span>Use arrow keys<span class="token punctuation">)</span>\n<span class="token operator">&gt;</span> JavaScript\n  <span class="token constant">YAML</span>\n  <span class="token constant">JSON</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div><p>后面根据实际情况回答就好了，即使不小心答错也没关系，都在配置文件里随时可以修改。</p><h2 id="在你的项目根目录下面会有一个-eslintrc-js文件-里面内容为" tabindex="-1"><a class="header-anchor" href="#在你的项目根目录下面会有一个-eslintrc-js文件-里面内容为" aria-hidden="true">#</a> 在你的项目根目录下面会有一个.eslintrc.js文件，里面内容为</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token string">&quot;env&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>               <span class="token comment">//Environments，指定代码的运行环境。不同的运行环境，全局变量不一样，指明运行环境这样ESLint就能识别特定的全局变量。同时也会开启对应环境的语法支持，例如：es6。</span>\n        <span class="token string">&quot;browser&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n        <span class="token string">&quot;es2021&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>  <span class="token comment">//ESLint 不需要自行定义大量的规则，因为很多规则已被分组作为一个规则配置。</span>\n        <span class="token string">&quot;eslint:recommended&quot;</span><span class="token punctuation">,</span>  <span class="token comment">//就是 ESLint 的推荐规则配置，包含了ESLint的规则 里前面有✔︎的部分，recommended 规则只在ESLint升级大版本的才有可能改变。</span>\n        <span class="token string">&quot;plugin:vue/essential&quot;</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;parserOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token string">&quot;ecmaVersion&quot;</span><span class="token operator">:</span> <span class="token number">12</span><span class="token punctuation">,</span>\n        <span class="token string">&quot;sourceType&quot;</span><span class="token operator">:</span> <span class="token string">&quot;module&quot;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;plugins&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>    <span class="token comment">//顾名思义就是插件  plugins一般包含一个或多个规则配置，可以在extends中引入。</span>\n        <span class="token string">&quot;vue&quot;</span>\n    <span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;rules&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>   <span class="token comment">//这里可以对规则进行细致的定义了，覆盖之前前面说的extends中定义的规则。</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><p>错误等级有三级 0，1，2，分别代表off，warning，error。error错误会终止 lint-staged 执行。</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token number">0</span>或’off’：关闭规则。\n<span class="token number">1</span>或’warn’：打开规则，并且作为一个警告（并不会导致检查不通过）。\n<span class="token number">2</span><span class="token function">或’error’：打开规则，并且作为一个错误</span> <span class="token punctuation">(</span>退出码为<span class="token number">1</span>，检查不通过<span class="token punctuation">)</span>。\n\n\n参数说明：\n参数<span class="token number">1</span> ： 错误等级\n参数<span class="token number">2</span> ： 处理方式\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="然后还要在package-json文件里面配置" tabindex="-1"><a class="header-anchor" href="#然后还要在package-json文件里面配置" aria-hidden="true">#</a> 然后还要在package.json文件里面配置</h2><p><img src="https://img-blog.csdnimg.cn/20201127171424728.png#pic_center" alt="在这里插入图片描述"></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token string">&quot;lint&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eslint --ext .js,.vue src&quot;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="然后就可以在控制台输入" tabindex="-1"><a class="header-anchor" href="#然后就可以在控制台输入" aria-hidden="true">#</a> 然后就可以在控制台输入</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>npm run lint检查\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>然后就能检查代码的规范性了 不过很多报错并不知道为啥错，但是可以成功运行。。。。</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>我是eslint的界面\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>',39),p={},o=(0,a(3744).Z)(p,[["render",function(s,n){return e}]])},3744:(s,n)=>{n.Z=(s,n)=>{const a=s.__vccOpts||s;for(const[s,e]of n)a[s]=e;return a}}}]);