"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[242],{3145:(s,n,a)=>{a.r(n),a.d(n,{data:()=>e});const e={key:"v-407edb4c",path:"/other/gitUse.html",title:"",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"Git 的工作流程",slug:"git-的工作流程",children:[]},{level:2,title:"创建本地版本库",slug:"创建本地版本库",children:[]},{level:2,title:"git和GitHub的关联",slug:"git和github的关联",children:[]},{level:2,title:"（1）GitHub",slug:"_1-github",children:[]},{level:2,title:"(2)git常用命令",slug:"_2-git常用命令",children:[]},{level:2,title:"(3)git的分支管理",slug:"_3-git的分支管理",children:[]},{level:2,title:"多人开发场景",slug:"多人开发场景",children:[]},{level:2,title:"修改分支名字（分支名字敲错了或者不满意）",slug:"修改分支名字-分支名字敲错了或者不满意",children:[]},{level:2,title:"如何将本地的项目上传到GitHub上",slug:"如何将本地的项目上传到github上",children:[]},{level:2,title:"项目开发中使用git的标准",slug:"项目开发中使用git的标准",children:[]},{level:2,title:"git版本回退",slug:"git版本回退",children:[]},{level:2,title:"git 代码提交规范",slug:"git-代码提交规范",children:[]}],filePathRelative:"other/gitUse.md",git:{updatedTime:1641261966e3,contributors:[{name:"tomato",email:"h20333@qq.com",commits:1}]}}},7836:(s,n,a)=>{a.r(n),a.d(n,{default:()=>o});var e=a(6252);const p=(0,e.uE)('<p>@[toc]</p><h2 id="git-的工作流程" tabindex="-1"><a class="header-anchor" href="#git-的工作流程" aria-hidden="true">#</a> Git 的工作流程</h2><p><img src="https://img-blog.csdnimg.cn/d026e38579484a1ea577c5dd0ca132a2.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA55Wq6IyEd2t5,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述"> 工作区：就是当前正在操作的文件夹 暂存区 staging Area/Index：需要提交的文件修改暂时放到暂存区，然后再一次性提 交到本地版本库中。 <img src="https://img-blog.csdnimg.cn/58c5ef79b7b74381a8da19ca3bee297e.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA55Wq6IyEd2t5,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述"> 把文件添加到本地 Git 版本库里时，要执行以下两步： 第一步，执行“git add”命令把文件添加到暂存区； 第二步，执行“git commit”提交更改，把暂存区的所有内容提交到本地版本库 master 分支中。Git 在版本库会为项目自动创建的一个主分支 master，默认情况 下 git commit 会向 master 分支提交更改。</p><p>课堂实验：依次执行以下命令 git status：查看版本库的状态 <img src="https://img-blog.csdnimg.cn/b4930b18a0504ea2b67f8e28413aef7b.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA55Wq6IyEd2t5,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述"> 在 GitTest 文件夹中创建一个 hello.text 文件，然后再次执行 git status 命令： <img src="https://img-blog.csdnimg.cn/5f968d112352451494ba3dd702b12432.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA55Wq6IyEd2t5,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述"></p><p>如上图所示，Git 发现在“GitTest”文件夹下有“untracke files”未跟踪的文件。 git add：把文件添加到暂存区 <img src="https://img-blog.csdnimg.cn/d7a85fa087244810a3535975d25dccae.png" alt="在这里插入图片描述"> 再次执行 git status： <img src="https://img-blog.csdnimg.cn/94ebedaa0ceb42d88b4139975aaeab7e.png?x-oss-process=image/watermark,type_ZHJvaWRzYW5zZmFsbGJhY2s,shadow_50,text_Q1NETiBA55Wq6IyEd2t5,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述"></p><p>从上图可以发现，当前文件状态已从 Untracked 变成了 new file，表明该文件已经被 安置到暂存区（staging Area/Index）。也可以执行以下命令：</p><p>Git add <em>.txt -------- 把</em>.txt 的文件加到暂存区</p><p>Git add --all 或 git add . ------把所有的文件都加到暂存区</p><p>注意：执行了 git add 命令后，如果又修改了 hello.txt 文件，需要再次执行 git add hello.txt 命令，把修改后的 hello.txt 加入暂存区</p><p>Git commit：把暂存区的内容提交到本地版本库中 Git commit -m “内容说明” ----把文件永久保存下来，并添加内容说明 <img src="https://img-blog.csdnimg.cn/a7c6b8c139ec49babf9ff943e606415f.png" alt="在这里插入图片描述"></p><h2 id="创建本地版本库" tabindex="-1"><a class="header-anchor" href="#创建本地版本库" aria-hidden="true">#</a> 创建本地版本库</h2><p>版本库又名仓库，可以理解成一个目录，这个目录里面的所有文件都可以被 Git 管 理，每个文件的修改、删除，Git 都能跟踪，以便任何时刻都可以追踪历史，或者在将 来某个时刻可以“还原”。所以，首先应该创建一个本地版本库。</p><h2 id="git和github的关联" tabindex="-1"><a class="header-anchor" href="#git和github的关联" aria-hidden="true">#</a> git和GitHub的关联</h2><h2 id="_1-github" tabindex="-1"><a class="header-anchor" href="#_1-github" aria-hidden="true">#</a> （1）GitHub</h2><p>GitHub 是一个商业网站，是当前全球最大的 Git 服务器。</p><p>Git 和 GitHub 的区别：Git 是一款版本控制软件，而 GitHub 是一个商业网站， 其本体是一个 Git 服务器，但这个网站上的应用程序可以让大家通过 Web 操作，来 完成原本要用复杂的 Git 指令才能做到的操作。</p><p>GitHub 的具体使用步骤，可访问以下网页：</p>',17),t={href:"https://www.runoob.com/w3cnote/git-guide.html",target:"_blank",rel:"noopener noreferrer"},r=(0,e.Uk)("https://www.runoob.com/w3cnote/git-guide.html"),l=(0,e.uE)('<p>也可以使用码云：https://gitee.com/ 作为远程仓库。</p><p>GitHub 支持团队协同开发，另外 Idea 中也支持 GitHub 的应用，可自行查阅相 关材料进行自学</p><p><strong>Git配置SSH Key</strong></p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code>git config <span class="token operator">--</span>global user<span class="token punctuation">.</span>name <span class="token string">&quot;用户名&quot;</span>\ngit config <span class="token operator">--</span>global user<span class="token punctuation">.</span>email <span class="token string">&quot;绑定的电子邮箱&quot;</span>\nssh <span class="token operator">-</span>keygen <span class="token operator">-</span>t rsa <span class="token operator">-</span>C“绑定的电子邮箱”\ncat <span class="token operator">~</span><span class="token operator">/</span><span class="token punctuation">.</span>ssh<span class="token operator">/</span>id_rsa<span class="token punctuation">.</span>pub\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="_2-git常用命令" tabindex="-1"><a class="header-anchor" href="#_2-git常用命令" aria-hidden="true">#</a> (2)git常用命令</h2><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code>git status    <span class="token comment">//查看当前状态 </span>\n\ngit add <span class="token punctuation">.</span>        <span class="token comment">//将所有文件更改添加到暂存区</span>\ngit commit <span class="token operator">-</span>m <span class="token string">&quot;更改说明&quot;</span>       <span class="token comment">//提交到本地仓库</span>\ngit push origin          <span class="token comment">//将代码推送到远程</span>\ngit clone 地址     <span class="token comment">//克隆GitHub上的仓库到本地   ,拷贝一份远程仓库，也就是下载一个项目。</span>\ngit clone 地址 <span class="token operator">-</span>b 分支名称    <span class="token comment">//克隆某个特定分支</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="_3-git的分支管理" tabindex="-1"><a class="header-anchor" href="#_3-git的分支管理" aria-hidden="true">#</a> (3)git的分支管理</h2><p>git remote -v 列出详细信息，在每一个名字后面列出其远程url，此时， -v 选项(译注:此为 –verbose 的简写,取首字母),显示对应的克隆地址。<img src="https://img-blog.csdnimg.cn/2020100820483635.png#pic_center" alt="在这里插入图片描述"></p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code>git remote    <span class="token comment">//不带参数，列出已经存在的远程分支</span>\n\ngit branch    <span class="token comment">//查看分支，一般克隆下来的默认只有一个master分支  前面加* 号的是当前的分支</span>\ngit branch <span class="token operator">-</span>a    <span class="token comment">//加上-a参数可以查看远程分支</span>\n\ngit branch <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span>     <span class="token comment">//创建分支</span>\n\ngit <span class="token keyword">switch</span> <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span>\ngit checkout <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span>    <span class="token comment">//切换分支</span>\n\ngit <span class="token keyword">switch</span> <span class="token operator">-</span>c <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span>        <span class="token comment">//创建分支的同时切换到该分支（写法1）</span>\ngit checkout <span class="token operator">-</span>b <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span>     <span class="token comment">//创建分支的同时切换到该分支（写法2）</span>\n\ngit branch <span class="token operator">-</span>d <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span>      <span class="token comment">//删除分支</span>\n\ngit branch <span class="token operator">-</span>r <span class="token operator">-</span>d origin<span class="token operator">/</span>branch<span class="token operator">-</span>name  \ngit push origin <span class="token operator">:</span>branch<span class="token operator">-</span>name   <span class="token comment">//删除远程分支</span>\n\ngit branch <span class="token operator">--</span>set<span class="token operator">-</span>upstream<span class="token operator">-</span>to<span class="token operator">=</span>origin<span class="token operator">/</span>remote_branch your_branch  \n <span class="token comment">//将本地的仓库和远程的仓库关联起来</span>\n\n<span class="token comment">//如果远程新建了一个分支，本地没有该分支。可以利用</span>\n git checkout <span class="token operator">--</span>track origin<span class="token operator">/</span>branch_name \n <span class="token comment">//这时本地会新建一个分支名叫 branch_name ，会自动跟踪远程的同名分支 branch_name。</span>\n\n<span class="token comment">//如果本地新建了一个分支 branch_name，但是在远程没有。</span>\n<span class="token comment">//这时候 push 和 pull 指令就无法确定该跟踪谁，一般来说我们都会使其跟踪远程同名分支</span>\n<span class="token comment">//所以可以利用 </span>\ngit push <span class="token operator">--</span>set<span class="token operator">-</span>upstream origin branch_name \n<span class="token comment">//这样就可以自动在远程创建一个 branch_name 分支，然后本地分支会 track 该分支。</span>\n<span class="token comment">//后面再对该分支使用 push 和 pull 就自动同步。</span>\n\n\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><h2 id="多人开发场景" tabindex="-1"><a class="header-anchor" href="#多人开发场景" aria-hidden="true">#</a> 多人开发场景</h2><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code>git pull     <span class="token comment">//如果是多人开发的话 需要把远程master上的代码pull下来</span>\n<span class="token comment">//然后合并冲突，然后再</span>\n\ngit add <span class="token punctuation">.</span>\ngit commit <span class="token operator">-</span>m <span class="token string">&quot;balabala&quot;</span>\ngit push origin <span class="token operator">&lt;</span>name<span class="token operator">&gt;</span>   <span class="token comment">//提交到远程仓库</span>\n\ngit merge dev  <span class="token comment">//将dev分支和现在分支的开发历史合并在一起，再自己手动解决分支</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="修改分支名字-分支名字敲错了或者不满意" tabindex="-1"><a class="header-anchor" href="#修改分支名字-分支名字敲错了或者不满意" aria-hidden="true">#</a> 修改分支名字（分支名字敲错了或者不满意）</h2><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code>git branch <span class="token operator">-</span>m <span class="token operator">&lt;</span>oldbranch<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>newbranch<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h2 id="如何将本地的项目上传到github上" tabindex="-1"><a class="header-anchor" href="#如何将本地的项目上传到github上" aria-hidden="true">#</a> 如何将本地的项目上传到GitHub上</h2><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code>git init  <span class="token comment">//把这个文件夹变成Git可管理的仓库</span>\n\ngit add <span class="token punctuation">.</span>\ngit commit <span class="token operator">-</span>m <span class="token string">&quot;aaa&quot;</span>\n\n\n<span class="token comment">//在Github上创建好Git仓库之后我们就可以和本地仓库进行关联了</span>\n git remote add origin https<span class="token operator">:</span><span class="token comment">//github.com/guyibang/TEST2.git</span>\n<span class="token comment">//或者</span>\n git remote add origin git@github<span class="token punctuation">.</span>com<span class="token operator">:</span>GDUFS<span class="token operator">-</span>IIIP<span class="token operator">-</span>DEV<span class="token operator">/</span>yunyin<span class="token punctuation">.</span>git\n\ngit push <span class="token operator">-</span>u origin master <span class="token comment">// 由于新建的远程仓库是空的，所以要加上-u这个参数</span>\n\ngit push origin master <span class="token comment">//等远程仓库里面有了内容之后，下次再从本地库上传内容的时候只需这样就可以了</span>\n\n\ngit pull <span class="token operator">--</span>rebase origin master <span class="token comment">//当github上的仓库不是空的时，即在GitHub上创建仓库的时候勾选了创建README.md文件时，要先pull</span>\n\ngit log <span class="token operator">--</span>oneline <span class="token operator">--</span>graph <span class="token comment">//以简洁的方式显示 git 记录</span>\n\n\ngit log <span class="token operator">-</span>最近提交的次数 <span class="token comment">//查看最近几次的 git 记录</span>\n\n\nGit rm 文件名 <span class="token operator">--</span>cached <span class="token comment">//某个文件不再被 Git 控制</span>\n\n\nGit mv hello<span class="token punctuation">.</span>txt world<span class="token punctuation">.</span>txt <span class="token comment">//更新文件名</span>\n\nGit checkout 文件名 <span class="token comment">//找回已删除的文件： </span>\n\nGit reset master<span class="token operator">^</span> <span class="token comment">//撤销某次 commit</span>\n\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><h2 id="项目开发中使用git的标准" tabindex="-1"><a class="header-anchor" href="#项目开发中使用git的标准" aria-hidden="true">#</a> 项目开发中使用git的标准</h2><blockquote><p>master分支：只有项目经理才能合并，是项目的最终版</p><p>dev开发分支：最后要合并到master分支上的，我们在开发分支上操作</p></blockquote><p>开发： 先拉取dev分支到本地 然后在本地再建新分支开发新功能：</p><p>比如新建feature分支，在feature分支上写代码，运行没问题后再合并到dev分支上，dev分支检查下有没有问题，没有问题就可以推送到远程</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code><span class="token comment">//怎么合并分支，首先，我们要切换到dev分支上，然后输入</span>\ngit merge feature <span class="token comment">//把feature分支的代码合并到dev</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>其他命令</p><div class="language-cpp ext-cpp line-numbers-mode"><pre class="language-cpp"><code>\ngit remote update origin <span class="token operator">--</span>prune <span class="token comment">//更新远程分支列表</span>\n\n\ngit branch <span class="token operator">-</span>a <span class="token comment">//查看所有分支</span>\n\n\ngit push origin <span class="token operator">--</span><span class="token keyword">delete</span> Chapater6 <span class="token comment">//删除远程分支Chapater6</span>\n\n\ngit branch <span class="token operator">-</span>d  Chapater6 <span class="token comment">//删除本地分支 Chapater6</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>测试分支： 项目开发完毕时，在远程的dev分支上新建出一个测试分支，用来测试，测试没问题后就可以将dev分支合并到master分支上，然后就能上线了</p><h2 id="git版本回退" tabindex="-1"><a class="header-anchor" href="#git版本回退" aria-hidden="true">#</a> git版本回退</h2><p>当修改出错的时候想回退到某个版本</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>git log <span class="token comment">//该命令显示从最近到最远的提交日志。每一次提交都有对应的 commit id 和 commit message。</span>\ngit log <span class="token operator">--</span>pretty<span class="token operator">=</span>oneline <span class="token comment">//简化</span>\ngit reset <span class="token operator">--</span>hard id <span class="token comment">//根据 id 回退到指定的版本；</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><img src="https://img-blog.csdnimg.cn/d0e3ae92ee1d4876ad9413fcf71a7a80.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA55Wq6IyEd2t5,size_20,color_FFFFFF,t_70,g_se,x_16" alt="在这里插入图片描述"></p><h2 id="git-代码提交规范" tabindex="-1"><a class="header-anchor" href="#git-代码提交规范" aria-hidden="true">#</a> git 代码提交规范</h2><p>在多人协作的背景下，git 仓库和 workflow 的作用很重要。而对于 commit 提交的信息说明存在一定规范，现使用 commitlint + husky 规范 git commit -m &quot;&quot; 中的描述信息。我们都知道，在使用 git commit 时，git 会提示我们填入此次提交的信息。可不要小看了这些 commit，团队中规范了 commit 可以更清晰的查看每一次代码提交记录，还可以根据自定义的规则，自动生成 changeLog 文件。 提交格式（注意冒号后面有空格）：</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token operator">&lt;</span>type<span class="token operator">&gt;</span><span class="token punctuation">[</span>optional scope<span class="token punctuation">]</span><span class="token operator">:</span> <span class="token operator">&lt;</span>description<span class="token operator">&gt;</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>复制代码</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name">：用于表明我们这次提交的改动类型。</span>\noptional scope：可选，用于标识此次提交主要涉及到代码中哪个模块。\ndescription：一句话描述此次提交的主要内容，做到言简意赅。\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>Type 类型</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">//build：编译相关的修改，例如发布版本、对项目构建或者依赖的改动</span>\n<span class="token comment">//chore：其他修改, 比如改变构建流程、或者增加依赖库、工具等</span>\n<span class="token comment">//ci：持续集成修改</span>\n<span class="token comment">//docs：文档修改</span>\n<span class="token comment">//feat：新特性、新功能</span>\n<span class="token comment">//fix：修改bug</span>\n<span class="token comment">//perf：优化相关，比如提升性能、体验</span>\n<span class="token comment">//refactor：代码重构</span>\n<span class="token comment">//revert：回滚到上一个版本</span>\n<span class="token comment">//style：代码格式修改, 注意不是 css 修改</span>\n<span class="token comment">//test：测试用例修改</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>关于 commitlint + husky 的配置文章有很多，大同小异，请根据自己的实际情况配置。</p>',35),c={},o=(0,a(3744).Z)(c,[["render",function(s,n){const a=(0,e.up)("OutboundLink");return(0,e.wg)(),(0,e.iD)(e.HY,null,[p,(0,e._)("p",null,[(0,e._)("a",t,[r,(0,e.Wm)(a)])]),l],64)}]])},3744:(s,n)=>{n.Z=(s,n)=>{const a=s.__vccOpts||s;for(const[s,e]of n)a[s]=e;return a}}}]);