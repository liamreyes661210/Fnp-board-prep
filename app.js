const questions = [
  {
    id: 1, system: 'Respiratory', difficulty: 'Moderate', source: 'PDF p.43',
    stem: 'A patient uses albuterol about two times per week, has no shortness of breath, FEV1 is greater than 80%, and daily activity is not limited. How is the asthma classified?',
    options: ['Mild persistent asthma','Moderate persistent asthma','Intermittent asthma','Severe persistent asthma'], correct: 2,
    rationale: 'The source material classifies this pattern as intermittent asthma: infrequent rescue inhaler use, preserved FEV1, no current symptoms, and no limitation of daily activity.',
    optionWhy: [
      'This category implies a greater symptom burden than the scenario described.',
      'Moderate persistent asthma is associated with more frequent daytime/nighttime symptoms and lower lung function than described here.',
      'Correct. The PDF identifies this clinical pattern as intermittent asthma.',
      'Severe persistent asthma would involve substantially greater symptom frequency and impairment.'
    ], pearl: 'Board questions on asthma severity are pattern-recognition questions: compare symptom frequency, nighttime symptoms, rescue use, FEV1, and activity limitation.', sourceNote: 'Source basis: PDF item 466.'
  },
  {
    id: 2, system: 'Cardiovascular', difficulty: 'Moderate', source: 'PDF p.32',
    stem: 'A systolic murmur is best heard at the right second intercostal space and radiates to the neck. Which condition is most consistent with this finding?',
    options: ['Mitral regurgitation','Aortic stenosis','Aortic regurgitation','Mitral stenosis'], correct: 1,
    rationale: 'The source associates a systolic murmur at the right second intercostal space that radiates to the neck with aortic stenosis.',
    optionWhy: ['Mitral regurgitation is described at the apex with radiation toward the axilla.','Correct. Aortic stenosis is described as a systolic murmur at the base/right second intercostal space radiating to the neck.','Aortic regurgitation is described as a diastolic murmur.','Mitral stenosis is described as a diastolic murmur heard at the apex.'],
    pearl: 'Radiation is a powerful clue: in the source, aortic stenosis radiates to the neck and mitral regurgitation radiates to the axilla.', sourceNote: 'Source basis: PDF items 373–381.'
  },
  {
    id: 3, system: 'Pharmacology', difficulty: 'Easy', source: 'PDF p.1',
    stem: 'What is the expected effect of a CYP450 inhibitor on drug metabolism and drug concentration?',
    options: ['Faster metabolism and lower concentration','Slower metabolism and higher concentration','No change in metabolism','Faster metabolism and higher concentration'], correct: 1,
    rationale: 'The source states that CYP450 inhibition slows drug metabolism/clearance and increases drug concentration, which may increase adverse-effect risk.',
    optionWhy: ['This describes an effect opposite to CYP450 inhibition.','Correct. The PDF repeatedly states that inhibition slows metabolism and increases drug concentration.','The source specifically describes a meaningful change in metabolism and concentration.','Faster metabolism would generally lower, not raise, concentration in the source framework.'],
    pearl: 'Source mnemonic: inducers increase clearance and decrease concentration; inhibitors slow clearance and increase concentration.', sourceNote: 'Source basis: PDF items 2–4.'
  },
  {
    id: 4, system: 'Dermatology', difficulty: 'Easy', source: 'PDF p.23',
    stem: 'An annular, pruritic lesion has a raised border with central clearing. Which diagnosis is most consistent with the source material?',
    options: ['Tinea corporis','Pityriasis rosea','Scabies','Candida intertrigo'], correct: 0,
    rationale: 'The source describes tinea corporis as a pruritic, enlarged, raised lesion with central clearing and scaling.',
    optionWhy: ['Correct. This morphology matches the source description of tinea corporis.','Pityriasis rosea is described with a herald patch/Christmas-tree pattern.','Scabies is associated with nocturnal pruritus and linear burrows between fingers.','Candida intertrigo is described as bright-red shiny lesions in intertriginous areas with possible satellite lesions.'],
    pearl: 'For dermatology board questions, morphology + distribution often provides the diagnosis before treatment details are considered.', sourceNote: 'Source basis: PDF items 250–263.'
  },
  {
    id: 5, system: 'Endocrine', difficulty: 'Moderate', source: 'PDF p.47',
    stem: 'A hypothyroid patient taking levothyroxine has an elevated TSH while free T4 remains in the normal range. In the source material, what action is recommended?',
    options: ['Stop levothyroxine','Decrease the dose','Increase the levothyroxine dose','Add methimazole'], correct: 2,
    rationale: 'The source examples state that an elevated TSH while on levothyroxine leads to an increase in the levothyroxine dose.',
    optionWhy: ['The source does not recommend stopping therapy for this pattern.','Dose reduction is described when TSH is suppressed/low.','Correct. The source recommends increasing the dose when TSH is elevated on therapy.','Methimazole is presented as treatment for hyperthyroidism, not hypothyroidism.'],
    pearl: 'In the source examples, TSH direction is used to guide levothyroxine adjustment: high TSH → increase; low TSH → decrease.', sourceNote: 'Source basis: PDF items 541–544.'
  },
  {
    id: 6, system: 'Neurological', difficulty: 'Moderate', source: 'PDF p.61',
    stem: 'A patient has brief episodes of vertigo triggered by head movement. Which bedside test is used in the source to support the diagnosis of benign paroxysmal positional vertigo?',
    options: ['Romberg test','Dix-Hallpike test','Weber test','Rinne test'], correct: 1,
    rationale: 'The source identifies the Dix-Hallpike test for benign paroxysmal positional vertigo and describes positional vertigo/nystagmus.',
    optionWhy: ['Romberg is presented as a balance assessment, not the key positional provocation test.','Correct. Dix-Hallpike is repeatedly listed as the diagnostic test for BPPV.','Weber evaluates hearing lateralization.','Rinne compares air and bone conduction.'],
    pearl: 'BPPV in the source: short episodes, triggered by head movement, primarily vertigo, treated with repositioning maneuvers.', sourceNote: 'Source basis: PDF items 742–749.'
  },
  {
    id: 7, system: 'Gastrointestinal', difficulty: 'Easy', source: 'PDF p.54',
    stem: 'Right upper quadrant pain after a fatty meal with nausea, vomiting, low-grade fever, and a positive Murphy sign is most consistent with which diagnosis?',
    options: ['Appendicitis','Diverticulitis','Cholecystitis','Pancreatitis'], correct: 2,
    rationale: 'The source links right upper quadrant pain, fatty meals, and a positive Murphy sign with cholecystitis.',
    optionWhy: ['Appendicitis is associated with right lower quadrant findings and McBurney/Rovsing/Psoas/Obturator maneuvers.','Diverticulitis is associated with left lower quadrant pain.','Correct. RUQ pain and Murphy sign point to cholecystitis in the source.','Pancreatitis can radiate to the back and is associated with elevated lipase/amylase, but the Murphy-sign pattern favors cholecystitis.'],
    pearl: 'Source location map: RUQ—cholecystitis/hepatitis/pancreatitis; RLQ—appendicitis; LLQ—diverticulitis.', sourceNote: 'Source basis: PDF items 641–649 and summary table.'
  },
  {
    id: 8, system: 'Hematology', difficulty: 'Moderate', source: 'PDF p.65',
    stem: 'Which laboratory test does the source identify as the best test to distinguish iron-deficiency anemia from other anemias?',
    options: ['Ferritin level','Platelet count','INR','Reticulocyte count only'], correct: 0,
    rationale: 'The source explicitly identifies ferritin as the best laboratory test for distinguishing iron-deficiency anemia from other anemias.',
    optionWhy: ['Correct. Ferritin is specifically highlighted for this purpose.','Platelet count is discussed elsewhere for thrombocytopenic processes.','INR is used for anticoagulation monitoring.','Reticulocytes are described as useful for monitoring marrow response to iron therapy rather than as the best discriminator at baseline.'],
    pearl: 'The source also uses MCV for cell size and RDW patterns as supporting clues when comparing anemia types.', sourceNote: 'Source basis: PDF items 801–809.'
  },
  {
    id: 9, system: 'Genito-Urinary', difficulty: 'Hard', source: 'PDF p.57',
    stem: 'A patient has low back pain radiating down both legs, urinary retention, bilateral lower-extremity weakness, and diminished sensation. What is the action emphasized in the source?',
    options: ['Routine physical therapy','Refer for neurosurgical evaluation and obtain MRI','Start oxybutynin','Order a urinalysis only'], correct: 1,
    rationale: 'The source identifies this pattern as cauda equina syndrome and directs referral to neurosurgery with MRI.',
    optionWhy: ['The source treats this as an urgent neurologic syndrome, not a routine musculoskeletal complaint.','Correct. The source states referral to neurosurgery and MRI for this cauda equina pattern.','Oxybutynin is presented for urge incontinence, not this syndrome.','Urinalysis does not address the neurologic red-flag pattern described.'],
    pearl: 'Bilateral weakness + sensory change + urinary retention is a red-flag combination in the source material.', sourceNote: 'Source basis: PDF item 702.'
  },
  {
    id: 10, system: 'Eyes / ENT', difficulty: 'Moderate', source: 'PDF p.9',
    stem: 'An older patient develops sudden eye pain, blurred vision, headache, nausea, and vomiting. What does the source recommend?',
    options: ['Reassurance and outpatient follow-up','Treat as acute angle-closure glaucoma and refer to the ED','Warm compresses','Schedule routine visual acuity testing'], correct: 1,
    rationale: 'The source identifies this presentation as acute angle-closure glaucoma and recommends immediate emergency referral.',
    optionWhy: ['The source treats this as urgent because of the risk to vision.','Correct. Sudden eye pain with blurred vision, headache, and nausea/vomiting is listed as acute angle-closure glaucoma requiring ED referral.','Warm compresses are used for conditions such as hordeolum/chalazion in the source.','Routine testing would delay the urgent referral emphasized by the source.'],
    pearl: 'Sudden painful vision loss is a major ophthalmic red flag. In the source, angle-closure glaucoma requires immediate referral.', sourceNote: 'Source basis: PDF items 109–110.'
  }
];

const mastery = [
  ['Dermatology',88],['Cardiovascular',84],['Endocrine',79],['Neurological',77],['Gastrointestinal',73],['Pharmacology',69],['Respiratory',62]
];
const state = { current:0, answers:Array(questions.length).fill(null), saved:new Set([2,7]), startTime:Date.now(), timer:null };

function $(id){return document.getElementById(id)}
function toast(msg){const t=$('toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1700)}
function showView(id){document.querySelectorAll('.view').forEach(v=>v.classList.remove('active-view'));$(id).classList.add('active-view');document.querySelectorAll('.nav-item').forEach(b=>b.classList.toggle('active',b.dataset.view===id));window.scrollTo({top:0,behavior:'smooth'});document.querySelector('.sidebar')?.classList.remove('open')}

document.querySelectorAll('.nav-item').forEach(btn=>btn.addEventListener('click',()=>showView(btn.dataset.view)));
document.querySelectorAll('[data-jump]').forEach(btn=>btn.addEventListener('click',()=>showView(btn.dataset.jump)));
$('menuBtn').addEventListener('click',()=>document.querySelector('.sidebar').classList.toggle('open'));

function renderMastery(target='masteryList'){
  const el=$(target); if(!el) return; el.innerHTML='';
  mastery.forEach(([name,score])=>{const row=document.createElement('div');row.className='mastery-item '+(score<70?'low':score<80?'mid':'');row.innerHTML=`<div class="mastery-name">${name}</div><div class="mastery-track"><span style="width:${score}%"></span></div><div class="mastery-score">${score}%</div>`;el.appendChild(row)})
}
renderMastery();
$('performanceBars').innerHTML = mastery.map(([n,s])=>`<div class="mastery-item ${s<70?'low':s<80?'mid':''}"><div class="mastery-name">${n}</div><div class="mastery-track"><span style="width:${s}%"></span></div><div class="mastery-score">${s}%</div></div>`).join('');

function renderQuestion(){
  const q=questions[state.current], ans=state.answers[state.current];
  $('questionNumber').textContent=`Question ${state.current+1} of ${questions.length}`;
  $('questionSystem').textContent=q.system;$('difficultyBadge').textContent=q.difficulty;$('sourceBadge').textContent=q.source;$('questionText').textContent=q.stem;
  $('questionProgress').style.width=`${(state.current+1)/questions.length*100}%`;
  $('options').innerHTML='';
  q.options.forEach((opt,i)=>{const b=document.createElement('button');b.className='option';if(ans!==null){if(i===q.correct)b.classList.add('correct');if(i===ans&&ans!==q.correct)b.classList.add('incorrect');if(i===ans)b.classList.add('selected')}b.disabled=ans!==null;b.innerHTML=`<span class="option-letter">${String.fromCharCode(65+i)}</span><span>${opt}</span>`;b.addEventListener('click',()=>answerQuestion(i));$('options').appendChild(b)});
  if(ans===null){$('feedback').classList.add('hidden');$('feedback').innerHTML='';$('nextQuestion').disabled=true}else{renderFeedback(q,ans);$('nextQuestion').disabled=false}
  $('prevQuestion').disabled=state.current===0;
  $('nextQuestion').textContent=state.current===questions.length-1?'Finish session ✓':'Next question →';
  renderNavigator();updateSessionStats();
}
function answerQuestion(i){if(state.answers[state.current]!==null)return;state.answers[state.current]=i;renderQuestion()}
function renderFeedback(q,ans){
  const ok=ans===q.correct; const fb=$('feedback');fb.classList.remove('hidden');
  fb.innerHTML=`
    <div class="feedback-head ${ok?'correct-head':'incorrect-head'}"><div style="font-size:24px">${ok?'✓':'✕'}</div><div><h3>${ok?'Correct answer':'Incorrect answer'}</h3><p><strong>Your selection:</strong> ${String.fromCharCode(65+ans)}. ${q.options[ans]}${!ok?`<br><strong>Correct answer:</strong> ${String.fromCharCode(65+q.correct)}. ${q.options[q.correct]}`:''}</p></div></div>
    <div class="rationale-box correct-r"><strong>Clinical justification</strong><p>${q.rationale}</p></div>
    <div class="rationale-grid">${q.options.map((o,i)=>`<div class="rationale-box ${i===q.correct?'correct-r':'incorrect-r'}"><strong>${String.fromCharCode(65+i)}. ${o} ${i===q.correct?'— Correct':'— Why it is not the best answer'}</strong><p>${q.optionWhy[i]}</p></div>`).join('')}</div>
    <div class="board-pearl"><strong>◆ Board Pearl</strong><p>${q.pearl}</p></div>
    <div class="source-note">${q.sourceNote} · Prototype explanation generated from the source material and should undergo clinical guideline validation before production use.</div>`;
}
function renderNavigator(){const nav=$('questionNavigator');nav.innerHTML='';questions.forEach((q,i)=>{const b=document.createElement('button');b.className='qnav';if(i===state.current)b.classList.add('current');if(state.answers[i]!==null)b.classList.add(state.answers[i]===q.correct?'correct':'incorrect');b.textContent=i+1;b.addEventListener('click',()=>{state.current=i;renderQuestion()});nav.appendChild(b)})}
function updateSessionStats(){const answered=state.answers.filter(a=>a!==null).length;let correct=0;state.answers.forEach((a,i)=>{if(a===questions[i].correct)correct++});$('sessionAnswered').textContent=answered;$('sessionCorrect').textContent=correct;$('sessionAccuracy').textContent=answered?Math.round(correct/answered*100)+'%':'0%'}
$('prevQuestion').addEventListener('click',()=>{if(state.current>0){state.current--;renderQuestion()}});
$('nextQuestion').addEventListener('click',()=>{if(state.current<questions.length-1){state.current++;renderQuestion()}else{toast('Practice session complete — review your rationales.')}});
$('resetPractice').addEventListener('click',()=>{state.answers=Array(questions.length).fill(null);state.current=0;state.startTime=Date.now();renderQuestion();toast('Practice session reset')});
$('saveCurrent').addEventListener('click',()=>{state.saved.add(questions[state.current].id);renderSaved();toast('Question saved for review')});
setInterval(()=>{const s=Math.floor((Date.now()-state.startTime)/1000);$('practiceTimer').textContent=String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0')},1000);
renderQuestion();

function renderBank(){
  const qtxt=($('bankSearch')?.value||'').toLowerCase(), sys=$('bankSystem')?.value||'all';
  const rows=questions.filter(q=>(sys==='all'||q.system===sys)&&(q.stem.toLowerCase().includes(qtxt)||q.system.toLowerCase().includes(qtxt)));
  $('bankTable').innerHTML=`<div class="bank-row head"><div>ID</div><div>Question</div><div>System</div><div>Difficulty</div><div>Review state</div></div>`+rows.map(q=>`<div class="bank-row"><div>#${q.id}</div><div class="bank-q">${q.stem}</div><div><span class="chip">${q.system}</span></div><div>${q.difficulty}</div><div><span class="chip amber">Explanation generated</span></div></div>`).join('')
}
renderBank();$('bankSearch').addEventListener('input',renderBank);$('bankSystem').addEventListener('change',renderBank);

function renderSaved(){const arr=questions.filter(q=>state.saved.has(q.id));$('savedContainer').innerHTML=arr.length?arr.map(q=>`<article class="content-card"><span class="chip">${q.system}</span><h3>${q.stem}</h3><p>${q.pearl}</p><div class="card-footer"><span class="chip outline">${q.source}</span><button class="secondary" onclick="openQuestion(${q.id})">Review</button></div></article>`).join(''):`<article class="content-card"><h3>No saved questions yet</h3><p>Save difficult questions during practice to build a personalized review queue.</p></article>`}
renderSaved();window.openQuestion=id=>{state.current=questions.findIndex(q=>q.id===id);showView('practice');renderQuestion()};

const weak=[['Respiratory','Asthma severity, COPD treatment sequence, pneumonia differentiation',62,18],['Pharmacology','CYP interactions, anticoagulants, antihypertensive adverse effects',69,12],['Gastrointestinal','Abdominal pain localization and next-best diagnostic tests',73,9]];
$('weakCards').innerHTML=weak.map(([n,t,s,d])=>`<article class="content-card"><span class="chip amber">Priority ${100-s}</span><h3>${n} · ${s}%</h3><p>${t}</p><div class="card-footer"><span>${d} questions due</span><button class="primary" data-jump="practice">Practice</button></div></article>`).join('');
document.querySelectorAll('#weakCards [data-jump]').forEach(b=>b.addEventListener('click',()=>showView('practice')));

const pearls=[
  ['Pharmacology','CYP450 inhibitors','Slow drug metabolism/clearance and increase drug concentration in the source framework.'],
  ['Cardiovascular','Aortic stenosis','Systolic murmur at right 2nd intercostal space, radiating to the neck.'],
  ['Neurological','BPPV','Short positional episodes; Dix-Hallpike testing; repositioning maneuver treatment.'],
  ['Dermatology','Scabies','Linear burrows between fingers with itching, especially at night.'],
  ['Hematology','Iron deficiency anemia','Ferritin is highlighted as the best lab to distinguish iron deficiency from other anemias.'],
  ['Eyes / ENT','Angle-closure glaucoma','Sudden eye pain with visual symptoms is an emergency referral pattern in the source.']
];
$('pearlGrid').innerHTML=pearls.map(([s,t,d])=>`<article class="content-card"><span class="chip">${s}</span><h3>${t}</h3><p>${d}</p><div class="card-footer"><span class="chip outline">High-yield</span><button class="secondary">Add to review</button></div></article>`).join('');

$('reviewTable').innerHTML=questions.map(q=>`<tr><td>#${q.id}</td><td>${q.system}</td><td><span class="chip">PDF extracted</span></td><td><span class="chip amber">Generated</span></td><td><span class="chip outline">Pending</span></td></tr>`).join('');

document.querySelectorAll('#examLength button').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('#examLength button').forEach(x=>x.classList.remove('selected'));b.classList.add('selected')}));
$('startExam').addEventListener('click',()=>toast('Exam simulator workflow is wired for the next development phase.'));
$('globalSearch').addEventListener('keydown',e=>{if(e.key==='Enter'){const v=e.target.value.trim();if(v){showView('bank');$('bankSearch').value=v;renderBank()}}});
