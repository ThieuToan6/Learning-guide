/* ================================================================
   PROJECT THẬT — Music Club của sinh viên (nhúng nguyên văn từ project)
   Nguồn: E:\vidu\INS2112_Homework\project — giữ nguyên code thật để ôn vấn đáp.
   Ảnh preview dùng bản nén nhúng từ images/ để hoạt động trong iframe sandbox.
   ================================================================ */
const PROJECT = {
images: {
  "images/bass.jpg": "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22600%22%20height%3D%22400%22%20viewBox%3D%220%200%20600%20400%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23216792%22%2F%3E%3Cstop%20offset%3D%220.5%22%20stop-color%3D%22%23318ecc%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2334dbd3%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20id%3D%22d%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%231e3a8a%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23216792%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22600%22%20height%3D%22400%22%20fill%3D%22url%28%23g%29%22%2F%3E%3Cg%20opacity%3D%220.10%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%221%22%3E%3Cline%20x1%3D%220%22%20y1%3D%2240%22%20x2%3D%22600%22%20y2%3D%2240%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%2280%22%20x2%3D%22600%22%20y2%3D%2280%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22120%22%20x2%3D%22600%22%20y2%3D%22120%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22160%22%20x2%3D%22600%22%20y2%3D%22160%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22200%22%20x2%3D%22600%22%20y2%3D%22200%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22240%22%20x2%3D%22600%22%20y2%3D%22240%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22280%22%20x2%3D%22600%22%20y2%3D%22280%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22320%22%20x2%3D%22600%22%20y2%3D%22320%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22360%22%20x2%3D%22600%22%20y2%3D%22360%22%2F%3E%3Cline%20x1%3D%2240%22%20y1%3D%220%22%20x2%3D%2240%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%2280%22%20y1%3D%220%22%20x2%3D%2280%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22120%22%20y1%3D%220%22%20x2%3D%22120%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22160%22%20y1%3D%220%22%20x2%3D%22160%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22200%22%20y1%3D%220%22%20x2%3D%22200%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22240%22%20y1%3D%220%22%20x2%3D%22240%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22280%22%20y1%3D%220%22%20x2%3D%22280%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22320%22%20y1%3D%220%22%20x2%3D%22320%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22360%22%20y1%3D%220%22%20x2%3D%22360%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22400%22%20y1%3D%220%22%20x2%3D%22400%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22440%22%20y1%3D%220%22%20x2%3D%22440%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22480%22%20y1%3D%220%22%20x2%3D%22480%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22520%22%20y1%3D%220%22%20x2%3D%22520%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22560%22%20y1%3D%220%22%20x2%3D%22560%22%20y2%3D%22400%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate%28300%2C185%29%22%3E%3Crect%20x%3D%22-14%22%20y%3D%22-150%22%20width%3D%2228%22%20height%3D%22150%22%20rx%3D%226%22%20fill%3D%22%231e3a8a%22%2F%3E%3Crect%20x%3D%22-22%22%20y%3D%22-176%22%20width%3D%2244%22%20height%3D%2230%22%20rx%3D%226%22%20fill%3D%22%230e2a6b%22%2F%3E%3Cellipse%20cx%3D%220%22%20cy%3D%2260%22%20rx%3D%2284%22%20ry%3D%22112%22%20fill%3D%22%23eaf2ff%22%2F%3E%3Cellipse%20cx%3D%220%22%20cy%3D%2220%22%20rx%3D%2266%22%20ry%3D%2270%22%20fill%3D%22%23bfdbfe%22%2F%3E%3Ccircle%20cx%3D%220%22%20cy%3D%2255%22%20r%3D%2230%22%20fill%3D%22%231e3a8a%22%2F%3E%3Cg%20stroke%3D%22%2393c5fd%22%20stroke-width%3D%222%22%3E%3Cline%20x1%3D%22-8%22%20y1%3D%22-150%22%20x2%3D%22-8%22%20y2%3D%22120%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22-150%22%20x2%3D%220%22%20y2%3D%22120%22%2F%3E%3Cline%20x1%3D%228%22%20y1%3D%22-150%22%20x2%3D%228%22%20y2%3D%22120%22%2F%3E%3C%2Fg%3E%3Crect%20x%3D%22-30%22%20y%3D%22118%22%20width%3D%2260%22%20height%3D%2210%22%20rx%3D%223%22%20fill%3D%22%230e2a6b%22%2F%3E%3C%2Fg%3E%3Crect%20x%3D%220%22%20y%3D%22354%22%20width%3D%22600%22%20height%3D%2246%22%20fill%3D%22url%28%23d%29%22%20opacity%3D%220.92%22%2F%3E%3Ctext%20x%3D%22300.0%22%20y%3D%22383%22%20font-family%3D%22Georgia%2Cserif%22%20font-size%3D%2220%22%20fill%3D%22%23eaf2ff%22%20text-anchor%3D%22middle%22%3Ebass.jpg%3C%2Ftext%3E%3C%2Fsvg%3E",
  "images/guitar.jpg": "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22600%22%20height%3D%22400%22%20viewBox%3D%220%200%20600%20400%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23216792%22%2F%3E%3Cstop%20offset%3D%220.5%22%20stop-color%3D%22%23318ecc%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2334dbd3%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20id%3D%22d%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%231e3a8a%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23216792%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22600%22%20height%3D%22400%22%20fill%3D%22url%28%23g%29%22%2F%3E%3Cg%20opacity%3D%220.10%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%221%22%3E%3Cline%20x1%3D%220%22%20y1%3D%2240%22%20x2%3D%22600%22%20y2%3D%2240%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%2280%22%20x2%3D%22600%22%20y2%3D%2280%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22120%22%20x2%3D%22600%22%20y2%3D%22120%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22160%22%20x2%3D%22600%22%20y2%3D%22160%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22200%22%20x2%3D%22600%22%20y2%3D%22200%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22240%22%20x2%3D%22600%22%20y2%3D%22240%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22280%22%20x2%3D%22600%22%20y2%3D%22280%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22320%22%20x2%3D%22600%22%20y2%3D%22320%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22360%22%20x2%3D%22600%22%20y2%3D%22360%22%2F%3E%3Cline%20x1%3D%2240%22%20y1%3D%220%22%20x2%3D%2240%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%2280%22%20y1%3D%220%22%20x2%3D%2280%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22120%22%20y1%3D%220%22%20x2%3D%22120%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22160%22%20y1%3D%220%22%20x2%3D%22160%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22200%22%20y1%3D%220%22%20x2%3D%22200%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22240%22%20y1%3D%220%22%20x2%3D%22240%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22280%22%20y1%3D%220%22%20x2%3D%22280%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22320%22%20y1%3D%220%22%20x2%3D%22320%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22360%22%20y1%3D%220%22%20x2%3D%22360%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22400%22%20y1%3D%220%22%20x2%3D%22400%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22440%22%20y1%3D%220%22%20x2%3D%22440%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22480%22%20y1%3D%220%22%20x2%3D%22480%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22520%22%20y1%3D%220%22%20x2%3D%22520%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22560%22%20y1%3D%220%22%20x2%3D%22560%22%20y2%3D%22400%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate%28300%2C190%29%22%3E%3Crect%20x%3D%22-14%22%20y%3D%22-150%22%20width%3D%2228%22%20height%3D%22150%22%20rx%3D%226%22%20fill%3D%22%231e3a8a%22%2F%3E%3Crect%20x%3D%22-22%22%20y%3D%22-176%22%20width%3D%2244%22%20height%3D%2230%22%20rx%3D%226%22%20fill%3D%22%230e2a6b%22%2F%3E%3Cellipse%20cx%3D%220%22%20cy%3D%2260%22%20rx%3D%2292%22%20ry%3D%22104%22%20fill%3D%22%23eaf2ff%22%2F%3E%3Cellipse%20cx%3D%220%22%20cy%3D%2220%22%20rx%3D%2266%22%20ry%3D%2270%22%20fill%3D%22%23bfdbfe%22%2F%3E%3Ccircle%20cx%3D%220%22%20cy%3D%2255%22%20r%3D%2230%22%20fill%3D%22%231e3a8a%22%2F%3E%3Cg%20stroke%3D%22%2393c5fd%22%20stroke-width%3D%222%22%3E%3Cline%20x1%3D%22-8%22%20y1%3D%22-150%22%20x2%3D%22-8%22%20y2%3D%22120%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22-150%22%20x2%3D%220%22%20y2%3D%22120%22%2F%3E%3Cline%20x1%3D%228%22%20y1%3D%22-150%22%20x2%3D%228%22%20y2%3D%22120%22%2F%3E%3C%2Fg%3E%3Crect%20x%3D%22-30%22%20y%3D%22118%22%20width%3D%2260%22%20height%3D%2210%22%20rx%3D%223%22%20fill%3D%22%230e2a6b%22%2F%3E%3C%2Fg%3E%3Crect%20x%3D%220%22%20y%3D%22354%22%20width%3D%22600%22%20height%3D%2246%22%20fill%3D%22url%28%23d%29%22%20opacity%3D%220.92%22%2F%3E%3Ctext%20x%3D%22300.0%22%20y%3D%22383%22%20font-family%3D%22Georgia%2Cserif%22%20font-size%3D%2220%22%20fill%3D%22%23eaf2ff%22%20text-anchor%3D%22middle%22%3Eguitar.jpg%3C%2Ftext%3E%3C%2Fsvg%3E",
  "images/night_concert.jpg": "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22600%22%20height%3D%22400%22%20viewBox%3D%220%200%20600%20400%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23216792%22%2F%3E%3Cstop%20offset%3D%220.5%22%20stop-color%3D%22%23318ecc%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2334dbd3%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20id%3D%22d%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%231e3a8a%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23216792%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22600%22%20height%3D%22400%22%20fill%3D%22url%28%23g%29%22%2F%3E%3Cg%20opacity%3D%220.10%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%221%22%3E%3Cline%20x1%3D%220%22%20y1%3D%2240%22%20x2%3D%22600%22%20y2%3D%2240%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%2280%22%20x2%3D%22600%22%20y2%3D%2280%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22120%22%20x2%3D%22600%22%20y2%3D%22120%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22160%22%20x2%3D%22600%22%20y2%3D%22160%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22200%22%20x2%3D%22600%22%20y2%3D%22200%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22240%22%20x2%3D%22600%22%20y2%3D%22240%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22280%22%20x2%3D%22600%22%20y2%3D%22280%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22320%22%20x2%3D%22600%22%20y2%3D%22320%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22360%22%20x2%3D%22600%22%20y2%3D%22360%22%2F%3E%3Cline%20x1%3D%2240%22%20y1%3D%220%22%20x2%3D%2240%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%2280%22%20y1%3D%220%22%20x2%3D%2280%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22120%22%20y1%3D%220%22%20x2%3D%22120%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22160%22%20y1%3D%220%22%20x2%3D%22160%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22200%22%20y1%3D%220%22%20x2%3D%22200%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22240%22%20y1%3D%220%22%20x2%3D%22240%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22280%22%20y1%3D%220%22%20x2%3D%22280%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22320%22%20y1%3D%220%22%20x2%3D%22320%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22360%22%20y1%3D%220%22%20x2%3D%22360%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22400%22%20y1%3D%220%22%20x2%3D%22400%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22440%22%20y1%3D%220%22%20x2%3D%22440%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22480%22%20y1%3D%220%22%20x2%3D%22480%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22520%22%20y1%3D%220%22%20x2%3D%22520%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22560%22%20y1%3D%220%22%20x2%3D%22560%22%20y2%3D%22400%22%2F%3E%3C%2Fg%3E%3Crect%20x%3D%2260%22%20y%3D%22250%22%20width%3D%22480%22%20height%3D%2270%22%20rx%3D%228%22%20fill%3D%22%230e2a6b%22%2F%3E%3Cg%20opacity%3D%220.85%22%3E%3Cpolygon%20points%3D%22160%2C40%2090%2C250%20230%2C250%22%20fill%3D%22%23eaf2ff%22%20opacity%3D%220.35%22%2F%3E%3Cpolygon%20points%3D%22300%2C30%20230%2C250%20370%2C250%22%20fill%3D%22%23bfdbfe%22%20opacity%3D%220.4%22%2F%3E%3Cpolygon%20points%3D%22440%2C40%20370%2C250%20510%2C250%22%20fill%3D%22%23eaf2ff%22%20opacity%3D%220.35%22%2F%3E%3C%2Fg%3E%3Cg%20fill%3D%22%230e2a6b%22%3E%3Ccircle%20cx%3D%22160%22%20cy%3D%22235%22%20r%3D%2216%22%2F%3E%3Crect%20x%3D%22146%22%20y%3D%22248%22%20width%3D%2228%22%20height%3D%2234%22%20rx%3D%228%22%2F%3E%3Ccircle%20cx%3D%22300%22%20cy%3D%22230%22%20r%3D%2216%22%2F%3E%3Crect%20x%3D%22286%22%20y%3D%22243%22%20width%3D%2228%22%20height%3D%2239%22%20rx%3D%228%22%2F%3E%3Ccircle%20cx%3D%22440%22%20cy%3D%22235%22%20r%3D%2216%22%2F%3E%3Crect%20x%3D%22426%22%20y%3D%22248%22%20width%3D%2228%22%20height%3D%2234%22%20rx%3D%228%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate%28120%2C120%29%20scale%281.1%29%22%20opacity%3D%220.9%22%3E%3Cg%20fill%3D%22%23eaf2ff%22%3E%3Ccircle%20cx%3D%220%22%20cy%3D%220%22%20r%3D%227%22%2F%3E%3Crect%20x%3D%226%22%20y%3D%22-34%22%20width%3D%224%22%20height%3D%2234%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate%28480%2C110%29%20scale%280.9%29%22%20opacity%3D%220.9%22%3E%3Cg%20fill%3D%22%23eaf2ff%22%3E%3Ccircle%20cx%3D%220%22%20cy%3D%220%22%20r%3D%227%22%2F%3E%3Crect%20x%3D%226%22%20y%3D%22-34%22%20width%3D%224%22%20height%3D%2234%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate%28300%2C90%29%20scale%281.2%29%22%20opacity%3D%220.9%22%3E%3Cg%20fill%3D%22%23eaf2ff%22%3E%3Ccircle%20cx%3D%220%22%20cy%3D%220%22%20r%3D%227%22%2F%3E%3Crect%20x%3D%226%22%20y%3D%22-34%22%20width%3D%224%22%20height%3D%2234%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Crect%20x%3D%220%22%20y%3D%22354%22%20width%3D%22600%22%20height%3D%2246%22%20fill%3D%22url%28%23d%29%22%20opacity%3D%220.92%22%2F%3E%3Ctext%20x%3D%22300.0%22%20y%3D%22383%22%20font-family%3D%22Georgia%2Cserif%22%20font-size%3D%2220%22%20fill%3D%22%23eaf2ff%22%20text-anchor%3D%22middle%22%3Enight_concert.jpg%3C%2Ftext%3E%3C%2Fsvg%3E",
  "images/member.jpg": "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22600%22%20height%3D%22400%22%20viewBox%3D%220%200%20600%20400%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23216792%22%2F%3E%3Cstop%20offset%3D%220.5%22%20stop-color%3D%22%23318ecc%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2334dbd3%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20id%3D%22d%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%231e3a8a%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23216792%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22600%22%20height%3D%22400%22%20fill%3D%22url%28%23g%29%22%2F%3E%3Cg%20opacity%3D%220.10%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%221%22%3E%3Cline%20x1%3D%220%22%20y1%3D%2240%22%20x2%3D%22600%22%20y2%3D%2240%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%2280%22%20x2%3D%22600%22%20y2%3D%2280%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22120%22%20x2%3D%22600%22%20y2%3D%22120%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22160%22%20x2%3D%22600%22%20y2%3D%22160%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22200%22%20x2%3D%22600%22%20y2%3D%22200%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22240%22%20x2%3D%22600%22%20y2%3D%22240%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22280%22%20x2%3D%22600%22%20y2%3D%22280%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22320%22%20x2%3D%22600%22%20y2%3D%22320%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22360%22%20x2%3D%22600%22%20y2%3D%22360%22%2F%3E%3Cline%20x1%3D%2240%22%20y1%3D%220%22%20x2%3D%2240%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%2280%22%20y1%3D%220%22%20x2%3D%2280%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22120%22%20y1%3D%220%22%20x2%3D%22120%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22160%22%20y1%3D%220%22%20x2%3D%22160%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22200%22%20y1%3D%220%22%20x2%3D%22200%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22240%22%20y1%3D%220%22%20x2%3D%22240%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22280%22%20y1%3D%220%22%20x2%3D%22280%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22320%22%20y1%3D%220%22%20x2%3D%22320%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22360%22%20y1%3D%220%22%20x2%3D%22360%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22400%22%20y1%3D%220%22%20x2%3D%22400%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22440%22%20y1%3D%220%22%20x2%3D%22440%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22480%22%20y1%3D%220%22%20x2%3D%22480%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22520%22%20y1%3D%220%22%20x2%3D%22520%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22560%22%20y1%3D%220%22%20x2%3D%22560%22%20y2%3D%22400%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate%28300%2C180%29%22%3E%3Ccircle%20cx%3D%220%22%20cy%3D%22-70%22%20r%3D%2240%22%20fill%3D%22%23eaf2ff%22%2F%3E%3Cpath%20d%3D%22M-70%20120%20Q-70%200%200%200%20Q70%200%2070%20120%20Z%22%20fill%3D%22%23bfdbfe%22%2F%3E%3Cg%20transform%3D%22translate%2840%2C40%29%20rotate%2820%29%22%3E%3Crect%20x%3D%22-8%22%20y%3D%22-90%22%20width%3D%2216%22%20height%3D%2290%22%20rx%3D%224%22%20fill%3D%22%231e3a8a%22%2F%3E%3Cellipse%20cx%3D%220%22%20cy%3D%2240%22%20rx%3D%2246%22%20ry%3D%2252%22%20fill%3D%22%23eaf2ff%22%2F%3E%3Ccircle%20cx%3D%220%22%20cy%3D%2238%22%20r%3D%2216%22%20fill%3D%22%231e3a8a%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate%28150%2C110%29%20scale%281.0%29%22%20opacity%3D%220.9%22%3E%3Cg%20fill%3D%22%23eaf2ff%22%3E%3Ccircle%20cx%3D%220%22%20cy%3D%220%22%20r%3D%227%22%2F%3E%3Crect%20x%3D%226%22%20y%3D%22-34%22%20width%3D%224%22%20height%3D%2234%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate%28460%2C130%29%20scale%280.8%29%22%20opacity%3D%220.9%22%3E%3Cg%20fill%3D%22%23eaf2ff%22%3E%3Ccircle%20cx%3D%220%22%20cy%3D%220%22%20r%3D%227%22%2F%3E%3Crect%20x%3D%226%22%20y%3D%22-34%22%20width%3D%224%22%20height%3D%2234%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Crect%20x%3D%220%22%20y%3D%22354%22%20width%3D%22600%22%20height%3D%2246%22%20fill%3D%22url%28%23d%29%22%20opacity%3D%220.92%22%2F%3E%3Ctext%20x%3D%22300.0%22%20y%3D%22383%22%20font-family%3D%22Georgia%2Cserif%22%20font-size%3D%2220%22%20fill%3D%22%23eaf2ff%22%20text-anchor%3D%22middle%22%3Emember.jpg%3C%2Ftext%3E%3C%2Fsvg%3E",
  "images/poster.jpg": "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22600%22%20height%3D%22800%22%20viewBox%3D%220%200%20600%20800%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23216792%22%2F%3E%3Cstop%20offset%3D%220.5%22%20stop-color%3D%22%23318ecc%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2334dbd3%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20id%3D%22d%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%231e3a8a%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23216792%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22600%22%20height%3D%22800%22%20fill%3D%22url%28%23g%29%22%2F%3E%3Cg%20opacity%3D%220.10%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%221%22%3E%3Cline%20x1%3D%220%22%20y1%3D%2240%22%20x2%3D%22600%22%20y2%3D%2240%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%2280%22%20x2%3D%22600%22%20y2%3D%2280%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22120%22%20x2%3D%22600%22%20y2%3D%22120%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22160%22%20x2%3D%22600%22%20y2%3D%22160%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22200%22%20x2%3D%22600%22%20y2%3D%22200%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22240%22%20x2%3D%22600%22%20y2%3D%22240%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22280%22%20x2%3D%22600%22%20y2%3D%22280%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22320%22%20x2%3D%22600%22%20y2%3D%22320%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22360%22%20x2%3D%22600%22%20y2%3D%22360%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22400%22%20x2%3D%22600%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22440%22%20x2%3D%22600%22%20y2%3D%22440%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22480%22%20x2%3D%22600%22%20y2%3D%22480%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22520%22%20x2%3D%22600%22%20y2%3D%22520%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22560%22%20x2%3D%22600%22%20y2%3D%22560%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22600%22%20x2%3D%22600%22%20y2%3D%22600%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22640%22%20x2%3D%22600%22%20y2%3D%22640%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22680%22%20x2%3D%22600%22%20y2%3D%22680%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22720%22%20x2%3D%22600%22%20y2%3D%22720%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22760%22%20x2%3D%22600%22%20y2%3D%22760%22%2F%3E%3Cline%20x1%3D%2240%22%20y1%3D%220%22%20x2%3D%2240%22%20y2%3D%22800%22%2F%3E%3Cline%20x1%3D%2280%22%20y1%3D%220%22%20x2%3D%2280%22%20y2%3D%22800%22%2F%3E%3Cline%20x1%3D%22120%22%20y1%3D%220%22%20x2%3D%22120%22%20y2%3D%22800%22%2F%3E%3Cline%20x1%3D%22160%22%20y1%3D%220%22%20x2%3D%22160%22%20y2%3D%22800%22%2F%3E%3Cline%20x1%3D%22200%22%20y1%3D%220%22%20x2%3D%22200%22%20y2%3D%22800%22%2F%3E%3Cline%20x1%3D%22240%22%20y1%3D%220%22%20x2%3D%22240%22%20y2%3D%22800%22%2F%3E%3Cline%20x1%3D%22280%22%20y1%3D%220%22%20x2%3D%22280%22%20y2%3D%22800%22%2F%3E%3Cline%20x1%3D%22320%22%20y1%3D%220%22%20x2%3D%22320%22%20y2%3D%22800%22%2F%3E%3Cline%20x1%3D%22360%22%20y1%3D%220%22%20x2%3D%22360%22%20y2%3D%22800%22%2F%3E%3Cline%20x1%3D%22400%22%20y1%3D%220%22%20x2%3D%22400%22%20y2%3D%22800%22%2F%3E%3Cline%20x1%3D%22440%22%20y1%3D%220%22%20x2%3D%22440%22%20y2%3D%22800%22%2F%3E%3Cline%20x1%3D%22480%22%20y1%3D%220%22%20x2%3D%22480%22%20y2%3D%22800%22%2F%3E%3Cline%20x1%3D%22520%22%20y1%3D%220%22%20x2%3D%22520%22%20y2%3D%22800%22%2F%3E%3Cline%20x1%3D%22560%22%20y1%3D%220%22%20x2%3D%22560%22%20y2%3D%22800%22%2F%3E%3C%2Fg%3E%3Crect%20x%3D%22150%22%20y%3D%2250%22%20width%3D%22300%22%20height%3D%22600%22%20rx%3D%2214%22%20fill%3D%22%23eaf2ff%22%2F%3E%3Crect%20x%3D%22176%22%20y%3D%2280%22%20width%3D%22248%22%20height%3D%22120%22%20rx%3D%228%22%20fill%3D%22url%28%23d%29%22%2F%3E%3Cg%20transform%3D%22translate%28300%2C150%29%20scale%281.4%29%22%20opacity%3D%220.9%22%3E%3Cg%20fill%3D%22%23eaf2ff%22%3E%3Ccircle%20cx%3D%220%22%20cy%3D%220%22%20r%3D%227%22%2F%3E%3Crect%20x%3D%226%22%20y%3D%22-34%22%20width%3D%224%22%20height%3D%2234%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20fill%3D%22%231e3a8a%22%3E%3Crect%20x%3D%22176%22%20y%3D%22230%22%20width%3D%22248%22%20height%3D%2220%22%20rx%3D%226%22%2F%3E%3Crect%20x%3D%22176%22%20y%3D%22266%22%20width%3D%22180%22%20height%3D%2214%22%20rx%3D%226%22%20opacity%3D%220.7%22%2F%3E%3Crect%20x%3D%22176%22%20y%3D%22292%22%20width%3D%22210%22%20height%3D%2214%22%20rx%3D%226%22%20opacity%3D%220.7%22%2F%3E%3Crect%20x%3D%22176%22%20y%3D%22340%22%20width%3D%22248%22%20height%3D%2260%22%20rx%3D%228%22%20fill%3D%22%23318ecc%22%2F%3E%3Crect%20x%3D%22176%22%20y%3D%22420%22%20width%3D%22150%22%20height%3D%2214%22%20rx%3D%226%22%20opacity%3D%220.6%22%2F%3E%3Crect%20x%3D%22176%22%20y%3D%22446%22%20width%3D%22200%22%20height%3D%2214%22%20rx%3D%226%22%20opacity%3D%220.6%22%2F%3E%3C%2Fg%3E%3Crect%20x%3D%22176%22%20y%3D%22560%22%20width%3D%22248%22%20height%3D%2256%22%20rx%3D%2228%22%20fill%3D%22%2322779e%22%2F%3E%3Ctext%20x%3D%22300%22%20y%3D%22595%22%20font-family%3D%22Arial%22%20font-size%3D%2222%22%20fill%3D%22%23fff%22%20text-anchor%3D%22middle%22%3EJOIN%20US%3C%2Ftext%3E%3Crect%20x%3D%220%22%20y%3D%22754%22%20width%3D%22600%22%20height%3D%2246%22%20fill%3D%22url%28%23d%29%22%20opacity%3D%220.92%22%2F%3E%3Ctext%20x%3D%22300.0%22%20y%3D%22783%22%20font-family%3D%22Georgia%2Cserif%22%20font-size%3D%2220%22%20fill%3D%22%23eaf2ff%22%20text-anchor%3D%22middle%22%3Eposter.jpg%3C%2Ftext%3E%3C%2Fsvg%3E",
  "images/music_room.jpg": "data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22600%22%20height%3D%22400%22%20viewBox%3D%220%200%20600%20400%22%3E%3Cdefs%3E%3ClinearGradient%20id%3D%22g%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%221%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%23216792%22%2F%3E%3Cstop%20offset%3D%220.5%22%20stop-color%3D%22%23318ecc%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%2334dbd3%22%2F%3E%3C%2FlinearGradient%3E%3ClinearGradient%20id%3D%22d%22%20x1%3D%220%22%20y1%3D%220%22%20x2%3D%220%22%20y2%3D%221%22%3E%3Cstop%20offset%3D%220%22%20stop-color%3D%22%231e3a8a%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%23216792%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3Crect%20width%3D%22600%22%20height%3D%22400%22%20fill%3D%22url%28%23g%29%22%2F%3E%3Cg%20opacity%3D%220.10%22%20stroke%3D%22%23ffffff%22%20stroke-width%3D%221%22%3E%3Cline%20x1%3D%220%22%20y1%3D%2240%22%20x2%3D%22600%22%20y2%3D%2240%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%2280%22%20x2%3D%22600%22%20y2%3D%2280%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22120%22%20x2%3D%22600%22%20y2%3D%22120%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22160%22%20x2%3D%22600%22%20y2%3D%22160%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22200%22%20x2%3D%22600%22%20y2%3D%22200%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22240%22%20x2%3D%22600%22%20y2%3D%22240%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22280%22%20x2%3D%22600%22%20y2%3D%22280%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22320%22%20x2%3D%22600%22%20y2%3D%22320%22%2F%3E%3Cline%20x1%3D%220%22%20y1%3D%22360%22%20x2%3D%22600%22%20y2%3D%22360%22%2F%3E%3Cline%20x1%3D%2240%22%20y1%3D%220%22%20x2%3D%2240%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%2280%22%20y1%3D%220%22%20x2%3D%2280%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22120%22%20y1%3D%220%22%20x2%3D%22120%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22160%22%20y1%3D%220%22%20x2%3D%22160%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22200%22%20y1%3D%220%22%20x2%3D%22200%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22240%22%20y1%3D%220%22%20x2%3D%22240%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22280%22%20y1%3D%220%22%20x2%3D%22280%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22320%22%20y1%3D%220%22%20x2%3D%22320%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22360%22%20y1%3D%220%22%20x2%3D%22360%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22400%22%20y1%3D%220%22%20x2%3D%22400%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22440%22%20y1%3D%220%22%20x2%3D%22440%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22480%22%20y1%3D%220%22%20x2%3D%22480%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22520%22%20y1%3D%220%22%20x2%3D%22520%22%20y2%3D%22400%22%2F%3E%3Cline%20x1%3D%22560%22%20y1%3D%220%22%20x2%3D%22560%22%20y2%3D%22400%22%2F%3E%3C%2Fg%3E%3Crect%20x%3D%2280%22%20y%3D%22120%22%20width%3D%22440%22%20height%3D%22200%22%20rx%3D%2210%22%20fill%3D%22%23eaf2ff%22%20opacity%3D%220.9%22%2F%3E%3Cg%20fill%3D%22%231e3a8a%22%3E%3Crect%20x%3D%22120%22%20y%3D%22250%22%20width%3D%22360%22%20height%3D%2260%22%20rx%3D%226%22%2F%3E%3Cg%20fill%3D%22%23eaf2ff%22%3E%3Crect%20x%3D%22128%22%20y%3D%22256%22%20width%3D%2220%22%20height%3D%2248%22%2F%3E%3Crect%20x%3D%22152%22%20y%3D%22256%22%20width%3D%2220%22%20height%3D%2248%22%2F%3E%3Crect%20x%3D%22176%22%20y%3D%22256%22%20width%3D%2220%22%20height%3D%2248%22%2F%3E%3Crect%20x%3D%22200%22%20y%3D%22256%22%20width%3D%2220%22%20height%3D%2248%22%2F%3E%3Crect%20x%3D%22224%22%20y%3D%22256%22%20width%3D%2220%22%20height%3D%2248%22%2F%3E%3Crect%20x%3D%22248%22%20y%3D%22256%22%20width%3D%2220%22%20height%3D%2248%22%2F%3E%3Crect%20x%3D%22272%22%20y%3D%22256%22%20width%3D%2220%22%20height%3D%2248%22%2F%3E%3Crect%20x%3D%22296%22%20y%3D%22256%22%20width%3D%2220%22%20height%3D%2248%22%2F%3E%3Crect%20x%3D%22320%22%20y%3D%22256%22%20width%3D%2220%22%20height%3D%2248%22%2F%3E%3Crect%20x%3D%22344%22%20y%3D%22256%22%20width%3D%2220%22%20height%3D%2248%22%2F%3E%3Crect%20x%3D%22368%22%20y%3D%22256%22%20width%3D%2220%22%20height%3D%2248%22%2F%3E%3Crect%20x%3D%22392%22%20y%3D%22256%22%20width%3D%2220%22%20height%3D%2248%22%2F%3E%3Crect%20x%3D%22416%22%20y%3D%22256%22%20width%3D%2220%22%20height%3D%2248%22%2F%3E%3Crect%20x%3D%22440%22%20y%3D%22256%22%20width%3D%2220%22%20height%3D%2248%22%2F%3E%3C%2Fg%3E%3Cg%20fill%3D%22%230e2a6b%22%3E%3Crect%20x%3D%22138%22%20y%3D%22256%22%20width%3D%2212%22%20height%3D%2230%22%2F%3E%3Crect%20x%3D%22162%22%20y%3D%22256%22%20width%3D%2212%22%20height%3D%2230%22%2F%3E%3Crect%20x%3D%22210%22%20y%3D%22256%22%20width%3D%2212%22%20height%3D%2230%22%2F%3E%3Crect%20x%3D%22234%22%20y%3D%22256%22%20width%3D%2212%22%20height%3D%2230%22%2F%3E%3Crect%20x%3D%22258%22%20y%3D%22256%22%20width%3D%2212%22%20height%3D%2230%22%2F%3E%3Crect%20x%3D%22306%22%20y%3D%22256%22%20width%3D%2212%22%20height%3D%2230%22%2F%3E%3Crect%20x%3D%22330%22%20y%3D%22256%22%20width%3D%2212%22%20height%3D%2230%22%2F%3E%3Crect%20x%3D%22378%22%20y%3D%22256%22%20width%3D%2212%22%20height%3D%2230%22%2F%3E%3Crect%20x%3D%22402%22%20y%3D%22256%22%20width%3D%2212%22%20height%3D%2230%22%2F%3E%3Crect%20x%3D%22426%22%20y%3D%22256%22%20width%3D%2212%22%20height%3D%2230%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate%28160%2C160%29%20scale%281.0%29%22%20opacity%3D%220.9%22%3E%3Cg%20fill%3D%22%23eaf2ff%22%3E%3Ccircle%20cx%3D%220%22%20cy%3D%220%22%20r%3D%227%22%2F%3E%3Crect%20x%3D%226%22%20y%3D%22-34%22%20width%3D%224%22%20height%3D%2234%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate%28430%2C150%29%20scale%280.9%29%22%20opacity%3D%220.9%22%3E%3Cg%20fill%3D%22%23eaf2ff%22%3E%3Ccircle%20cx%3D%220%22%20cy%3D%220%22%20r%3D%227%22%2F%3E%3Crect%20x%3D%226%22%20y%3D%22-34%22%20width%3D%224%22%20height%3D%2234%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3Crect%20x%3D%220%22%20y%3D%22354%22%20width%3D%22600%22%20height%3D%2246%22%20fill%3D%22url%28%23d%29%22%20opacity%3D%220.92%22%2F%3E%3Ctext%20x%3D%22300.0%22%20y%3D%22383%22%20font-family%3D%22Georgia%2Cserif%22%20font-size%3D%2220%22%20fill%3D%22%23eaf2ff%22%20text-anchor%3D%22middle%22%3Emusic_room.jpg%3C%2Ftext%3E%3C%2Fsvg%3E"
},
css: `
/* CSS Document */


body{
    background-color: #f3f7fc;
    color: #1f2937;
    font-family: 'Open Sans', Arial, sans-serif;
    line-height: 1.8;
    font-size: 16px;
    max-width: 900px;
    margin: 0 auto;
    padding: 20px 24px 40px;
    
}
/* Reset some default styles */
img{
    max-width: 100%;
    height: auto;
}

a{
    color: #1d4ed8;
    text-decoration: none;
    text-underline-offset: 3px;
    transition: color 0.2s ease;
}
a:hover{
    color: #0e7490;
    text-decoration-thickness: 2px;
}

h1, h2, h3{
    font-family: 'Playfair Display', Georgia, serif;
    font-weight: 700px;   
    letter-spacing: 0.5px;
    line-height: 1.25;
}

h1{ font-size: 4rem; }
h2{ font-size: 1.8rem; }
h3{ font-size: 1.3rem; }

input, textarea, button{
    font-family: inherit;
}
 /* Header styles */
header{
    background: linear-gradient(135deg,
    #216792 0%, #318ecc 50%, #34dbd3 100%);
  color: white;
  text-align: center;
  padding: 40px 20px;
  border-radius: 8px;
  margin-bottom: 30px;
}
header h1{
  font-family: 'Playfair Display', Georgia, serif;
  font-size: 48px;
  font-weight: 700px;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
  letter-spacing: 2px;
  line-height: 1.25;
}
/* Navigation styles */
nav{
    background-color: #dbeafe;
    padding: 12px 16px;
    border-radius: 8px;
    margin-bottom: 24px;
}

nav ul{
    list-style: none;
    margin: 0;
    display: flex;
    justify-content: space-evenly;
    gap: 8px;
    padding: 8px 16px;
}

nav a {
    display:inline-block;
    padding: 8px 10px;
    color: #1e3a8a;
    text-align: center;
    margin-right: 12px;
    font-weight: bold;
    border-radius: 8px;
    
}
nav a:hover{
    color: #ffffff;
    background-color: #1d4ed8;
}
nav a.active {
    color: #ffffff;
    background-color: #1d4ed8;
}
/* Layout styles */
.layout{    
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 24px;
    max-width: 900px;
    margin: 0 auto;
    padding: 32px 24px;
}
/* Main content and aside styles */
main{
    background-color: #ffffff;
    color: #1f2937;
    border-radius: 8px;
    flex: 0 0 70%;
    padding: 0 16px;
    min-width: 0;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}
/* Aside styles */
aside{
    flex: 1;
    background-color: #eaf2ff;
    color: #1f2937;
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
}

main h2, main h3{
    font-family: 'Playfair Display', Georgia, serif;
    color: #1e3a8a;
    margin: 28px 0 10px;
}

main h1:first-child, main h2:first-child, main h3:first-child{
    margin-top: 0;
}


main p, main ul, main ol{
    margin-bottom: 12px;
    line-height: 1.8;
    max-width: 65ch;
    font-family: 'Open Sans', Arial, sans-serif; line-height: 1.6;

}
main ul, main ol{
    padding-left: 24px;
}
main li {
    margin-bottom: 8px;
}
main img{
    max-width: 100%;
    height: auto;
    margin: 16px 0 8px;
    display: block;
}   

aside h2, aside h3{
    
    font-family:'Playfair Display', Georgia, serif;
    color: #1e3a8a;
    margin: 16px 0 8px;
    border-bottom: 2px solid #bfdbfe;
    
}

aside p, ul, aside ol{
    font-family: 'Open Sans', sans-serif; line-height: 1.6;
    margin-bottom: 16px;
    line-height: 1.8;
    padding-left: 16px;
        
}
aside ul, aside ol{
    padding-left: 24px;
}
 
aside li{
    margin-bottom: 6px;
}
.event-card {
    background-color: #ffffff;
    border: 1px solid #93c5fd;
    border-radius: 8px;
    padding: 12px 16px;
    margin-bottom: 16px;
    
}

.event-date {
    font-weight: bold;
    color: #1e40af;
}

.btn {
    display: inline-block;
    padding: 8px 16px;
    background: #22779e;
    color: #ffffff;
    text-decoration: none;
    border-radius: 30px;
    transition: background-color 0.3s ease, color 0.3s ease;
    cursor: pointer;
}

.btn:hover {
    background: #7799f7;
    color: #ffffff;
    transform: translateY(-3px); box-shadow: 0 5px 20px rgba(0,0,0,0.15);
    
    }
form{
    background: #eaf2ff;
    border-radius: 8px;
    padding: 24px 20px;
    max-width: 600px;
    margin: 0 auto 20px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
}
.form-group {
    max-width: 500px;
    margin: 0 auto 20px;
    color: #1f2937;
}

.form-group label {
    display: block;
    margin-bottom: 6px;
    font-weight: bold;
}

.form-group input,
.form-group textarea {
    width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  border: 1px solid #93c5fd;
  border-radius: 4px;
  box-sizing: border-box;
    
}
.form-group button {
    display: block;
    margin-left: auto ;
    padding: 4px 12px;
    background: #1d7ed8;
    color: #ffffff;
    text-decoration: none;
    border-radius: 30px;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;
}
.form-group button:hover {
    background-color: #1e3a8a;
    color: #ffffff;
    
    transform: translateY(-3px); box-shadow: 0 5px 20px rgba(0,0,0,0.15);

}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.gallery-item p {
    font-size: 0.9rem;
    line-height: 1.5;
    text-align: center;
    color: #041f46;
    
}
.gallery-grid img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin: 0 0 8px;
    border-radius: 8px;
}
table {
  width: 100%;
  border-collapse: collapse;
  margin: 1.5rem 0;
}
 
caption {
  caption-side: top;
  font-weight: bold;
  font-size: 1.2rem;
  padding: 0.5rem 0;
  text-align: left;
}
 
th,td {
  border: 1px solid #ccc;
  padding: 12px 16px;
  text-align: center;
}
 
thead th {
  background-color: #256db6;
  color: #fff;
}
 
tbody tr:nth-child(even) {
  background-color: #f2f2f2;
}

tbody td[rowspan] {
  background-color: #fff;
}
 
tbody tr:hover {
  background-color: #dbe9f6;
}

.table-container {
    overflow-x: auto;
    margin-bottom: 24px;
}
 
/* Footer styles */
footer{
     background: linear-gradient(135deg,
    #1e3a8a 0%, #2a53c2 50%, #34dbd3 100%);
    color: #ffffff;
    text-align: center;
    padding: 16px 24px;
    margin-top: 32px;
    border-radius: 8px;
}

footer a{
    color: #bfdbfe;
    margin: 0 8px;
    font-weight: bold;
}
footer a:hover{
    color: #ffffff;
}
@media (max-width: 700px) {
    .layout { flex-direction: column; }
    main, aside { flex: none; width: 100%; }
    nav ul { flex-wrap: wrap; }
}`,
cssNotes: [{"vi": "LỖI THẬT: font-weight: 700px; SAI — font-weight không có đơn vị px. Sửa thành font-weight: 700;. Xuất hiện ở h1,h2,h3 và header h1.", "en": "REAL BUG: font-weight: 700px; is WRONG — font-weight takes no px unit. Fix to font-weight: 700;. Appears in h1,h2,h3 and header h1.", "k": "bug"}, {"vi": "header và footer dùng linear-gradient 3 stop (#216792 → #318ecc → #34dbd3) — dải màu khác hue thật.", "en": "header and footer use a 3-stop linear-gradient (#216792 → #318ecc → #34dbd3) — a genuine multi-hue ramp.", "k": "good"}, {"vi": "@media (max-width:700px) chuyển .layout sang column, main/aside width 100% — responsive thật.", "en": "@media (max-width:700px) switches .layout to column, main/aside width 100% — real responsive behavior.", "k": "good"}, {"vi": "nav a.active tô nền #1d4ed8 để báo trang hiện tại — có thể hỏi cách đánh dấu active.", "en": "nav a.active fills #1d4ed8 to mark the current page — you may be asked how active state is marked.", "k": "ask"}, {"vi": "main flex:0 0 70% + aside flex:1 — có thể hỏi cách chia cột bằng flex và ý nghĩa min-width:0.", "en": "main flex:0 0 70% + aside flex:1 — you may be asked how flex splits columns and what min-width:0 does.", "k": "ask"}, {"vi": "table: border-collapse:collapse, thead th nền #256db6, tbody tr:nth-child(even) tô #f2f2f2 (zebra).", "en": "table: border-collapse:collapse, thead th background #256db6, tbody tr:nth-child(even) shaded #f2f2f2 (zebra).", "k": "good"}],
pages: [
  {
    id: "index", name: "Home", file: "index.html",
    html: `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <title>Web of my Club</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Open+Sans:wght@400;600;700">
    <link rel="stylesheet" href="css/style.css">
</head>  
<body>
     <header>
        <h1>Music Club</h1>
       </header>
    <nav>
    <ul>
        <li><a href="index.html" class="active">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="activities.html">Activities</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
    </nav>
    <!-- Main content and aside section -->
    <div class="layout">
<main>
    <section>
    <h2>Welcome to the Music Club</h2>
    <p>We established this club to connect people who share a passion for music and playing instruments such as the guitar, bass, flute, and more.<br/>
    You can also gain a wealth of musical knowledge by joining the club.</p>
    <p>We are a group of music enthusiasts who love to play and share our passion for music. We welcome anyone who is interested in joining us, regardless of skill level or experience. Whether you are a beginner or an experienced musician, you will find a supportive and friendly community here.</p>
    <img src="images/bass.jpg" alt="Photo of a bass guitar" width="300" height="200">
    <img src="images/guitar.jpg" alt="Photo of a guitar" width="300" height="200">
    </section>

    <section>
         <h2>What We Do</h2>
                <ul>
                    <li>Weekly rehearsals where members play together</li>
                    <li>Music workshops and masterclasses</li>
                    <li>Night concerts and small performances</li>
                    <li>Guidance for members learning an instrument</li>
                </ul>
    </section>

    <section>
         <h2>Why Join Us?</h2>
                <ul>
                    <li><strong>Learn:</strong> pick up new skills and music knowledge from experienced members.</li>
                    <li><strong>Perform:</strong> take part in concerts and show what you have practiced.</li>
                    <li><strong>Connect:</strong> meet friendly people who share your passion for music.</li>
                </ul>
    </section>
    </main>
<aside>
        <h2>Upcoming Events</h2>
        <p>Join us for our upcoming events and activities! We have a variety of events planned, including concerts, workshops, and open mic nights. Check out our schedule below:</p>

            <div class="event-card">
                <h3>Music Night</h3>
                <p class="event-date">Mar 29 | 7 PM</p>
                <p class="event-location">Room 303</p>
                <p>An evening of live music!</p>
                <a href="contact.html" class="btn">Get Tickets</a>
            </div>

              <div class="event-card">
                <h3>Workshop on Music Theory</h3>
                <p class="event-date">Apr 15 | 3 PM</p>
                <p class="event-location">Room 302</p>
                <p>Learn the basics of reading and writing music.</p>
                <a href="contact.html" class="btn">Join Us</a>
            </div>

             <div class="event-card">
                <h3>Open Mic Night</h3>
                <p class="event-date">May 10 | 6 PM</p>
                <p class="event-location"> Room 301</p>
                <p>Bring an instrument or just come to listen.</p>
                <a href="contact.html" class="btn">Register Now</a>
            </div>
    </aside>
    </div>
    <!--Footer section --> 
    <footer>
        <p>Copyright &copy; 2026 Music Club</p>
           <p>
            <a href="https://facebook.com" target="_blank" rel="noopener">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener">Instagram</a>
            <a href="https://youtube.com" target="_blank" rel="noopener">YouTube</a>
        </p>
    </footer>
</body>
</html>
`,
    notes: [{"vi": "Bố cục semantic rõ: header / nav / main / aside / footer. .layout dùng flex chia main 70% + aside.", "en": "Clear semantic layout: header / nav / main / aside / footer. .layout uses flex to split main 70% + aside.", "k": "good"}, {"vi": "img có alt mô tả + width/height giữ chỗ sẵn, tránh giật layout (CLS) khi ảnh tải.", "en": "Images have descriptive alt + width/height to reserve space, avoiding layout shift (CLS) while loading.", "k": "good"}, {"vi": "Link mạng xã hội dùng target='_blank' kèm rel='noopener' — mở tab mới an toàn, đúng chuẩn.", "en": "Social links use target='_blank' with rel='noopener' — safe new-tab opening, per best practice.", "k": "good"}, {"vi": "nav nằm NGOÀI header. Giảng viên có thể hỏi: vì sao không gộp nav vào header cho đúng landmark?", "en": "nav sits OUTSIDE header. The examiner may ask: why not nest nav inside header as a proper landmark?", "k": "ask"}, {"vi": "<title> 'Web of my Club' chưa mô tả rõ trang Home. SEO tốt hơn: 'Music Club — Home'.", "en": "<title> 'Web of my Club' doesn't describe the Home page well. Better SEO: 'Music Club — Home'.", "k": "ask"}]
  },
  {
    id: "about", name: "About", file: "about.html",
    html: `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <title>About Music Club</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Open+Sans:wght@400;600;700">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
     <header>
        <h1>Music Club</h1>
       </header>
    <nav>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html" class="active">About</a></li>
        <li><a href="activities.html">Activities</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
    </nav>
<div class="layout">
<main>
    <h2> Music Club</h2>
    <p>Music Club was founded by a group of students who share a love for music.
    We welcome members of all skill levels, from complete beginners to experienced musicians.
    Our club regularly organizes rehearsals, workshops, and small performances.
    Our goal is to build a friendly community where everyone can learn and enjoy music together.</p>
    
    <h2>Our Activities</h2>
    <ul>
        <li>Weekly rehearsals</li>
        <li>Music workshops and masterclasses</li>
        <li>Night concerts</li>
        <li>Question and answer sessions with everyone</li>
        <li>Guide for members on playing musical instruments</li>
    </ul>
    <p>Anyone who is currently a student at our school is welcome to join the club and take part in all of these exciting activities with us.</p>
    <p>These activities will spark an interest in music, deepen understanding of instruments such as the guitar, bass, and traditional instruments and provide insight into popular music culture,<br>
      while also allowing people to connect with others who share their passion.</p>
      
    <section class="gallery">

    <h2>Photo Gallery</h2>

    <div class="gallery-grid">  

    <div class="gallery-item">
    <img src="images/bass.jpg" alt="Photo of a bass guitar" width="300" height="200">
    <p>A bass guitar, one of the instruments we often use in our performances.</p>
    </div>

    <div class="gallery-item">
    <img src="images/guitar.jpg" alt="Photo of a guitar" width="300" height="200">
    <p>A guitar, another popular instrument among our members.</p>
    </div>

    <div class="gallery-item">
    <img src="images/night_concert.jpg" alt="Members performing on stage during a night concert" width="300" height="200">
    <p>Our night concert, where members show off what they've practiced all semester.</p>
    </div>

     <div class="gallery-item">
    <img src="images/member.jpg" alt="A club member practicing an instrument" width="300" height="200">
    <p>One of our members during a weekly rehearsal session.</p>
    </div>

     <div class="gallery-item">
    <img src="images/poster.jpg" alt="Poster advertising the club's upcoming event" width="300" height="400">
    <p>The poster we used to promote our latest event around campus.</p>
    </div>
    </div>
</section>
    
    </main> 

    <aside>
    <h3>Our Team</h3>
    <ol>
        <li>Kurt - President</li>
        <li>Thang - Vice President</li>
        <li>Tran Lap - Treasurer</li>
    </ol>
    </aside>
</div>


     <footer>
        <p>Copyright &copy; 2026 Music Club</p>
           <p>
            <a href="https://facebook.com" target="_blank" rel="noopener">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener">Instagram</a>
            <a href="https://youtube.com" target="_blank" rel="noopener">YouTube</a>
        </p>
    </footer>
</body>
</html>`,
    notes: [{"vi": ".gallery-grid dùng CSS Grid repeat(2, 1fr); mỗi .gallery-item gồm img + chú thích.", "en": ".gallery-grid uses CSS Grid repeat(2, 1fr); each .gallery-item holds an img + caption.", "k": "good"}, {"vi": "aside 'Our Team' dùng <ol> vì danh sách có thứ tự (President → Vice → Treasurer).", "en": "The 'Our Team' aside uses <ol> because the list is ordered (President → Vice → Treasurer).", "k": "good"}, {"vi": "alt ảnh dài và mô tả đúng nội dung (night_concert, member, poster) — tốt cho accessibility.", "en": "Image alt text is detailed and accurate (night_concert, member, poster) — good for accessibility.", "k": "good"}, {"vi": "main bắt đầu bằng <h2> trong khi <h1> 'Music Club' nằm ở header — có thể bị hỏi về outline heading.", "en": "main starts with <h2> while the <h1> 'Music Club' lives in the header — you may be asked about the heading outline.", "k": "ask"}]
  },
  {
    id: "activities", name: "Activities", file: "activities.html",
    html: `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <title>Web of my Club</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Open+Sans:wght@400;600;700">
    <link rel="stylesheet" href="css/style.css">
</head>  
<body>
     <header>
        <h1>Music Club</h1>
       </header>
    <nav>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="activities.html" class="active">Activities</a></li>
        <li><a href="contact.html">Contact</a></li>
    </ul>
    </nav>
    <!-- Main and Table content  -->

<main>
     <h2>Weekly Activities</h2>
    <p>Join us every week! Here is our schedule of rehearsals, workshops and jam sessions.</p>
    <div class="table-container">
    <table>
        <caption>Weekly Music Club Schedule</caption>
        <thead>
            <tr>
                <th>Day</th>
                <th>Time</th>
                <th>Activity</th>
                <th>Location</th>
                <th>Leader</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td rowspan="2">Monday</td>
                <td>3:00 PM </td>
                <td>Basic Guitar Lessons</td>
                <td>Room 301</td>
                <td>Jane Doe</td>
            </tr>
            <tr>
                <td>5:00 PM </td>
                <td>Bass Lessons</td>
                <td>Room 302</td>
                <td>Kurt</td>
            </tr>
            <tr>
                <td>Wednesday</td>
                <td>4:00 PM</td>
                <td>Music Theory Workshop</td>
                <td>Room 303</td>
                <td>Tran Lap</td>
            </tr>
            <tr>
                <td>Thursday</td>
                <td>3:30 PM</td>
                <td>Piano Session</td>
                <td>Room 304</td>
                <td>Thang Ngot</td>
            </tr>
            <tr>
                <td>Friday</td>
                <td>2:00 PM </td>
                <td>Flute Session</td>
                <td>Room 305</td>
                <td>Lope Dope </td>
            </tr>
            <tr>
                <td>Saturday</td>
                <td>8:00 PM</td>
                <td>Jam Session</td>
                <td>Room 306</td>
                <td>All Members</td>
            </tr>
            <tr>
                <td >Sunday</td>
                <td colspan="4">The Rest day - No Activities</td>
            </tr>    
        </tbody>
    </table>
    </div>
</main>
    <footer>
        <p>Copyright &copy; 2026 Music Club</p>
           <p>
            <a href="https://facebook.com" target="_blank" rel="noopener">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener">Instagram</a>
            <a href="https://youtube.com" target="_blank" rel="noopener">YouTube</a>
        </p>
    </footer>
</body>
</html>`,
    notes: [{"vi": "table có caption + thead / tbody; <th> làm ô header cột — đúng cấu trúc bảng dữ liệu.", "en": "The table has caption + thead / tbody; <th> marks column header cells — proper data-table structure.", "k": "good"}, {"vi": "rowspan='2' gộp ô Monday cho hai buổi (Guitar + Bass); colspan='4' gộp Sunday thành 'Rest day'.", "en": "rowspan='2' merges the Monday cell across two sessions (Guitar + Bass); colspan='4' merges Sunday into 'Rest day'.", "k": "good"}, {"vi": "Vì sao Sunday colspan='4' chứ không phải 5? Vì cột Day đã chiếm 1 ô, còn 4 cột Time/Activity/Location/Leader.", "en": "Why Sunday colspan='4' not 5? The Day column already takes 1 cell, leaving 4: Time/Activity/Location/Leader.", "k": "ask"}, {"vi": ".table-container có overflow-x:auto cho bảng cuộn ngang trên màn hình hẹp.", "en": ".table-container has overflow-x:auto so the table scrolls horizontally on narrow screens.", "k": "good"}, {"vi": "Nên thêm scope='col' cho <th> để screen reader đọc đúng header cột.", "en": "Add scope='col' to <th> so screen readers announce the correct column header.", "k": "ask"}]
  },
  {
    id: "contact", name: "Contact", file: "contact.html",
    html: `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <title>Contact Music Club</title>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Open+Sans:wght@400;600;700">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
     <header>
        <h1>Music Club</h1>
       </header>
     <nav>
    <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="activities.html">Activities</a></li>
        <li><a href="contact.html" class="active">Contact</a></li>
    </ul>
    </nav>
 <main>
    <section>
    <h2>Contact Us</h2>
      <p>If you have any questions or want to join our club, feel free to reach out to us through any of the channels below.<br>
        We usually reply within one or two days.</p>
    </section>

     <section>
     <h2>Ways to Reach Us</h2>
        <ul>
            <li>Email: musicclub@example.com</li>
            <li>Phone: 0123 456 789</li>
            <li>Facebook: facebook.com/musicclub.example</li>
            <li>Instagram: @musicclub.example</li>
            <li>YouTube: Music Club Channel</li>
        </ul>
        </section>
    <section>
        <h2>Tickets and Events</h2>
        <p>If you prefer our events, you can send email to us to get tickets for our events. We will provide you with the necessary information and instructions on how to obtain tickets for our concerts and activities.</p>
        <ul>
            <li><strong>Music Night: Mar 29 | 7 PM | Room 303</strong></li>
            <li><strong>Apr 15 | 3 PM | Room 302</strong></li>
            <li><strong>Open Mic Night: May 10 | 6 PM | Room 301</strong></li>
        </ul>
        </section>
        <section>
        <h2>Send Us a Message</h2>
        <form action="mailto:musicclub@example.com" method="post">
            <div class ="form-group">
              <label for="name" class="label">Name:</label><br>
              <input type="text" id="name" name="name" class="input" required><br><br>
            </div>

            <div class ="form-group">
               <label for="email" class="label">Email:</label><br>
               <input type="email" id="email" name="email" class="input" required><br><br>
            </div>

            <div class ="form-group">
               <label for="message" class="label">Message:</label><br>
               <textarea id="message" name="message" rows="4" class="textarea" required></textarea><br><br>
            </div>
            
            <div class ="form-group">
               <button type="submit" class="button">Submit</button>
            </div>
        </form>
    </section>
    <section>
        <h2>Where we meet</h2>
        <p>We usually meet in the Music Room, which is located in the school's music department. The room is equipped with various musical instruments and sound equipment for our rehearsals and activities.</p>
        <img src="images/music_room.jpg" alt="Photo of the Music Room where we hold our rehearsals" width="300" height="200">
        <p>We meet every Saturday at 5 PM in Room 301, Building A, Tran Quoc Toan Street, Ha Noi, Viet Nam.</p>
        <p><strong>Thank you for your interest!</strong></p>
    </section>
 </main>
 <footer>
        <p>Copyright &copy; 2026 Music Club</p>
           <p>
            <a href="https://facebook.com" target="_blank" rel="noopener">Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener">Instagram</a>
            <a href="https://youtube.com" target="_blank" rel="noopener">YouTube</a>
        </p>
    </footer>
</body>
</html>`,
    notes: [{"vi": "form có label for='name'/'email'/'message' nối đúng id input; các input đều required.", "en": "The form has label for='name'/'email'/'message' bound to the right input ids; all inputs are required.", "k": "good"}, {"vi": "input type='email' tự kiểm tra định dạng; textarea rows='4' — đúng kiểu input cho từng dữ liệu.", "en": "input type='email' validates format automatically; textarea rows='4' — the right input type per data.", "k": "good"}, {"vi": "action='mailto:...' method='post': mailto KHÔNG gửi dữ liệu POST thật như server. Giảng viên có thể hỏi cách hoạt động và hạn chế này.", "en": "action='mailto:...' method='post': mailto does NOT really send POST data like a server. The examiner may ask how it works and this limitation.", "k": "ask"}, {"vi": "Thiếu <meta name='description'> — có thể bị hỏi về SEO cơ bản cho trang Contact.", "en": "Missing <meta name='description'> — you may be asked about basic SEO for the Contact page.", "k": "ask"}]
  }
]
};
