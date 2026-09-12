/* Optional Supabase accounts. Study pages work without this service. */
const accountCopy={
 en:{title:'Your Sprachoo account',intro:'Keep a personal vocabulary list and back it up to your account.',login:'Sign in',signup:'Create account',email:'Email',password:'Password',forgot:'Forgot password?',logout:'Sign out',unavailable:'Accounts are not available yet. You can keep studying and saving words on this device.',loading:'Connecting…',confirm:'Check your email to confirm your account, then sign in.',reset:'If this address can receive a reset email, a link will arrive shortly.',newPassword:'Set a new password',updated:'Password updated.',fail:'Could not complete this request. Check your connection and account details, then try again.',saveCloud:'Back up saved words',loadCloud:'Restore saved words',importGuest:'Copy this device’s guest words',cloudSaved:'Your vocabulary backup is up to date.',cloudLoaded:'Backup merged into your vocabulary.',localHint:'Words are saved on this device. Use Back up after editing; use Restore on another device. Study history and voice settings stay on this device.',guestHint:'Guest words stay on this device and are separate from account words.',working:'Please wait…',imported:'Guest words copied. Your original guest list is preserved.',verify:'Sign in to use your personal list.',emptyCloud:'No vocabulary backup exists yet.',savedLocal:'Words saved on this device.'},
 az:{title:'Sprachoo hesabın',intro:'Şəxsi söz siyahısı yarat və ehtiyat nüsxəsini hesabında saxla.',login:'Daxil ol',signup:'Hesab yarat',email:'E-poçt',password:'Şifrə',forgot:'Şifrəni unutmusan?',logout:'Hesabdan çıx',unavailable:'Hesablar hələ aktiv deyil. Bu cihazda öyrənməyə və söz saxlamağa davam edə bilərsən.',loading:'Qoşulur…',confirm:'Hesabını təsdiqləmək üçün e-poçtunu yoxla, sonra daxil ol.',reset:'Bu ünvana şifrə yeniləmə məktubu göndərmək mümkündürsə, keçid tezliklə gələcək.',newPassword:'Yeni şifrə təyin et',updated:'Şifrə yeniləndi.',fail:'Sorğunu tamamlamaq mümkün olmadı. İnternet bağlantısını və hesab məlumatlarını yoxlayıb yenidən sına.',saveCloud:'Sözlərin ehtiyat nüsxəsini saxla',loadCloud:'Sözləri ehtiyat nüsxədən bərpa et',importGuest:'Bu cihazdakı qonaq sözlərini köçür',cloudSaved:'Söz siyahısının ehtiyat nüsxəsi yeniləndi.',cloudLoaded:'Ehtiyat nüsxədəki sözlər siyahıya əlavə edildi.',localHint:'Sözlər bu cihazda saxlanılır. Dəyişiklikdən sonra ehtiyat nüsxə yarat; başqa cihazda Bərpa et düyməsindən istifadə et. Məşq tarixçəsi və səs seçimi bu cihazda qalır.',guestHint:'Qonaq sözləri bu cihazda qalır və hesab sözlərindən ayrıdır.',working:'Gözlə…',imported:'Qonaq sözləri köçürüldü. İlkin siyahı da saxlanılır.',verify:'Şəxsi siyahından istifadə etmək üçün daxil ol.',emptyCloud:'Hələ söz siyahısının ehtiyat nüsxəsi yoxdur.',savedLocal:'Sözlər bu cihazda saxlanıldı.'}
};
function ac(k){return accountCopy[translationLanguage][k]||k;}
let accountClient=null,accountUser=null,accountMode='login',accountBusy=false,accountReady=false,accountMessage='';
let personalStorageKey='sprachoo-saved-words';
function accountNotice(key){accountMessage=key;const el=$('#accountStatus');if(el)el.textContent=ac(key);}
function cleanPersonalWords(list){
 if(!Array.isArray(list))return [];
 const seen=new Set();return list.filter(w=>w&&['de','en','az'].every(k=>typeof w[k]==='string'&&w[k].length>0&&w[k].length<=500)&&!seen.has(w.de)&&seen.add(w.de)).slice(0,3000).map(w=>({de:w.de,en:w.en,az:w.az,level:courseLevels.includes(w.level)?w.level:'A1',plural:typeof w.plural==='string'?w.plural.slice(0,200):'',forms:typeof w.forms==='string'?w.forms.slice(0,300):'',note:typeof w.note==='string'?w.note.slice(0,800):''}));
}
function setAccountUser(user){
 const newID=user?.id||null,oldID=accountUser?.id||null;accountUser=user||null;
 if(newID!==oldID){personalStorageKey=newID?'sprachoo-saved-words-user-'+newID:'sprachoo-saved-words';savedWords=cleanPersonalWords(readCourseStore(personalStorageKey,[]));renderSaved();decorateWordCards();practiceState=null;}
 renderAccount();
}
function renderAccount(){
 const target=$('#accountPanel');if(!target)return;
 $('#accountTitle').textContent=ac('title');$('#navAccount').textContent=translationLanguage==='az'?'Hesab':'Account';
 if(!accountReady){target.innerHTML=`<p>${ac(accountClient?'loading':'unavailable')}</p><a class="btn secondary" href="#saved">${ct('saved')} →</a>`;return;}
 if(accountUser&&accountMode!=='recovery'){
 target.innerHTML=`<p>${escapeHtml(accountUser.email||'')}</p><p>${ac('localHint')}</p><div class="account-actions"><button type="button" class="btn primary" data-account-action="backup">${ac('saveCloud')}</button><button type="button" class="btn secondary" data-account-action="restore">${ac('loadCloud')}</button><button type="button" class="btn secondary" data-account-action="import">${ac('importGuest')}</button><button type="button" class="btn secondary" data-account-action="logout">${ac('logout')}</button></div><p id="accountStatus" role="status">${accountMessage?ac(accountMessage):''}</p>`;
 }else{
 const recovery=accountMode==='recovery',signup=accountMode==='signup';
 target.innerHTML=`<p>${ac('intro')}</p>${recovery?'':`<div class="account-actions"><button type="button" class="btn secondary" data-account-mode="login" aria-pressed="${!signup}">${ac('login')}</button><button type="button" class="btn secondary" data-account-mode="signup" aria-pressed="${signup}">${ac('signup')}</button></div>`}<form id="accountForm">${recovery?'':`<label for="accountEmail">${ac('email')}</label><input id="accountEmail" name="email" type="email" autocomplete="email" required maxlength="254">`}<label for="accountPassword">${ac('password')}</label><input id="accountPassword" name="password" type="password" minlength="${signup||recovery?8:1}" maxlength="128" autocomplete="${signup||recovery?'new-password':'current-password'}" required><button type="submit" class="btn primary">${ac(recovery?'newPassword':signup?'signup':'login')}</button></form>${recovery?'':`<button type="button" class="btn secondary" data-account-action="reset">${ac('forgot')}</button>`}<p id="accountStatus" role="status">${accountMessage?ac(accountMessage):''}</p><p>${ac('guestHint')}</p>`;
 }
 target.querySelectorAll('button,input').forEach(el=>el.disabled=accountBusy);
}
async function withAccountAction(task){
 if(accountBusy||!accountClient||!accountReady)return;
 accountBusy=true;$('#accountPanel').querySelectorAll('button,input').forEach(el=>el.disabled=true);accountNotice('working');
 try{await task();}catch{accountNotice('fail');}
 finally{accountBusy=false;renderAccount();}
}
async function submitAccount(email,password){
 const mode=accountMode;await withAccountAction(async()=>{
  let result;
  if(mode==='recovery')result=await accountClient.auth.updateUser({password});
  else if(mode==='signup')result=await accountClient.auth.signUp({email,password,options:{emailRedirectTo:window.location.origin+window.location.pathname}});
  else result=await accountClient.auth.signInWithPassword({email,password});
  if(result.error)throw result.error;
  if(mode==='recovery'){accountMode='login';accountNotice('updated');}
  else if(mode==='signup'&&!result.data.session)accountNotice('confirm');
  else{setAccountUser(result.data.user);accountNotice('savedLocal');}
 });
}
async function accountAction(action,email){
 await withAccountAction(async()=>{
  const userID=accountUser?.id;
  if(action==='reset'){
   const {error}=await accountClient.auth.resetPasswordForEmail(email,{redirectTo:window.location.origin+window.location.pathname});if(error)throw error;accountNotice('reset');return;
  }
  if(!userID)throw Error('Sign in required');
  if(action==='logout'){const {error}=await accountClient.auth.signOut();if(error)throw error;accountMode='login';setAccountUser(null);accountMessage='';return;}
  if(action==='import'){
   const guest=cleanPersonalWords(readCourseStore('sprachoo-saved-words',[]));savedWords=cleanPersonalWords([...savedWords,...guest]);persistSavedWords();renderSaved();decorateWordCards();accountNotice('imported');return;
  }
  if(action==='backup'){
   const {error}=await accountClient.from('vocabulary_backups').upsert({user_id:userID,words:cleanPersonalWords(savedWords)},{onConflict:'user_id'});if(error)throw error;
   if(accountUser?.id===userID)accountNotice('cloudSaved');return;
  }
  if(action==='restore'){
   const {data,error}=await accountClient.from('vocabulary_backups').select('words').eq('user_id',userID).maybeSingle();if(error)throw error;
   if(accountUser?.id!==userID)return;
   if(!data){accountNotice('emptyCloud');return;}
   // Existing local notes win. Restore never removes current words.
   savedWords=cleanPersonalWords([...savedWords,...cleanPersonalWords(data.words)]);persistSavedWords();renderSaved();decorateWordCards();accountNotice('cloudLoaded');
  }
 });
}
async function initAccount(){
 renderAccount();
 const config=window.SPRACHOO_ACCOUNT_CONFIG||{};
 if(!/^https:\/\/[a-z0-9-]+\.supabase\.co\/?$/i.test(config.url||'')||!config.publishableKey)return;
 try{
  if(config.publishableKey.startsWith('sb_secret_'))throw Error('Public key required');
  if(config.publishableKey.startsWith('eyJ')){const payload=JSON.parse(atob(config.publishableKey.split('.')[1].replace(/-/g,'+').replace(/_/g,'/')));if(payload.role!=='anon')throw Error('Public key required');}
  const {createClient}=await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2.57.4/+esm');
  accountClient=createClient(config.url,config.publishableKey);accountReady=true;
  accountClient.auth.onAuthStateChange((event,session)=>{
   // No Supabase calls from the auth callback (avoids auth-lock deadlocks).
   if(event==='PASSWORD_RECOVERY'){accountMode='recovery';window.location.hash='account';}
   setAccountUser(session?.user||null);
  });
  const {data,error}=await accountClient.auth.getSession();if(error)throw error;setAccountUser(data.session?.user||null);
 }catch{accountClient=null;accountReady=false;renderAccount();}
}
document.addEventListener('submit',e=>{
 if(e.target.id!=='accountForm')return;e.preventDefault();
 const email=$('#accountEmail')?.value.trim()||'',password=$('#accountPassword').value;
 submitAccount(email,password);
});
document.addEventListener('click',e=>{
 const mode=e.target.closest('[data-account-mode]');if(mode&&!accountBusy){accountMode=mode.dataset.accountMode;accountMessage='';renderAccount();}
 const action=e.target.closest('[data-account-action]');if(!action||accountBusy)return;
 let email='';if(action.dataset.accountAction==='reset'){const field=$('#accountEmail');if(!field?.reportValidity())return;email=field.value.trim();}
 accountAction(action.dataset.accountAction,email);
});
initAccount();
