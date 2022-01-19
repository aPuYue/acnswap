(this["webpackJsonp@uniswap/interface"]=this["webpackJsonp@uniswap/interface"]||[]).push([[80],{994:function(t,e,n){"use strict";n.r(e),n.d(e,"getQuote",(function(){return S}));var a=n(4),r=n.n(a),o=n(25),i=n(9),s=n(400),c=n(8),u=n.n(c),d=n(44),l=n(81);function m(t,e,n){var a,r=n.quote,o=n.quoteGasAdjusted,i=n.route,c=n.estimatedGasUsed,u=n.estimatedGasUsedQuoteToken,m=n.estimatedGasUsedUSD,p=n.gasPriceWei,y=n.methodParameters,h=n.blockNumber,g=[],v=Object(d.a)(i);try{for(v.s();!(a=v.n()).done;){var b=a.value,f=b.amount,I=b.quote,q=b.tokenPath;if(b.protocol===l.Protocol.V3){for(var w=b.route.pools,S=[],k=0;k<w.length;k++){var x=w[k],O=q[k],E=q[k+1],j=void 0;0===k&&(j="exactIn"===t?f.quotient.toString():I.quotient.toString());var T=void 0;k===w.length-1&&(T="exactIn"===t?I.quotient.toString():f.quotient.toString()),S.push({type:"v3-pool",tokenIn:{chainId:O.chainId,decimals:O.decimals,address:O.address,symbol:O.symbol},tokenOut:{chainId:E.chainId,decimals:E.decimals,address:E.address,symbol:E.symbol},fee:x.fee.toString(),liquidity:x.liquidity.toString(),sqrtRatioX96:x.sqrtRatioX96.toString(),tickCurrent:x.tickCurrent.toString(),amountIn:j,amountOut:T})}g.push(S)}else if(b.protocol===l.Protocol.V2){for(var U=b.route.pairs,P=[],A=0;A<U.length;A++){var D=U[A],G=q[A],R=q[A+1],C=void 0;0===A&&(C="exactIn"===t?f.quotient.toString():I.quotient.toString());var Q=void 0;A===U.length-1&&(Q="exactIn"===t?I.quotient.toString():f.quotient.toString());var X=D.reserve0,J=D.reserve1;P.push({type:"v2-pool",tokenIn:{chainId:G.chainId,decimals:G.decimals,address:G.address,symbol:G.symbol},tokenOut:{chainId:R.chainId,decimals:R.decimals,address:R.address,symbol:R.symbol},reserve0:{token:{chainId:X.currency.wrapped.chainId,decimals:X.currency.wrapped.decimals,address:X.currency.wrapped.address,symbol:X.currency.wrapped.symbol},quotient:X.quotient.toString()},reserve1:{token:{chainId:J.currency.wrapped.chainId,decimals:J.currency.wrapped.decimals,address:J.currency.wrapped.address,symbol:J.currency.wrapped.symbol},quotient:J.quotient.toString()},amountIn:C,amountOut:Q})}g.push(P)}}}catch(N){v.e(N)}finally{v.f()}return{methodParameters:y,blockNumber:h.toString(),amount:e.quotient.toString(),amountDecimals:e.toExact(),quote:r.quotient.toString(),quoteDecimals:r.toExact(),quoteGasAdjusted:o.quotient.toString(),quoteGasAdjustedDecimals:o.toExact(),gasUseEstimateQuote:u.quotient.toString(),gasUseEstimateQuoteDecimals:u.toExact(),gasUseEstimate:c.toString(),gasUseEstimateUSD:m.toExact(),gasPriceWei:p.toString(),route:g,routeString:Object(s.e)(i)}}var p=n(5),y=n(6),h=n(18),g=n(19),v=n(97),b=n(1246),f=n(53),I=n(312);var q=function(t){Object(h.a)(n,t);var e=Object(g.a)(n);function n(){return Object(p.a)(this,n),e.apply(this,arguments)}return Object(y.a)(n,[{key:"putDimensions",value:function(){}},{key:"putMetric",value:function(t,e,n){f.a.timing({category:"Routing API",variable:"".concat(t," | ").concat(n),value:e,label:"client"})}}]),n}(s.c);Object(s.f)(new q);var w=function(){var t,e={},n=Object(d.a)(I.a);try{for(n.s();!(t=n.n()).done;){var a=t.value,r=new b.providers.JsonRpcProvider(v.b[a]);e[a]={chainId:a,provider:r}}}catch(o){n.e(o)}finally{n.f()}return e}();function S(t,e){return k.apply(this,arguments)}function k(){return(k=Object(o.a)(r.a.mark((function t(e,n){var a,o,c,d,l,p,y,h,g,v,b,f,I;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a=e.type,o=e.chainId,c=e.tokenIn,d=e.tokenOut,l=e.amount,p=w[o]){t.next=4;break}throw new Error("Router dependencies not initialized.");case 4:return y=new s.a(p),h=new i.Token(c.chainId,c.address,c.decimals,c.symbol),g=new i.Token(d.chainId,d.address,d.decimals,d.symbol),v="exactIn"===a?h:g,b="exactIn"===a?g:h,f=i.CurrencyAmount.fromRawAmount(v,u.a.BigInt(l)),t.next=12,y.route(f,b,"exactIn"===a?i.TradeType.EXACT_INPUT:i.TradeType.EXACT_OUTPUT,void 0,n);case 12:if(I=t.sent){t.next=15;break}throw new Error("Failed to generate client side quote");case 15:return t.abrupt("return",{data:m(a,f,I)});case 16:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=80.483364cb.chunk.js.map