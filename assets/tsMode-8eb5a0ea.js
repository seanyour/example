var M=Object.defineProperty;var K=(e,t,r)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var _=(e,t,r)=>(K(e,typeof t!="symbol"?t+"":t,r),r);import{t as R,m as E}from"./Json-83ce2868.js";import"./index-8e5f22ce.js";/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.36.0(f86fe937752be8a628c17cecfdfb3287475997ec)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var L=Object.defineProperty,H=Object.getOwnPropertyDescriptor,V=Object.getOwnPropertyNames,W=Object.prototype.hasOwnProperty,j=(e,t,r)=>t in e?L(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,T=(e,t,r,l)=>{if(t&&typeof t=="object"||typeof t=="function")for(let s of V(t))!W.call(e,s)&&s!==r&&L(e,s,{get:()=>t[s],enumerable:!(l=H(t,s))||l.enumerable});return e},B=(e,t,r)=>(T(e,t,"default"),r&&T(r,t,"default")),h=(e,t,r)=>(j(e,typeof t!="symbol"?t+"":t,r),r),i={};B(i,E);var U=class{constructor(e,t){_(this,"_configChangeListener");_(this,"_updateExtraLibsToken");_(this,"_extraLibsChangeListener");_(this,"_worker");_(this,"_client");this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange(()=>this._stopWorker()),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange(()=>this._updateExtraLibs())}dispose(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}async _updateExtraLibs(){if(!this._worker)return;const e=++this._updateExtraLibsToken,t=await this._worker.getProxy();this._updateExtraLibsToken===e&&t.updateExtraLibs(this._defaults.getExtraLibs())}_getClient(){return this._client||(this._client=(async()=>(this._worker=i.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath,inlayHintsOptions:this._defaults.inlayHintsOptions}}),this._defaults.getEagerModelSync()?await this._worker.withSyncedResources(i.editor.getModels().filter(e=>e.getLanguageId()===this._modeId).map(e=>e.uri)):await this._worker.getProxy()))()),this._client}async getLanguageServiceWorker(...e){const t=await this._getClient();return this._worker&&await this._worker.withSyncedResources(e),t}},o={};o["lib.d.ts"]=!0;o["lib.dom.d.ts"]=!0;o["lib.dom.iterable.d.ts"]=!0;o["lib.es2015.collection.d.ts"]=!0;o["lib.es2015.core.d.ts"]=!0;o["lib.es2015.d.ts"]=!0;o["lib.es2015.generator.d.ts"]=!0;o["lib.es2015.iterable.d.ts"]=!0;o["lib.es2015.promise.d.ts"]=!0;o["lib.es2015.proxy.d.ts"]=!0;o["lib.es2015.reflect.d.ts"]=!0;o["lib.es2015.symbol.d.ts"]=!0;o["lib.es2015.symbol.wellknown.d.ts"]=!0;o["lib.es2016.array.include.d.ts"]=!0;o["lib.es2016.d.ts"]=!0;o["lib.es2016.full.d.ts"]=!0;o["lib.es2017.d.ts"]=!0;o["lib.es2017.full.d.ts"]=!0;o["lib.es2017.intl.d.ts"]=!0;o["lib.es2017.object.d.ts"]=!0;o["lib.es2017.sharedmemory.d.ts"]=!0;o["lib.es2017.string.d.ts"]=!0;o["lib.es2017.typedarrays.d.ts"]=!0;o["lib.es2018.asyncgenerator.d.ts"]=!0;o["lib.es2018.asynciterable.d.ts"]=!0;o["lib.es2018.d.ts"]=!0;o["lib.es2018.full.d.ts"]=!0;o["lib.es2018.intl.d.ts"]=!0;o["lib.es2018.promise.d.ts"]=!0;o["lib.es2018.regexp.d.ts"]=!0;o["lib.es2019.array.d.ts"]=!0;o["lib.es2019.d.ts"]=!0;o["lib.es2019.full.d.ts"]=!0;o["lib.es2019.object.d.ts"]=!0;o["lib.es2019.string.d.ts"]=!0;o["lib.es2019.symbol.d.ts"]=!0;o["lib.es2020.bigint.d.ts"]=!0;o["lib.es2020.d.ts"]=!0;o["lib.es2020.full.d.ts"]=!0;o["lib.es2020.intl.d.ts"]=!0;o["lib.es2020.promise.d.ts"]=!0;o["lib.es2020.sharedmemory.d.ts"]=!0;o["lib.es2020.string.d.ts"]=!0;o["lib.es2020.symbol.wellknown.d.ts"]=!0;o["lib.es2021.d.ts"]=!0;o["lib.es2021.full.d.ts"]=!0;o["lib.es2021.intl.d.ts"]=!0;o["lib.es2021.promise.d.ts"]=!0;o["lib.es2021.string.d.ts"]=!0;o["lib.es2021.weakref.d.ts"]=!0;o["lib.es5.d.ts"]=!0;o["lib.es6.d.ts"]=!0;o["lib.esnext.d.ts"]=!0;o["lib.esnext.full.d.ts"]=!0;o["lib.esnext.intl.d.ts"]=!0;o["lib.esnext.promise.d.ts"]=!0;o["lib.esnext.string.d.ts"]=!0;o["lib.esnext.weakref.d.ts"]=!0;o["lib.scripthost.d.ts"]=!0;o["lib.webworker.d.ts"]=!0;o["lib.webworker.importscripts.d.ts"]=!0;o["lib.webworker.iterable.d.ts"]=!0;function F(e,t,r=0){if(typeof e=="string")return e;if(e===void 0)return"";let l="";if(r){l+=t;for(let s=0;s<r;s++)l+="  "}if(l+=e.messageText,r++,e.next)for(const s of e.next)l+=F(s,t,r);return l}function k(e){return e?e.map(t=>t.text).join(""):""}var w=class{constructor(e){this._worker=e}_textSpanToRange(e,t){let r=e.getPositionAt(t.start),l=e.getPositionAt(t.start+t.length),{lineNumber:s,column:g}=r,{lineNumber:u,column:a}=l;return{startLineNumber:s,startColumn:g,endLineNumber:u,endColumn:a}}},$=class{constructor(e){_(this,"_libFiles");_(this,"_hasFetchedLibFiles");_(this,"_fetchLibFilesPromise");this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}isLibFile(e){return e&&e.path.indexOf("/lib.")===0?!!o[e.path.slice(1)]:!1}getOrCreateModel(e){const t=i.Uri.parse(e),r=i.editor.getModel(t);if(r)return r;if(this.isLibFile(t)&&this._hasFetchedLibFiles)return i.editor.createModel(this._libFiles[t.path.slice(1)],"typescript",t);const l=R.getExtraLibs()[e];return l?i.editor.createModel(l.content,"typescript",t):null}_containsLibFile(e){for(let t of e)if(this.isLibFile(t))return!0;return!1}async fetchLibFilesIfNecessary(e){this._containsLibFile(e)&&await this._fetchLibFiles()}_fetchLibFiles(){return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then(e=>e.getLibFiles()).then(e=>{this._hasFetchedLibFiles=!0,this._libFiles=e})),this._fetchLibFilesPromise}},z=class extends w{constructor(t,r,l,s){super(s);_(this,"_disposables",[]);_(this,"_listener",Object.create(null));this._libFiles=t,this._defaults=r,this._selector=l;const g=n=>{if(n.getLanguageId()!==l)return;const p=()=>{const{onlyVisible:y}=this._defaults.getDiagnosticsOptions();y?n.isAttachedToEditor()&&this._doValidate(n):this._doValidate(n)};let d;const f=n.onDidChangeContent(()=>{clearTimeout(d),d=window.setTimeout(p,500)}),b=n.onDidChangeAttached(()=>{const{onlyVisible:y}=this._defaults.getDiagnosticsOptions();y&&(n.isAttachedToEditor()?p():i.editor.setModelMarkers(n,this._selector,[]))});this._listener[n.uri.toString()]={dispose(){f.dispose(),b.dispose(),clearTimeout(d)}},p()},u=n=>{i.editor.setModelMarkers(n,this._selector,[]);const p=n.uri.toString();this._listener[p]&&(this._listener[p].dispose(),delete this._listener[p])};this._disposables.push(i.editor.onDidCreateModel(n=>g(n))),this._disposables.push(i.editor.onWillDisposeModel(u)),this._disposables.push(i.editor.onDidChangeModelLanguage(n=>{u(n.model),g(n.model)})),this._disposables.push({dispose(){for(const n of i.editor.getModels())u(n)}});const a=()=>{for(const n of i.editor.getModels())u(n),g(n)};this._disposables.push(this._defaults.onDidChange(a)),this._disposables.push(this._defaults.onDidExtraLibsChange(a)),i.editor.getModels().forEach(n=>g(n))}dispose(){this._disposables.forEach(t=>t&&t.dispose()),this._disposables=[]}async _doValidate(t){const r=await this._worker(t.uri);if(t.isDisposed())return;const l=[],{noSyntaxValidation:s,noSemanticValidation:g,noSuggestionDiagnostics:u}=this._defaults.getDiagnosticsOptions();s||l.push(r.getSyntacticDiagnostics(t.uri.toString())),g||l.push(r.getSemanticDiagnostics(t.uri.toString())),u||l.push(r.getSuggestionDiagnostics(t.uri.toString()));const a=await Promise.all(l);if(!a||t.isDisposed())return;const n=a.reduce((d,f)=>f.concat(d),[]).filter(d=>(this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(d.code)===-1),p=n.map(d=>d.relatedInformation||[]).reduce((d,f)=>f.concat(d),[]).map(d=>d.file?i.Uri.parse(d.file.fileName):null);await this._libFiles.fetchLibFilesIfNecessary(p),!t.isDisposed()&&i.editor.setModelMarkers(t,this._selector,n.map(d=>this._convertDiagnostics(t,d)))}_convertDiagnostics(t,r){const l=r.start||0,s=r.length||1,{lineNumber:g,column:u}=t.getPositionAt(l),{lineNumber:a,column:n}=t.getPositionAt(l+s),p=[];return r.reportsUnnecessary&&p.push(i.MarkerTag.Unnecessary),r.reportsDeprecated&&p.push(i.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(r.category),startLineNumber:g,startColumn:u,endLineNumber:a,endColumn:n,message:F(r.messageText,`
`),code:r.code.toString(),tags:p,relatedInformation:this._convertRelatedInformation(t,r.relatedInformation)}}_convertRelatedInformation(t,r){if(!r)return[];const l=[];return r.forEach(s=>{let g=t;if(s.file&&(g=this._libFiles.getOrCreateModel(s.file.fileName)),!g)return;const u=s.start||0,a=s.length||1,{lineNumber:n,column:p}=g.getPositionAt(u),{lineNumber:d,column:f}=g.getPositionAt(u+a);l.push({resource:g.uri,startLineNumber:n,startColumn:p,endLineNumber:d,endColumn:f,message:F(s.messageText,`
`)})}),l}_tsDiagnosticCategoryToMarkerSeverity(t){switch(t){case 1:return i.MarkerSeverity.Error;case 3:return i.MarkerSeverity.Info;case 0:return i.MarkerSeverity.Warning;case 2:return i.MarkerSeverity.Hint}return i.MarkerSeverity.Info}},C=class extends w{get triggerCharacters(){return["."]}async provideCompletionItems(e,t,r,l){const s=e.getWordUntilPosition(t),g=new i.Range(t.lineNumber,s.startColumn,t.lineNumber,s.endColumn),u=e.uri,a=e.getOffsetAt(t),n=await this._worker(u);if(e.isDisposed())return;const p=await n.getCompletionsAtPosition(u.toString(),a);return!p||e.isDisposed()?void 0:{suggestions:p.entries.map(f=>{let b=g;if(f.replacementSpan){const x=e.getPositionAt(f.replacementSpan.start),v=e.getPositionAt(f.replacementSpan.start+f.replacementSpan.length);b=new i.Range(x.lineNumber,x.column,v.lineNumber,v.column)}const y=[];return f.kindModifiers!==void 0&&f.kindModifiers.indexOf("deprecated")!==-1&&y.push(i.languages.CompletionItemTag.Deprecated),{uri:u,position:t,offset:a,range:b,label:f.name,insertText:f.name,sortText:f.sortText,kind:C.convertKind(f.kind),tags:y}})}}async resolveCompletionItem(e,t){const r=e,l=r.uri,s=r.position,g=r.offset,a=await(await this._worker(l)).getCompletionEntryDetails(l.toString(),g,r.label);return a?{uri:l,position:s,label:a.name,kind:C.convertKind(a.kind),detail:k(a.displayParts),documentation:{value:C.createDocumentationString(a)}}:r}static convertKind(e){switch(e){case c.primitiveType:case c.keyword:return i.languages.CompletionItemKind.Keyword;case c.variable:case c.localVariable:return i.languages.CompletionItemKind.Variable;case c.memberVariable:case c.memberGetAccessor:case c.memberSetAccessor:return i.languages.CompletionItemKind.Field;case c.function:case c.memberFunction:case c.constructSignature:case c.callSignature:case c.indexSignature:return i.languages.CompletionItemKind.Function;case c.enum:return i.languages.CompletionItemKind.Enum;case c.module:return i.languages.CompletionItemKind.Module;case c.class:return i.languages.CompletionItemKind.Class;case c.interface:return i.languages.CompletionItemKind.Interface;case c.warning:return i.languages.CompletionItemKind.File}return i.languages.CompletionItemKind.Property}static createDocumentationString(e){let t=k(e.documentation);if(e.tags)for(const r of e.tags)t+=`

${P(r)}`;return t}};function P(e){let t=`*@${e.name}*`;if(e.name==="param"&&e.text){const[r,...l]=e.text;t+=`\`${r.text}\``,l.length>0&&(t+=` — ${l.map(s=>s.text).join(" ")}`)}else Array.isArray(e.text)?t+=` — ${e.text.map(r=>r.text).join(" ")}`:e.text&&(t+=` — ${e.text}`);return t}var O=class extends w{constructor(){super(...arguments);_(this,"signatureHelpTriggerCharacters",["(",","])}static _toSignatureHelpTriggerReason(t){switch(t.triggerKind){case i.languages.SignatureHelpTriggerKind.TriggerCharacter:return t.triggerCharacter?t.isRetrigger?{kind:"retrigger",triggerCharacter:t.triggerCharacter}:{kind:"characterTyped",triggerCharacter:t.triggerCharacter}:{kind:"invoked"};case i.languages.SignatureHelpTriggerKind.ContentChange:return t.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case i.languages.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}}async provideSignatureHelp(t,r,l,s){const g=t.uri,u=t.getOffsetAt(r),a=await this._worker(g);if(t.isDisposed())return;const n=await a.getSignatureHelpItems(g.toString(),u,{triggerReason:O._toSignatureHelpTriggerReason(s)});if(!n||t.isDisposed())return;const p={activeSignature:n.selectedItemIndex,activeParameter:n.argumentIndex,signatures:[]};return n.items.forEach(d=>{const f={label:"",parameters:[]};f.documentation={value:k(d.documentation)},f.label+=k(d.prefixDisplayParts),d.parameters.forEach((b,y,x)=>{const v=k(b.displayParts),N={label:v,documentation:{value:k(b.documentation)}};f.label+=v,f.parameters.push(N),y<x.length-1&&(f.label+=k(d.separatorDisplayParts))}),f.label+=k(d.suffixDisplayParts),p.signatures.push(f)}),{value:p,dispose(){}}}},G=class extends w{async provideHover(e,t,r){const l=e.uri,s=e.getOffsetAt(t),g=await this._worker(l);if(e.isDisposed())return;const u=await g.getQuickInfoAtPosition(l.toString(),s);if(!u||e.isDisposed())return;const a=k(u.documentation),n=u.tags?u.tags.map(d=>P(d)).join(`  

`):"",p=k(u.displayParts);return{range:this._textSpanToRange(e,u.textSpan),contents:[{value:"```typescript\n"+p+"\n```\n"},{value:a+(n?`

`+n:"")}]}}},J=class extends w{async provideDocumentHighlights(e,t,r){const l=e.uri,s=e.getOffsetAt(t),g=await this._worker(l);if(e.isDisposed())return;const u=await g.getOccurrencesAtPosition(l.toString(),s);if(!(!u||e.isDisposed()))return u.map(a=>({range:this._textSpanToRange(e,a.textSpan),kind:a.isWriteAccess?i.languages.DocumentHighlightKind.Write:i.languages.DocumentHighlightKind.Text}))}},Q=class extends w{constructor(e,t){super(t),this._libFiles=e}async provideDefinition(e,t,r){const l=e.uri,s=e.getOffsetAt(t),g=await this._worker(l);if(e.isDisposed())return;const u=await g.getDefinitionAtPosition(l.toString(),s);if(!u||e.isDisposed()||(await this._libFiles.fetchLibFilesIfNecessary(u.map(n=>i.Uri.parse(n.fileName))),e.isDisposed()))return;const a=[];for(let n of u){const p=this._libFiles.getOrCreateModel(n.fileName);p&&a.push({uri:p.uri,range:this._textSpanToRange(p,n.textSpan)})}return a}},q=class extends w{constructor(e,t){super(t),this._libFiles=e}async provideReferences(e,t,r,l){const s=e.uri,g=e.getOffsetAt(t),u=await this._worker(s);if(e.isDisposed())return;const a=await u.getReferencesAtPosition(s.toString(),g);if(!a||e.isDisposed()||(await this._libFiles.fetchLibFilesIfNecessary(a.map(p=>i.Uri.parse(p.fileName))),e.isDisposed()))return;const n=[];for(let p of a){const d=this._libFiles.getOrCreateModel(p.fileName);d&&n.push({uri:d.uri,range:this._textSpanToRange(d,p.textSpan)})}return n}},X=class extends w{async provideDocumentSymbols(e,t){const r=e.uri,l=await this._worker(r);if(e.isDisposed())return;const s=await l.getNavigationBarItems(r.toString());if(!s||e.isDisposed())return;const g=(a,n,p)=>{let d={name:n.text,detail:"",kind:m[n.kind]||i.languages.SymbolKind.Variable,range:this._textSpanToRange(e,n.spans[0]),selectionRange:this._textSpanToRange(e,n.spans[0]),tags:[]};if(p&&(d.containerName=p),n.childItems&&n.childItems.length>0)for(let f of n.childItems)g(a,f,d.name);a.push(d)};let u=[];return s.forEach(a=>g(u,a)),u}},c=class{};h(c,"unknown","");h(c,"keyword","keyword");h(c,"script","script");h(c,"module","module");h(c,"class","class");h(c,"interface","interface");h(c,"type","type");h(c,"enum","enum");h(c,"variable","var");h(c,"localVariable","local var");h(c,"function","function");h(c,"localFunction","local function");h(c,"memberFunction","method");h(c,"memberGetAccessor","getter");h(c,"memberSetAccessor","setter");h(c,"memberVariable","property");h(c,"constructorImplementation","constructor");h(c,"callSignature","call");h(c,"indexSignature","index");h(c,"constructSignature","construct");h(c,"parameter","parameter");h(c,"typeParameter","type parameter");h(c,"primitiveType","primitive type");h(c,"label","label");h(c,"alias","alias");h(c,"const","const");h(c,"let","let");h(c,"warning","warning");var m=Object.create(null);m[c.module]=i.languages.SymbolKind.Module;m[c.class]=i.languages.SymbolKind.Class;m[c.enum]=i.languages.SymbolKind.Enum;m[c.interface]=i.languages.SymbolKind.Interface;m[c.memberFunction]=i.languages.SymbolKind.Method;m[c.memberVariable]=i.languages.SymbolKind.Property;m[c.memberGetAccessor]=i.languages.SymbolKind.Property;m[c.memberSetAccessor]=i.languages.SymbolKind.Property;m[c.variable]=i.languages.SymbolKind.Variable;m[c.const]=i.languages.SymbolKind.Variable;m[c.localVariable]=i.languages.SymbolKind.Variable;m[c.variable]=i.languages.SymbolKind.Variable;m[c.function]=i.languages.SymbolKind.Function;m[c.localFunction]=i.languages.SymbolKind.Function;var S=class extends w{static _convertOptions(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:2,NewLineCharacter:`
`,InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}}_convertTextChanges(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}}},Y=class extends S{async provideDocumentRangeFormattingEdits(e,t,r,l){const s=e.uri,g=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),u=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),a=await this._worker(s);if(e.isDisposed())return;const n=await a.getFormattingEditsForRange(s.toString(),g,u,S._convertOptions(r));if(!(!n||e.isDisposed()))return n.map(p=>this._convertTextChanges(e,p))}},Z=class extends S{get autoFormatTriggerCharacters(){return[";","}",`
`]}async provideOnTypeFormattingEdits(e,t,r,l,s){const g=e.uri,u=e.getOffsetAt(t),a=await this._worker(g);if(e.isDisposed())return;const n=await a.getFormattingEditsAfterKeystroke(g.toString(),u,r,S._convertOptions(l));if(!(!n||e.isDisposed()))return n.map(p=>this._convertTextChanges(e,p))}},ee=class extends S{async provideCodeActions(e,t,r,l){const s=e.uri,g=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),u=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),a=S._convertOptions(e.getOptions()),n=r.markers.filter(b=>b.code).map(b=>b.code).map(Number),p=await this._worker(s);if(e.isDisposed())return;const d=await p.getCodeFixesAtPosition(s.toString(),g,u,n,a);return!d||e.isDisposed()?{actions:[],dispose:()=>{}}:{actions:d.filter(b=>b.changes.filter(y=>y.isNewFile).length===0).map(b=>this._tsCodeFixActionToMonacoCodeAction(e,r,b)),dispose:()=>{}}}_tsCodeFixActionToMonacoCodeAction(e,t,r){const l=[];for(const g of r.changes)for(const u of g.textChanges)l.push({resource:e.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(e,u.span),text:u.newText}});return{title:r.description,edit:{edits:l},diagnostics:t.markers,kind:"quickfix"}}},te=class extends w{constructor(e,t){super(t),this._libFiles=e}async provideRenameEdits(e,t,r,l){const s=e.uri,g=s.toString(),u=e.getOffsetAt(t),a=await this._worker(s);if(e.isDisposed())return;const n=await a.getRenameInfo(g,u,{allowRenameOfImportPath:!1});if(n.canRename===!1)return{edits:[],rejectReason:n.localizedErrorMessage};if(n.fileToRename!==void 0)throw new Error("Renaming files is not supported.");const p=await a.findRenameLocations(g,u,!1,!1,!1);if(!p||e.isDisposed())return;const d=[];for(const f of p){const b=this._libFiles.getOrCreateModel(f.fileName);if(b)d.push({resource:b.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(b,f.textSpan),text:r}});else throw new Error(`Unknown file ${f.fileName}.`)}return{edits:d}}},re=class extends w{async provideInlayHints(e,t,r){const l=e.uri,s=l.toString(),g=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),u=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),a=await this._worker(l);return e.isDisposed()?null:{hints:(await a.provideInlayHints(s,g,u)).map(d=>({...d,label:d.text,position:e.getPositionAt(d.position),kind:this._convertHintKind(d.kind)})),dispose:()=>{}}}_convertHintKind(e){switch(e){case"Parameter":return i.languages.InlayHintKind.Parameter;case"Type":return i.languages.InlayHintKind.Type;default:return i.languages.InlayHintKind.Type}}},A,D;function oe(e){D=I(e,"typescript")}function le(e){A=I(e,"javascript")}function ce(){return new Promise((e,t)=>{if(!A)return t("JavaScript not registered!");e(A)})}function ue(){return new Promise((e,t)=>{if(!D)return t("TypeScript not registered!");e(D)})}function I(e,t){const r=[],l=new U(t,e),s=(...a)=>l.getLanguageServiceWorker(...a),g=new $(s);function u(){const{modeConfiguration:a}=e;se(r),a.completionItems&&r.push(i.languages.registerCompletionItemProvider(t,new C(s))),a.signatureHelp&&r.push(i.languages.registerSignatureHelpProvider(t,new O(s))),a.hovers&&r.push(i.languages.registerHoverProvider(t,new G(s))),a.documentHighlights&&r.push(i.languages.registerDocumentHighlightProvider(t,new J(s))),a.definitions&&r.push(i.languages.registerDefinitionProvider(t,new Q(g,s))),a.references&&r.push(i.languages.registerReferenceProvider(t,new q(g,s))),a.documentSymbols&&r.push(i.languages.registerDocumentSymbolProvider(t,new X(s))),a.rename&&r.push(i.languages.registerRenameProvider(t,new te(g,s))),a.documentRangeFormattingEdits&&r.push(i.languages.registerDocumentRangeFormattingEditProvider(t,new Y(s))),a.onTypeFormattingEdits&&r.push(i.languages.registerOnTypeFormattingEditProvider(t,new Z(s))),a.codeActions&&r.push(i.languages.registerCodeActionProvider(t,new ee(s))),a.inlayHints&&r.push(i.languages.registerInlayHintsProvider(t,new re(s))),a.diagnostics&&r.push(new z(g,e,t,s))}return u(),s}function se(e){for(;e.length;)e.pop().dispose()}export{w as Adapter,ee as CodeActionAdaptor,Q as DefinitionAdapter,z as DiagnosticsAdapter,Y as FormatAdapter,S as FormatHelper,Z as FormatOnTypeAdapter,re as InlayHintsAdapter,c as Kind,$ as LibFiles,J as OccurrencesAdapter,X as OutlineAdapter,G as QuickInfoAdapter,q as ReferenceAdapter,te as RenameAdapter,O as SignatureHelpAdapter,C as SuggestAdapter,U as WorkerManager,F as flattenDiagnosticMessageText,ce as getJavaScriptWorker,ue as getTypeScriptWorker,le as setupJavaScript,oe as setupTypeScript};