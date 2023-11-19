"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3670],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=u(n),m=r,d=h["".concat(l,".").concat(m)]||h[m]||p[m]||o;return n?a.createElement(d,i(i({ref:t},c),{},{components:n})):a.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8442:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={title:"Achieve More, Pay Less - Use GPT-4 Smartly",authors:"sonichi",tags:["LLM","GPT","research"]},i=void 0,s={permalink:"/autogen/blog/2023/05/18/GPT-adaptive-humaneval",source:"@site/blog/2023-05-18-GPT-adaptive-humaneval/index.mdx",title:"Achieve More, Pay Less - Use GPT-4 Smartly",description:"An adaptive way of using GPT-3.5 and GPT-4 outperforms GPT-4 in both coding success rate and inference cost",date:"2023-05-18T00:00:00.000Z",formattedDate:"May 18, 2023",tags:[{label:"LLM",permalink:"/autogen/blog/tags/llm"},{label:"GPT",permalink:"/autogen/blog/tags/gpt"},{label:"research",permalink:"/autogen/blog/tags/research"}],readingTime:7.785,truncated:!1,authors:[{name:"Chi Wang",title:"Principal Researcher at Microsoft Research",url:"https://www.linkedin.com/in/chi-wang-49b15b16/",imageURL:"https://github.com/sonichi.png",key:"sonichi"}],prevItem:{title:"MathChat - An Conversational Framework to Solve Math Problems",permalink:"/autogen/blog/2023/06/28/MathChat"},nextItem:{title:"Does Model and Inference Parameter Matter in LLM Applications? - A Case Study for MATH",permalink:"/autogen/blog/2023/04/21/LLM-tuning-math"}},l={authorsImageUrls:[void 0]},u=[{value:"Observations",id:"observations",children:[],level:2},{value:"Solution",id:"solution",children:[],level:2},{value:"Experiment Results",id:"experiment-results",children:[],level:2},{value:"Discussion",id:"discussion",children:[],level:2},{value:"For Further Reading",id:"for-further-reading",children:[],level:2}],c={toc:u};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"An adaptive way of using GPT-3.5 and GPT-4 outperforms GPT-4 in both coding success rate and inference cost",src:n(8497).Z})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"TL;DR:")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"A case study using the HumanEval benchmark shows that an adaptive way of using multiple GPT models can achieve both much higher accuracy (from 68% to 90%) and lower inference cost (by 18%) than using GPT-4 for coding."))),(0,r.kt)("p",null,"GPT-4 is a big upgrade of foundation model capability, e.g., in code and math, accompanied by a much higher (more than 10x) price per token to use over GPT-3.5-Turbo. On a code completion benchmark, ",(0,r.kt)("a",{parentName:"p",href:"https://huggingface.co/datasets/openai_humaneval"},"HumanEval"),", developed by OpenAI, GPT-4 can successfully solve 68% tasks while GPT-3.5-Turbo does 46%. It is possible to increase the success rate of GPT-4 further by generating multiple responses or making multiple calls. However, that will further increase the cost, which is already nearly 20 times of using GPT-3.5-Turbo and with more restricted API call rate limit. Can we achieve more with less?"),(0,r.kt)("p",null,"In this blog post, we will explore a creative, adaptive way of using GPT models which leads to a big leap forward."),(0,r.kt)("h2",{id:"observations"},"Observations"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GPT-3.5-Turbo can already solve 40%-50% tasks. For these tasks if we never use GPT-4, we can save nearly 40-50% cost."),(0,r.kt)("li",{parentName:"ul"},"If we use the saved cost to generate more responses with GPT-4 for the remaining unsolved tasks, it is possible to solve some more of them while keeping the amortized cost down.")),(0,r.kt)("p",null,"The obstacle of leveraging these observations is that we do not know ",(0,r.kt)("em",{parentName:"p"},"a priori")," which tasks can be solved by the cheaper model, which tasks can be solved by the expensive model, and which tasks can be solved by paying even more to the expensive model."),(0,r.kt)("p",null,"To overcome that obstacle, one may want to predict which task requires what model to solve and how many responses are required for each task. Let's look at one example code completion task:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def vowels_count(s):\n    \"\"\"Write a function vowels_count which takes a string representing\n    a word as input and returns the number of vowels in the string.\n    Vowels in this case are 'a', 'e', 'i', 'o', 'u'. Here, 'y' is also a\n    vowel, but only when it is at the end of the given word.\n\n    Example:\n    >>> vowels_count(\"abcde\")\n    2\n    >>> vowels_count(\"ACEDY\")\n    3\n    \"\"\"\n")),(0,r.kt)("p",null,"Can we predict whether GPT-3.5-Turbo can solve this task or do we need to use GPT-4? My first guess is that GPT-3.5-Turbo can get it right because the instruction is fairly straightforward. Yet, it turns out that GPT-3.5-Turbo does not consistently get it right, if we only give it one chance. It's not obvious (but an interesting research question!) how to predict the performance without actually trying."),(0,r.kt)("p",null,"What else can we do? We notice that:\n",(0,r.kt)("strong",{parentName:"p"},'It\'s "easier" to verify a given solution than finding a correct solution from scratch.')),(0,r.kt)("p",null,"Some simple example test cases are provided in the docstr. If we already have a response generated by a model, we can use those test cases to filter wrong implementations, and either use a more powerful model or generate more responses, until the result passes the example test cases. Moreover, this step can be automated by asking GPT-3.5-Turbo to generate assertion statements from the examples given in the docstr (a simpler task where we can place our bet) and executing the code."),(0,r.kt)("h2",{id:"solution"},"Solution"),(0,r.kt)("p",null,"Combining these observations, we can design a solution with two intuitive ideas:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Make use of auto-generated feedback, i.e., code execution results, to filter responses."),(0,r.kt)("li",{parentName:"ul"},"Try inference configurations one by one, until one response can pass the filter.")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Design",src:n(2214).Z})),(0,r.kt)("p",null,"This solution works adaptively without knowing or predicting which task fits which configuration. It simply tries multiple configurations one by one, starting from the cheapest configuration. Note that one configuration can generate multiple responses (by setting the inference parameter n larger than 1). And different configurations can use the same model and different inference parameters such as n and temperature. Only one response is returned and evaluated per task."),(0,r.kt)("p",null,"An implementation of this solution is provided in ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/code_utils#implement"},"autogen"),". It uses the following sequence of configurations:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"GPT-3.5-Turbo, n=1, temperature=0"),(0,r.kt)("li",{parentName:"ol"},"GPT-3.5-Turbo, n=7, temperature=1, stop=",'["\\nclass", "\\ndef", "\\nif", "\\nprint"]'),(0,r.kt)("li",{parentName:"ol"},"GPT-4, n=1, temperature=0"),(0,r.kt)("li",{parentName:"ol"},"GPT-4, n=2, temperature=1, stop=",'["\\nclass", "\\ndef", "\\nif", "\\nprint"]'),(0,r.kt)("li",{parentName:"ol"},"GPT-4, n=1, temperature=1, stop=",'["\\nclass", "\\ndef", "\\nif", "\\nprint"]')),(0,r.kt)("h2",{id:"experiment-results"},"Experiment Results"),(0,r.kt)("p",null,"The first figure in this blog post shows the success rate and average inference cost of the adaptive solution compared with default GPT-4.\nThe inference cost includes the cost for generating the assertions in our solution. The generated assertions are not always correct, and programs that pass/fail the generated assertions are not always right/wrong. Despite of that, the adaptive solution can increase the success rate (referred to as pass@1 in the literature) from 68% to 90%, while reducing the cost by 18%."),(0,r.kt)("p",null,"Here are a few examples of function definitions which are solved by different configurations in the portfolio."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Solved by GPT-3.5-Turbo, n=1, temperature=0")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def compare(game,guess):\n    """I think we all remember that feeling when the result of some long-awaited\n    event is finally known. The feelings and thoughts you have at that moment are\n    definitely worth noting down and comparing.\n    Your task is to determine if a person correctly guessed the results of a number of matches.\n    You are given two arrays of scores and guesses of equal length, where each index shows a match.\n    Return an array of the same length denoting how far off each guess was. If they have guessed correctly,\n    the value is 0, and if not, the value is the absolute difference between the guess and the score.\n\n\n    example:\n\n    compare([1,2,3,4,5,1],[1,2,3,4,2,-2]) -> [0,0,0,0,3,3]\n    compare([0,5,0,0,0,4],[4,1,1,0,0,-2]) -> [4,4,1,0,0,6]\n    """\n')),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Solved by GPT-3.5-Turbo, n=7, temperature=1, stop=",'["\\nclass", "\\ndef", "\\nif", "\\nprint"]',": the ",(0,r.kt)("inlineCode",{parentName:"li"},"vowels_count")," function presented earlier."),(0,r.kt)("li",{parentName:"ol"},"Solved by GPT-4, n=1, temperature=0:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def string_xor(a: str, b: str) -> str:\n    \"\"\" Input are two strings a and b consisting only of 1s and 0s.\n    Perform binary XOR on these inputs and return result also as a string.\n    >>> string_xor('010', '110')\n    '100'\n    \"\"\"\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Solved by GPT-4, n=2, temperature=1, stop=",'["\\nclass", "\\ndef", "\\nif", "\\nprint"]',":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"def is_palindrome(string: str) -> bool:\n    \"\"\" Test if given string is a palindrome \"\"\"\n    return string == string[::-1]\n\n\ndef make_palindrome(string: str) -> str:\n    \"\"\" Find the shortest palindrome that begins with a supplied string.\n    Algorithm idea is simple:\n    - Find the longest postfix of supplied string that is a palindrome.\n    - Append to the end of the string reverse of a string prefix that comes before the palindromic suffix.\n    >>> make_palindrome('')\n    ''\n    >>> make_palindrome('cat')\n    'catac'\n    >>> make_palindrome('cata')\n    'catac'\n    \"\"\"\n")),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"Solved by GPT-4, n=1, temperature=1, stop=",'["\\nclass", "\\ndef", "\\nif", "\\nprint"]',":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'def sort_array(arr):\n    """\n    In this Kata, you have to sort an array of non-negative integers according to\n    number of ones in their binary representation in ascending order.\n    For similar number of ones, sort based on decimal value.\n\n    It must be implemented like this:\n    >>> sort_array([1, 5, 2, 3, 4]) == [1, 2, 3, 4, 5]\n    >>> sort_array([-2, -3, -4, -5, -6]) == [-6, -5, -4, -3, -2]\n    >>> sort_array([1, 0, 2, 3, 4]) [0, 1, 2, 3, 4]\n    """\n')),(0,r.kt)("p",null,"The last problem is an example with wrong example test cases in the original definition. It misleads the adaptive solution because a correct implementation is regarded as wrong and more trials are made. The last configuration in the sequence returns the right implementation, even though it does not pass the auto-generated assertions. This example demonstrates that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Our adaptive solution has a certain degree of fault tolerance."),(0,r.kt)("li",{parentName:"ul"},"The success rate and inference cost for the adaptive solution can be further improved if correct example test cases are used.")),(0,r.kt)("p",null,"It is worth noting that the reduced inference cost is the amortized cost over all the tasks. For each individual task, the cost can be either larger or smaller than directly using GPT-4. This is the nature of the adaptive solution: The cost is in general larger for difficult tasks than that for easy tasks."),(0,r.kt)("p",null,"An example notebook to run this experiment can be found at: ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/microsoft/FLAML/blob/v1.2.1/notebook/research/autogen_code.ipynb"},"https://github.com/microsoft/FLAML/blob/v1.2.1/notebook/research/autogen_code.ipynb"),". The experiment was run when AutoGen was a subpackage in FLAML."),(0,r.kt)("h2",{id:"discussion"},"Discussion"),(0,r.kt)("p",null,"Our solution is quite simple to implement using a generic interface offered in ",(0,r.kt)("a",{parentName:"p",href:"/docs/Use-Cases/enhanced_inference#logic-error"},(0,r.kt)("inlineCode",{parentName:"a"},"autogen")),", yet the result is quite encouraging."),(0,r.kt)("p",null,"While the specific way of generating assertions is application-specific, the main ideas are general in LLM operations:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Generate multiple responses to select - especially useful when selecting a good response is relatively easier than generating a good response at one shot."),(0,r.kt)("li",{parentName:"ul"},"Consider multiple configurations to generate responses - especially useful when:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Model and other inference parameter choice affect the utility-cost tradeoff; or"),(0,r.kt)("li",{parentName:"ul"},"Different configurations have complementary effect.")))),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"/blog/2023/04/21/LLM-tuning-math"},"previous blog post")," provides evidence that these ideas are relevant in solving math problems too.\n",(0,r.kt)("inlineCode",{parentName:"p"},"autogen")," uses a technique ",(0,r.kt)("a",{parentName:"p",href:"https://arxiv.org/abs/2303.04673"},"EcoOptiGen")," to support inference parameter tuning and model selection."),(0,r.kt)("p",null,"There are many directions of extensions in research and development:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Generalize the way to provide feedback."),(0,r.kt)("li",{parentName:"ul"},"Automate the process of optimizing the configurations."),(0,r.kt)("li",{parentName:"ul"},"Build adaptive agents for different applications.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Do you find this approach applicable to your use case? Do you have any other challenge to share about LLM applications? Do you like to see more support or research of LLM optimization or automation? Please join our ",(0,r.kt)("a",{parentName:"em",href:"https://discord.gg/pAbnFJrkgZ"},"Discord")," server for discussion.")),(0,r.kt)("h2",{id:"for-further-reading"},"For Further Reading"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/Getting-Started"},"Documentation")," about ",(0,r.kt)("inlineCode",{parentName:"li"},"autogen")," and ",(0,r.kt)("a",{parentName:"li",href:"https://arxiv.org/abs/2303.04673"},"Research paper"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/blog/2023/04/21/LLM-tuning-math"},"Blog post")," about a related study for math.")))}p.isMDXComponent=!0},2214:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/design-88630f6d8d95f1e31ef5ce79e81aab54.png"},8497:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/humaneval-b2718b0b15d76b8fc59a4094e1bd684c.png"}}]);