import{_ as s,b as n,c as a,i as l}from"./app.976197cd.js";const m=JSON.parse('{"title":"实用语法-JSDoc、Emmet","description":"","frontmatter":{},"headers":[{"level":2,"title":"JSDoc","slug":"jsdoc","link":"#jsdoc","children":[]},{"level":2,"title":"Emmet","slug":"emmet","link":"#emmet","children":[{"level":3,"title":"HTML语法","slug":"html语法","link":"#html语法","children":[]},{"level":3,"title":"CSS语法","slug":"css语法","link":"#css语法","children":[]}]}],"relativePath":"工具系列/编辑器/实用语法-JSDoc、Emmet.md","lastUpdated":1677761461000}'),p={name:"工具系列/编辑器/实用语法-JSDoc、Emmet.md"},t=l(`<h1 id="实用语法-jsdoc、emmet" tabindex="-1">实用语法-JSDoc、Emmet <a class="header-anchor" href="#实用语法-jsdoc、emmet" aria-hidden="true">#</a></h1><blockquote><p>VSCode、HBuilderX等大部分编辑器均已内置支持，无需额外安装插件</p></blockquote><h2 id="jsdoc" tabindex="-1">JSDoc <a class="header-anchor" href="#jsdoc" aria-hidden="true">#</a></h2><p>对JS、TS代码添加描述注释，编辑器会识别并在引用处提供代码提示（类似TS类型提示）</p><p>也可作为TS项目中JS文件的类型补充</p><p>详细查看<a href="https://www.jsdoc.com.cn/" target="_blank" rel="noreferrer">文档</a>，常用示例如下：</p><div class="language-TypeScript line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">TypeScript</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/** 简单描述 */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 文件作者</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">author</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#FFCB6B;font-style:italic;">name </span><span style="color:#89DDFF;font-style:italic;">&lt;</span><span style="color:#676E95;font-style:italic;">email</span><span style="color:#89DDFF;font-style:italic;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 弃用</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">deprecated</span><span style="color:#676E95;font-style:italic;"> description</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 函数示例，可以有多个</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">example</span><span style="color:#676E95;font-style:italic;"> description</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * // return x</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * methodName(args)</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 描述函数</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">callback</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#FFCB6B;font-style:italic;">使用后下面参数描述回调函数参数</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">type</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">name</span><span style="color:#676E95;font-style:italic;">=default - description</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">(type1|type2|*)</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">[</span><span style="color:#A6ACCD;font-style:italic;">name.param</span><span style="color:#89DDFF;font-style:italic;">]</span><span style="color:#676E95;font-style:italic;"> - description</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">param</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">...type</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">[</span><span style="color:#A6ACCD;font-style:italic;">name[].param</span><span style="color:#89DDFF;font-style:italic;">]</span><span style="color:#676E95;font-style:italic;"> - description</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">returns</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">type</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> description</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 普通类型描述</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">type</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">type</span><span style="color:#89DDFF;font-style:italic;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * 描述对象属性</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">property</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">type</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">defaults</span><span style="color:#676E95;font-style:italic;"> - description</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * </span><span style="color:#89DDFF;font-style:italic;">@</span><span style="color:#C792EA;font-style:italic;">property</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#89DDFF;font-style:italic;">{</span><span style="color:#FFCB6B;font-style:italic;">type</span><span style="color:#89DDFF;font-style:italic;">}</span><span style="color:#676E95;font-style:italic;"> </span><span style="color:#A6ACCD;font-style:italic;">defaults.param</span><span style="color:#676E95;font-style:italic;"> - description</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><h2 id="emmet" tabindex="-1">Emmet <a class="header-anchor" href="#emmet" aria-hidden="true">#</a></h2><p>快速生成HTML结构与CSS代码块的开发工具</p><p>点击查看<a href="https://yanxyz.github.io/emmet-docs/" target="_blank" rel="noreferrer">官方文档</a>或<a href="https://yanxyz.github.io/emmet-docs/cheat-sheet/" target="_blank" rel="noreferrer">语法速查表</a></p><p>语法中html标签、css属性支持缩写，可以在<a href="https://github.com/emmetio/emmet/blob/master/snippets" target="_blank" rel="noreferrer">官方仓库</a>中查看。也可以在项目根目录中创建snippets.json文件，添加或覆盖代码片段</p><h3 id="html语法" tabindex="-1">HTML语法 <a class="header-anchor" href="#html语法" aria-hidden="true">#</a></h3><ul><li>语法支持嵌套</li><li>语法不包含空格，会停止解析</li><li>HTML标签名无需是标准标签</li><li>a、img等标签生成后会有默认属性，可以手动添加覆盖默认属性</li></ul><div class="language-HTML line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">HTML</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- (&gt;)子元素：div&gt;span --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- (+)兄弟元素：div+span --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- (^)返回上一层：div&gt;span&gt;a^span --&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 上一层就是前一个标签生成后的结构中父级标签那一层 --&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 多个^表示往上多层：^^^返回三层 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- (*)重复：div&gt;span*2 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">span</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- (())分组：div&gt;(header&gt;ul&gt;li*2&gt;a)+footer&gt;p&gt; --&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 括号内为一组，后续的操作符相对于组而不是前一个标签 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">header</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;&lt;</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">header</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">footer</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">footer</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- (#)(.)([attr=xxx])属性操作符，同CSS选择器：div#header+div.page+div[attr1=1 attr2=&#39;a b&#39;]#footer.class1.class2 --&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 自定义属性均会转换为字符串 --&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 没有空格的自定义属性可以不写引号 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">header</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">page</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">attr1</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">attr2</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a b</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">footer</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">class1 class2</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- ($)编号：ul&gt;li.$@--$$@10-$@-20*2 --&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 单个$即递增，多个连续$为生成前导0 --&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 可以放在元素名、属性名、属性值中 --&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- (@)改变编号方向及起点，需要跟在$后 --&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 不写@即升序，@-即降序 --&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- @或@-后跟数字即定义起点，@-10即倒序生成，最后一个为10 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">2-10-21</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">class</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1-11-20</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">li</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">ul</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- ({})添加文本： a{Click me}--&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 使用a&gt;{xxx}也能达到相同的效果，但需要注意其他嵌套 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">href</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">Click me</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">a</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 隐式标签名：Emmet尝试读取上下文并生成对应的标签 --&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- ul、ol内生成li --&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- table、tbody、thead、tfoot内生成 tr--&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- tr内生成td --&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- select、optgroup内生成option --&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!--</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">.wrap&gt;.content            = div.wrap&gt;div.content</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">em&gt;.info                  = em&gt;span.info</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">ul&gt;.item*3                = ul&gt;li.item*3</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">table&gt;#row$*4&gt;[colspan=2] = table&gt;tr#row$*4&gt;td[colspan=2]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">--&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- (lorem)生成mock字符串： p*2&gt;lorem --&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 默认生成30个单词长的字符串，可以手动指定长度：lorem100 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">30个单词...</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">...</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">p</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br></div></div><h3 id="css语法" tabindex="-1">CSS语法 <a class="header-anchor" href="#css语法" aria-hidden="true">#</a></h3><p>目前的趋势是浏览器在实现新属性时不再使用厂商前缀，而是通过特性开关来启用。这样可以避免厂商前缀带来混乱。</p><div class="language-CSS line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">CSS</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#676E95;font-style:italic;">/** (缩写)缩写生成：提供的CSS片段可以在上方速查表中查看，Emmet提供了模糊查找功能 */</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/** ov会生成： */</span></span>
<span class="line"><span style="color:#A6ACCD;">overflow: hidden;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/** (-缩写)自动添加厂商前缀 */</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">也可以显示添加部分厂商前缀：-wm-bdrs</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">w:webkit</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">m:moz</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">s:ms</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">o:o</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">*/</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/** -bdrs会生成： */</span></span>
<span class="line"><span style="color:#A6ACCD;">-webkit-border-radius: ;</span></span>
<span class="line"><span style="color:#A6ACCD;">-moz-border-radius: ;</span></span>
<span class="line"><span style="color:#FFCB6B;">border-radius</span><span style="color:#A6ACCD;">: ;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/** 生成渐变 */</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/** lg(left, #fc0 30%, red) */</span></span>
<span class="line"><span style="color:#FFCB6B;">background-image</span><span style="color:#A6ACCD;">: -webkit-gradient(linear</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 0 0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> 100% 0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> color-stop(0</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">3</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">fc0</span><span style="color:#A6ACCD;">), to(red));</span></span>
<span class="line"><span style="color:#FFCB6B;">background-image</span><span style="color:#A6ACCD;">: -webkit-linear-gradient(left</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">fc0</span><span style="color:#A6ACCD;"> 30%</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> red);</span></span>
<span class="line"><span style="color:#FFCB6B;">background-image</span><span style="color:#A6ACCD;">: -moz-linear-gradient(left</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">fc0</span><span style="color:#A6ACCD;"> 30%</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> red);</span></span>
<span class="line"><span style="color:#FFCB6B;">background-image</span><span style="color:#A6ACCD;">: -o-linear-gradient(left</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">fc0</span><span style="color:#A6ACCD;"> 30%</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> red);</span></span>
<span class="line"><span style="color:#FFCB6B;">background-image</span><span style="color:#A6ACCD;">: linear-gradient(left</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">#</span><span style="color:#F78C6C;">fc0</span><span style="color:#A6ACCD;"> 30%</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> red);</span></span>
<span class="line"></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div>`,17),e=[t];function o(c,r,i,y,F,D){return n(),a("div",null,e)}const u=s(p,[["render",o]]);export{m as __pageData,u as default};
