export default function ThemeScript() {
  const script = `
(function(){try{var t=localStorage.getItem('theme');var d=document.documentElement;if(t==='dark'){d.classList.add('dark')}else if(t==='light'){d.classList.remove('dark')}else{d.classList.toggle('dark',window.matchMedia('(prefers-color-scheme:dark)').matches)}}catch(e){}})()
`.trim()

  return <script dangerouslySetInnerHTML={{ __html: script }} />
}
