// Hebrew AI Math Tutor QA Tests - run: node tests/qa-validation.test.js
const V_GRADES=new Set(['1','2']),V_LEVELS=new Set(['easy','medium','advanced']);
const UP=[/\bx\s*=|\by\s*=/i,/\balgebra\b/i,/אלגברה/,/נעלמ(?:ים)?/,/\bחזקה\b|\^[2-9]/,/אחוז(?:ים)?|%\s*\d/,/\bsin\b|\bcos\b|\btan\b/i,/\bintegral\b|\bcalculus\b/i,/גזירה|אינטגרל/,/\blog\b|\blogarithm\b/i,/לוגריתם/,/שלישית|חמישית|שישית|שביעית|שמינית|תשיעית/,/\bsqrt\b/i,/שורש ריבועי|√/,/\bpi\b|\bπ\b|\b3\.14/i,/\bpython\b|\bjavascript\b/i,/תכנות/,/היסטוריה|ביולוגיה|כימיה|פיזיקה/];
function isU(t){return UP.some(r=>r.test(t));}
function val({text:t,image:img,grade:g,level:l}){
  if(!t&&!img){const e=new Error('שאלה ריקה.');e.status=400;throw e;}
  if(!V_GRADES.has(String(g))){const e=new Error('כיתה לא תקינה.');e.status=400;throw e;}
  if(!V_LEVELS.has(String(l))){const e=new Error('רמה לא תקינה.');e.status=400;throw e;}
  if(t&&isU(t)){const e=new Error('הנושא הזה עדיין לא נתמך במערכת.');e.status=200;e.isUnsupported=true;throw e;}
  if(t&&t.length>600){const e=new Error('השאלה ארוכה מדי.');e.status=400;throw e;}
}
let ok=0,fail=0;const fails=[];
const T=(n,fn)=>{try{fn();console.log('PASS',n);ok++;}catch(e){console.error('FAIL',n,'->',e.message);fail++;fails.push({n,m:e.message});}};
const allow=(t,g,l,d)=>T(d,()=>{try{val({text:t,image:null,grade:g,level:l});}catch(e){throw new Error('Blocked:'+e.message);}});
const block=(t,g,l,d)=>T(d,()=>{let e=null;try{val({text:t,image:null,grade:g,level:l});}catch(x){e=x;}if(!e)throw new Error('Allowed');if(!e.isUnsupported)throw new Error('Not isUnsupported:'+e.message);});
const xErr=(t,img,g,l,d)=>T(d,()=>{let e=null;try{val({text:t,image:img,grade:g,level:l});}catch(x){e=x;}if(!e)throw new Error('No err');if(!/[\u0590-\u05FF]/.test(e.message))throw new Error('Not Hebrew:'+e.message);});
// Grade 1 Easy (kita1.pdf §א-ב easy)
allow('כמה זה 5 + 3?','1','easy','G1-Easy add to 10');
allow('כמה זה 9 - 4?','1','easy','G1-Easy sub to 10');
allow('מה המספר שבא אחרי 7?','1','easy','G1-Easy number after');
allow('האם 6 הוא זוגי?','1','easy','G1-Easy even/odd');
allow('לדני 4 גולות ולדינה 5 כמה ביחד?','1','easy','G1-Easy word problem');
// Grade 1 Medium (kita1.pdf §א-ב medium)
allow('כמה זה 14 + 6?','1','medium','G1-Med add second ten');
allow('כמה זה 30 + 40?','1','medium','G1-Med add whole tens');
allow('מה השעה בשעון 3:00?','1','medium','G1-Med clock');
allow('כמה צלעות יש למשולש?','1','medium','G1-Med triangle');
allow('מה אורך העיפרון בסנטימטרים?','1','medium','G1-Med length cm');
// Grade 1 Advanced (kita1.pdf enrichment)
allow('3 קבוצות של 5 ילדים כמה ילדים?','1','advanced','G1-Adv repeated add');
allow('12 עפרונות ל-3 קופסאות כמה בכל?','1','advanced','G1-Adv division');
allow('כמה זה חצי מ-10?','1','advanced','G1-Adv half');
allow('האם לפרפר יש ציר סימטריה?','1','advanced','G1-Adv symmetry');
// Grade 2 Easy (kita2.pdf §א)
allow('כמה זה 9 + 9?','2','easy','G2-Easy add to 9+9');
allow('כמה זה 23 + 4?','2','easy','G2-Easy 2+1 no regroup');
// Grade 2 Medium (kita2.pdf §ב main)
allow('כמה זה 45 + 9?','2','medium','G2-Med 2+1 regroup');
allow('פתרו במאונך: 34 + 26','2','medium','G2-Med vertical');
allow('כמה זה 3 כפול 4?','2','medium','G2-Med mul 6x6');
allow('כמה זה 12 חלקי 3?','2','medium','G2-Med division');
allow('מה חצי מ-16?','2','medium','G2-Med half');
allow('מה רבע מ-12?','2','medium','G2-Med quarter');
allow('כמה קדקודים יש לקובייה?','2','medium','G2-Med cube');
// Grade 2 Advanced (kita2.pdf enrichment)
allow('כמה זה 7 כפול 8?','2','advanced','G2-Adv mul 10x10');
allow('האם 45 מתחלק ב-5?','2','advanced','G2-Adv divisibility');
allow('כמה זה (2+3) כפול 5?','2','advanced','G2-Adv parentheses');
allow('מה ההפרש בין שטח להיקף?','2','advanced','G2-Adv area vs perim');
// Unsupported topics (must BLOCK)
block('x = 5 + 3','1','easy','Block algebra x=');
block('y = 7','2','medium','Block algebra y=');
block('נעלמים','2','advanced','Block unknowns');
block('כמה זה 2^3?','2','advanced','Block exponent');
block('כמה זה 15% מ-200?','2','advanced','Block percent');
block('sin(30)','2','advanced','Block sin');
block('אינטגרל','2','advanced','Block integral');
block('calculus','2','advanced','Block English calculus');
block('log(100)','2','advanced','Block log');
block('לוגריתם','2','advanced','Block Hebrew log');
block('sqrt(16)','2','advanced','Block sqrt');
block('שורש ריבועי של 25','2','advanced','Block Hebrew sqrt');
block('pi x r','2','advanced','Block pi');
block('python','2','advanced','Block python');
block('היסטוריה','1','easy','Block history');
block('ביולוגיה','2','medium','Block biology');
block('שלישית','2','advanced','Block third fraction');
block('חמישית','2','advanced','Block fifth fraction');
// Edge cases
xErr('',null,'1','easy','Edge empty');
xErr('x',null,'3','easy','Edge bad grade');
xErr('x',null,'1','hard','Edge bad level');
T('Edge long text 400',()=>{let e=null;try{val({text:'א'.repeat(700),image:null,grade:'1',level:'easy'});}catch(x){e=x;}if(!e)throw new Error('No err');if(e.status!==400)throw new Error('Expected 400');});
T('Edge image-only passes',()=>{let b=false;try{val({text:'',image:{b:'x'},grade:'1',level:'easy'});}catch(e){if(e.message.includes('ריקה'))b=true;}if(b)throw new Error('Rejected');});
T('Edge unsupported isUnsupported+Hebrew+נתמך',()=>{let e=null;try{val({text:'אינטגרל',image:null,grade:'2',level:'advanced'});}catch(x){e=x;}if(!e)throw new Error('No block');if(!e.isUnsupported)throw new Error('Not isUnsupported');if(!e.message.includes('נתמך'))throw new Error('No נתמך in:'+e.message);});
console.log('\n=== RESULTS: PASSED='+ok+' FAILED='+fail+' TOTAL='+(ok+fail)+' ===');
if(fail>0){fails.forEach(f=>console.error('FAIL:',f.n,'->',f.m));process.exitCode=1;}
else console.log('All '+ok+' tests passed!');
