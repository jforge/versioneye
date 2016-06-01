define("linkify/utils/options",["exports"],function(t){"use strict";function e(t){t=t||{};for(var e=t.newLine||!1,n=t.ignoreTags||[],r=0;r<n.length;r++)n[r]=n[r].toUpperCase();return{attributes:t.linkAttributes||null,defaultProtocol:t.defaultProtocol||"http",events:t.events||null,format:t.format||i,validate:t.validate||o,formatHref:t.formatHref||i,newLine:t.newLine||!1,nl2br:!!e||t.nl2br||!1,tagName:t.tagName||"a",target:t.target||a,linkClass:t.linkClass||"linkified",ignoreTags:n}}function n(t){for(var e=arguments.length,n=Array(e>1?e-1:0),r=1;e>r;r++)n[r-1]=arguments[r];return"function"==typeof t?t.apply(void 0,n):t}function r(t,e){for(var n=0;n<t.length;n++)if(t[n]==e)return!0;return!1}function i(t){return t}function o(){return!0}function a(t,e){return"url"===e?"_blank":null}try{Object.defineProperty(t,"__esModule",{value:!0})}catch(s){t.__esModule=!0}t.normalize=e,t.resolve=n,t.contains=r}),define("linkify/core/tokens",["exports"],function(t){"use strict";function e(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t){return t instanceof s||t instanceof x}try{Object.defineProperty(t,"__esModule",{value:!0})}catch(o){t.__esModule=!0}var a=function(){function t(e){r(this,t),this.v=e}return t.prototype.toString=function(){return this.v+""},t}(),s=function(t){function i(){return r(this,i),e(this,t.apply(this,arguments))}return n(i,t),i}(a),u=function(t){function i(){return r(this,i),e(this,t.call(this,"@"))}return n(i,t),i}(a),l=function(t){function i(){return r(this,i),e(this,t.call(this,":"))}return n(i,t),i}(a),c=function(t){function i(){return r(this,i),e(this,t.call(this,"."))}return n(i,t),i}(a),p=function(t){function i(){return r(this,i),e(this,t.apply(this,arguments))}return n(i,t),i}(a),h=function(t){function i(){return r(this,i),e(this,t.apply(this,arguments))}return n(i,t),i}(a),f=function(t){function i(){return r(this,i),e(this,t.call(this,"\n"))}return n(i,t),i}(a),d=function(t){function i(){return r(this,i),e(this,t.apply(this,arguments))}return n(i,t),i}(a),m=function(t){function i(){return r(this,i),e(this,t.call(this,"+"))}return n(i,t),i}(a),g=function(t){function i(){return r(this,i),e(this,t.call(this,"#"))}return n(i,t),i}(a),v=function(t){function i(){return r(this,i),e(this,t.apply(this,arguments))}return n(i,t),i}(a),y=function(t){function i(){return r(this,i),e(this,t.call(this,"?"))}return n(i,t),i}(a),b=function(t){function i(){return r(this,i),e(this,t.call(this,"/"))}return n(i,t),i}(a),w=function(t){function i(){return r(this,i),e(this,t.apply(this,arguments))}return n(i,t),i}(a),x=function(t){function i(){return r(this,i),e(this,t.apply(this,arguments))}return n(i,t),i}(a),C=function(t){function i(){return r(this,i),e(this,t.apply(this,arguments))}return n(i,t),i}(a),E=function(t){function i(){return r(this,i),e(this,t.call(this,"{"))}return n(i,t),i}(a),_=function(t){function i(){return r(this,i),e(this,t.call(this,"["))}return n(i,t),i}(a),S=function(t){function i(){return r(this,i),e(this,t.call(this,"("))}return n(i,t),i}(a),k=function(t){function i(){return r(this,i),e(this,t.call(this,"}"))}return n(i,t),i}(a),T=function(t){function i(){return r(this,i),e(this,t.call(this,"]"))}return n(i,t),i}(a),M=function(t){function i(){return r(this,i),e(this,t.call(this,")"))}return n(i,t),i}(a),A={Base:a,DOMAIN:s,AT:u,COLON:l,DOT:c,PUNCTUATION:p,LOCALHOST:h,NL:f,NUM:d,PLUS:m,POUND:g,QUERY:y,PROTOCOL:v,SLASH:b,SYM:w,TLD:x,WS:C,OPENBRACE:E,OPENBRACKET:_,OPENPAREN:S,CLOSEBRACE:k,CLOSEBRACKET:T,CLOSEPAREN:M},R=function(){function t(e){r(this,t),this.v=e,this.type="token",this.isLink=!1}return t.prototype.toString=function(){for(var t=[],e=0;e<this.v.length;e++)t.push(this.v[e].toString());return t.join("")},t.prototype.toHref=function(){return this.toString()},t.prototype.toObject=function(){var t=arguments.length<=0||void 0===arguments[0]?"http":arguments[0];return{type:this.type,value:this.toString(),href:this.toHref(t)}},t}(),D=function(t){function i(n){r(this,i);var o=e(this,t.call(this,n));return o.type="email",o.isLink=!0,o}return n(i,t),i.prototype.toHref=function(){return"mailto:"+this.toString()},i}(R),O=function(t){function i(n){r(this,i);var o=e(this,t.call(this,n));return o.type="text",o}return n(i,t),i}(R),N=function(t){function i(n){r(this,i);var o=e(this,t.call(this,n));return o.type="nl",o}return n(i,t),i}(R),I=function(t){function o(n){r(this,o);var i=e(this,t.call(this,n));return i.type="url",i.isLink=!0,i}return n(o,t),o.prototype.toHref=function(){for(var t=arguments.length<=0||void 0===arguments[0]?"http":arguments[0],e=!1,n=!1,r=this.v,o=[],a=0;r[a]instanceof v;)e=!0,o.push(r[a].toString().toLowerCase()),a++;for(;r[a]instanceof b;)n=!0,o.push(r[a].toString()),a++;for(;i(r[a]);)o.push(r[a].toString().toLowerCase()),a++;for(;a<r.length;a++)o.push(r[a].toString());return o=o.join(""),e||n||(o=t+"://"+o),o},o.prototype.hasProtocol=function(){return this.v[0]instanceof v},o}(R),P={Base:R,EMAIL:D,NL:N,TEXT:O,URL:I};t.text=A,t.multi=P}),define("linkify/core/state",["exports"],function(t){"use strict";function e(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function n(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t,e,n,r){for(var i=0,o=t.length,a=e,u=[],l=void 0;o>i&&(l=a.next(t[i]));)a=l,i++;if(i>=o)return[];for(;o-1>i;)l=new s(r),u.push(l),a.on(t[i],l),a=l,i++;return l=new s(n),u.push(l),a.on(t[o-1],l),u}try{Object.defineProperty(t,"__esModule",{value:!0})}catch(o){t.__esModule=!0}var a=function(){function t(e){r(this,t),this.j=[],this.T=e||null}return t.prototype.on=function(t,e){if(t instanceof Array){for(var n=0;n<t.length;n++)this.j.push([t[n],e]);return this}return this.j.push([t,e]),this},t.prototype.next=function(t){for(var e=0;e<this.j.length;e++){var n=this.j[e],r=n[0],i=n[1];if(this.test(t,r))return i}return!1},t.prototype.accepts=function(){return!!this.T},t.prototype.test=function(t,e){return t===e},t.prototype.emit=function(){return this.T},t}(),s=function(t){function i(){return r(this,i),e(this,t.apply(this,arguments))}return n(i,t),i.prototype.test=function(t,e){return t===e||e instanceof RegExp&&e.test(t)},i}(a),u=function(t){function i(){return r(this,i),e(this,t.apply(this,arguments))}return n(i,t),i.prototype.test=function(t,e){return t instanceof e},i}(a);t.CharacterState=s,t.TokenState=u,t.stateify=i}),define("linkify/core/scanner",["exports","./tokens","./state"],function(t,e,n){"use strict";try{Object.defineProperty(t,"__esModule",{value:!0})}catch(r){t.__esModule=!0}t.start=t.run=t.TOKENS=t.State=void 0;var i="abogado|ac|academy|accountants|active|actor|ad|adult|ae|aero|af|ag|agency|ai|airforce|al|allfinanz|alsace|am|an|android|ao|aq|aquarelle|ar|archi|army|arpa|as|asia|associates|at|attorney|au|auction|audio|autos|aw|ax|axa|az|ba|band|bar|bargains|bayern|bb|bd|be|beer|berlin|best|bf|bg|bh|bi|bid|bike|bio|biz|bj|black|blackfriday|bloomberg|blue|bm|bmw|bn|bnpparibas|bo|boo|boutique|br|brussels|bs|bt|budapest|build|builders|business|buzz|bv|bw|by|bz|bzh|ca|cab|cal|camera|camp|cancerresearch|capetown|capital|caravan|cards|care|career|careers|casa|cash|cat|catering|cc|cd|center|ceo|cern|cf|cg|ch|channel|cheap|christmas|chrome|church|ci|citic|city|ck|cl|claims|cleaning|click|clinic|clothing|club|cm|cn|co|coach|codes|coffee|college|cologne|com|community|company|computer|condos|construction|consulting|contractors|cooking|cool|coop|country|cr|credit|creditcard|cricket|crs|cruises|cu|cuisinella|cv|cw|cx|cy|cymru|cz|dad|dance|dating|day|de|deals|degree|delivery|democrat|dental|dentist|desi|diamonds|diet|digital|direct|directory|discount|dj|dk|dm|dnp|do|domains|durban|dvag|dz|eat|ec|edu|education|ee|eg|email|emerck|energy|engineer|engineering|enterprises|equipment|er|es|esq|estate|et|eu|eurovision|eus|events|everbank|exchange|expert|exposed|fail|farm|fashion|feedback|fi|finance|financial|firmdale|fish|fishing|fitness|fj|fk|flights|florist|flsmidth|fly|fm|fo|foo|forsale|foundation|fr|frl|frogans|fund|furniture|futbol|ga|gal|gallery|gb|gbiz|gd|ge|gent|gf|gg|gh|gi|gift|gifts|gives|gl|glass|gle|global|globo|gm|gmail|gmo|gmx|gn|google|gop|gov|gp|gq|gr|graphics|gratis|green|gripe|gs|gt|gu|guide|guitars|guru|gw|gy|hamburg|haus|healthcare|help|here|hiphop|hiv|hk|hm|hn|holdings|holiday|homes|horse|host|hosting|house|how|hr|ht|hu|ibm|id|ie|il|im|immo|immobilien|in|industries|info|ing|ink|institute|insure|int|international|investments|io|iq|ir|irish|is|it|je|jetzt|jm|jo|jobs|joburg|jp|juegos|kaufen|ke|kg|kh|ki|kim|kitchen|kiwi|km|kn|koeln|kp|kr|krd|kred|kw|ky|kz|la|lacaixa|land|latrobe|lawyer|lb|lc|lds|lease|legal|lgbt|li|life|lighting|limited|limo|link|lk|loans|local|london|lotto|lr|ls|lt|ltda|lu|luxe|luxury|lv|ly|ma|madrid|maison|management|mango|market|marketing|mc|md|me|media|meet|melbourne|meme|memorial|menu|mg|mh|miami|mil|mini|mk|ml|mm|mn|mo|mobi|moda|moe|monash|money|mormon|mortgage|moscow|motorcycles|mov|mp|mq|mr|ms|mt|mu|museum|mv|mw|mx|my|mz|na|nagoya|name|navy|nc|ne|net|network|neustar|new|nexus|nf|ng|ngo|nhk|ni|ninja|nl|no|np|nr|nra|nrw|nu|nyc|nz|okinawa|om|ong|onl|ooo|org|organic|otsuka|ovh|pa|paris|partners|parts|party|pe|pf|pg|ph|pharmacy|photo|photography|photos|physio|pics|pictures|pink|pizza|pk|pl|place|plumbing|pm|pn|pohl|poker|porn|post|pr|praxi|press|pro|prod|productions|prof|properties|property|ps|pt|pub|pw|py|qa|qpon|quebec|re|realtor|recipes|red|rehab|reise|reisen|reit|ren|rentals|repair|report|republican|rest|restaurant|reviews|rich|rio|rip|ro|rocks|rodeo|rs|rsvp|ru|ruhr|rw|ryukyu|sa|saarland|sarl|sb|sc|sca|scb|schmidt|schule|science|scot|sd|se|services|sexy|sg|sh|shiksha|shoes|si|singles|sj|sk|sl|sm|sn|so|social|software|sohu|solar|solutions|soy|space|spiegel|sr|st|su|supplies|supply|support|surf|surgery|suzuki|sv|sx|sy|sydney|systems|sz|taipei|tatar|tattoo|tax|tc|td|technology|tel|tf|tg|th|tienda|tips|tirol|tj|tk|tl|tm|tn|to|today|tokyo|tools|top|town|toys|tp|tr|trade|training|travel|trust|tt|tui|tv|tw|tz|ua|ug|uk|university|uno|uol|us|uy|uz|va|vacations|vc|ve|vegas|ventures|versicherung|vet|vg|vi|viajes|villas|vision|vlaanderen|vn|vodka|vote|voting|voto|voyage|vu|wales|wang|watch|webcam|website|wed|wedding|wf|whoswho|wien|wiki|williamhill|wme|work|works|world|ws|wtc|wtf|xxx|xyz|yachts|yandex|ye|yoga|yokohama|youtube|yt|za|zip|zm|zone|zw".split("|"),o=/[0-9]/,a=/[a-z0-9]/,s=":",u=[],l=function(t){return new n.CharacterState(t)},c=e.text.DOMAIN,p=e.text.LOCALHOST,h=e.text.NUM,f=e.text.PROTOCOL,d=e.text.TLD,m=e.text.WS,g=l(),v=l(h),y=l(c),b=l(),w=l(m);g.on("@",l(e.text.AT)).on(".",l(e.text.DOT)).on("+",l(e.text.PLUS)).on("#",l(e.text.POUND)).on("?",l(e.text.QUERY)).on("/",l(e.text.SLASH)).on(s,l(e.text.COLON)).on("{",l(e.text.OPENBRACE)).on("[",l(e.text.OPENBRACKET)).on("(",l(e.text.OPENPAREN)).on("}",l(e.text.CLOSEBRACE)).on("]",l(e.text.CLOSEBRACKET)).on(")",l(e.text.CLOSEPAREN)).on(/[,;!]/,l(e.text.PUNCTUATION)),g.on(/\n/,l(e.text.NL)).on(/\s/,w),w.on(/[^\S\n]/,w);for(var x=0;x<i.length;x++){var C=(0,n.stateify)(i[x],g,d,c);u.push.apply(u,C)}var E=(0,n.stateify)("file",g,c,c),_=(0,n.stateify)("ftp",g,c,c),S=(0,n.stateify)("http",g,c,c);u.push.apply(u,E),u.push.apply(u,_),u.push.apply(u,S);var k=E.pop(),T=_.pop(),M=S.pop(),A=l(c),R=l(f);T.on("s",A).on(s,R),M.on("s",A).on(s,R),u.push(A),k.on(s,R),A.on(s,R);var D=(0,n.stateify)("localhost",g,p,c);u.push.apply(u,D),g.on(o,v),v.on("-",b).on(o,v).on(a,y),y.on("-",b).on(a,y);for(var O=0;O<u.length;O++)u[O].on("-",b).on(a,y);b.on("-",b).on(o,y).on(a,y),g.on(/./,l(e.text.SYM));var N=function(t){for(var e=t.replace(/[A-Z]/g,function(t){return t.toLowerCase()}),n=t.length,r=[],i=0;n>i;){for(var o=g,a=null,s=null,u=0,l=null,c=-1;n>i&&(s=o.next(e[i]));)a=null,o=s,o.accepts()?(c=0,l=o):c>=0&&c++,u++,i++;if(!(0>c)){i-=c,u-=c;var p=l.emit();r.push(new p(t.substr(i-u,u)))}}return r},I=g;t.State=n.CharacterState,t.TOKENS=e.text,t.run=N,t.start=I}),define("linkify/core/parser",["exports","./tokens","./state"],function(t,e,n){"use strict";try{Object.defineProperty(t,"__esModule",{value:!0})}catch(r){t.__esModule=!0}t.start=t.run=t.TOKENS=t.State=void 0;var i=function(t){return new n.TokenState(t)},o=e.text.DOMAIN,a=e.text.AT,s=e.text.COLON,u=e.text.DOT,l=e.text.PUNCTUATION,c=e.text.LOCALHOST,p=e.text.NL,h=e.text.NUM,f=e.text.PLUS,d=e.text.POUND,m=e.text.PROTOCOL,g=e.text.QUERY,v=e.text.SLASH,y=e.text.SYM,b=e.text.TLD,w=e.text.OPENBRACE,x=e.text.OPENBRACKET,C=e.text.OPENPAREN,E=e.text.CLOSEBRACE,_=e.text.CLOSEBRACKET,S=e.text.CLOSEPAREN,k=e.multi.EMAIL,T=e.multi.NL,M=e.multi.TEXT,A=e.multi.URL,R=i(),D=i(),O=i(),N=i(),I=i(),P=i(),j=i(A),L=i(),$=i(A),F=i(A),B=i(),U=i(),z=i(),H=i(),q=i(A),V=i(A),W=i(A),K=i(),Q=i(),Y=i(),X=i(),G=i(),J=i(k),Z=i(),tt=i(k),et=i(),nt=i(),rt=i(),it=i(T);R.on(p,it).on(m,D).on(v,O),D.on(v,O),O.on(v,N),R.on(b,I).on(o,I).on(c,j).on(h,I),N.on(b,F).on(o,F).on(h,F).on(c,F),I.on(u,P),X.on(u,G),P.on(b,j).on(o,I).on(h,I).on(c,I),G.on(b,J).on(o,X).on(h,X).on(c,X),j.on(u,P),J.on(u,G),j.on(s,L).on(v,F),L.on(h,$),$.on(v,F),J.on(s,Z),Z.on(h,tt);var ot=[o,a,c,h,f,d,m,v,b],at=[s,u,g,l,E,_,S,w,x,C,y];F.on(w,U).on(x,z).on(C,H),B.on(w,U).on(x,z).on(C,H),U.on(E,F),z.on(_,F),H.on(S,F),q.on(E,F),V.on(_,F),W.on(S,F),K.on(E,F),Q.on(_,F),Y.on(S,F),U.on(ot,q),z.on(ot,V),H.on(ot,W),U.on(at,K),z.on(at,Q),H.on(at,Y),q.on(ot,q),V.on(ot,V),W.on(ot,W),q.on(at,q),V.on(at,V),W.on(at,W),K.on(ot,q),Q.on(ot,V),Y.on(ot,W),K.on(at,K),Q.on(at,Q),Y.on(at,Y),F.on(ot,F),B.on(ot,F),F.on(at,B),B.on(at,B);var st=[o,h,f,d,g,y,b];I.on(st,et).on(a,nt),j.on(st,et).on(a,nt),P.on(st,et),et.on(st,et).on(a,nt).on(u,rt),rt.on(st,et),nt.on(b,X).on(o,X).on(c,J);var ut=function(t){for(var e=t.length,n=0,r=[],i=[];e>n;){for(var o=R,a=null,s=null,u=0,l=null,c=-1;e>n&&!(a=o.next(t[n]));)i.push(t[n++]);for(;e>n&&(s=a||o.next(t[n]));)a=null,o=s,o.accepts()?(c=0,l=o):c>=0&&c++,n++,u++;if(0>c)for(var p=n-u;n>p;p++)i.push(t[p]);else{i.length>0&&(r.push(new M(i)),i=[]),n-=c,u-=c;var h=l.emit();r.push(new h(t.slice(n-u,n)))}}return i.length>0&&r.push(new M(i)),r},lt=e.multi,ct=R;t.State=n.TokenState,t.TOKENS=lt,t.run=ut,t.start=ct}),define("linkify",["exports","./linkify/utils/options","./linkify/core/scanner","./linkify/core/parser"],function(t,e,n,r){"use strict";function i(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e["default"]=t,e}try{Object.defineProperty(t,"__esModule",{value:!0})}catch(o){t.__esModule=!0}t.tokenize=t.test=t.scanner=t.parser=t.options=t.find=void 0;var a=i(e),s=i(n),u=i(r);Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)});var l=function(t){return u.run(s.run(t))},c=function(t){for(var e=arguments.length<=1||void 0===arguments[1]?null:arguments[1],n=l(t),r=[],i=0;i<n.length;i++)!n[i].isLink||e&&n[i].type!==e||r.push(n[i].toObject());return r},p=function(t){var e=arguments.length<=1||void 0===arguments[1]?null:arguments[1],n=l(t);return 1===n.length&&n[0].isLink&&(!e||n[0].type===e)};t.find=c,t.options=a,t.parser=u,t.scanner=s,t.test=p,t.tokenize=l});