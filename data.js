const heroesData = [
    {
        id: 11, name: "Aamon", role: "Assassin", image: "img/Aamon.jpg",
        winRate: 53.55,
        weakAgainst: [
            { name: "Nana", reason: "ตุ๊กตา Molina ติดตาม Aamon ได้แม้จะหายตัวอยู่" },
            { name: "Granger", reason: "Granger ยิงสกิล 1 สุ่มโดน Aamon ตอนหายตัวได้แรงมาก" },
            { name: "Ling", reason: "Ling หนี Aamon ทันและสวนกลับจากบนกำแพงได้" },
            { name: "Hilda", reason: "Hilda ถึกเกินกว่า Aamon จะเบิร์สชุดเดียวตายและไล่ตามได้" },
            { name: "Masha", reason: "Masha เลือดเยอะมาก Aamon ฆ่าไม่ตายและโดนสวนเจ็บ" }
        ],
        tips: "เก็บเศษกระจกที่พื้นเพื่อรีเซ็ตสกิลและหายตัวต่อเนื่อง"
    },
    {
        id: 57, name: "Akai", role: "Tank", image: "img/Akai.jpg",
        winRate: 50.84,
        weakAgainst: [
            { name: "Argus", reason: "Argus เปิดอมตะเดินฝ่าสกิลปั่นของ Akai ได้" },
            { name: "Alucard", reason: "Alucard ดูดเลือดสู้และไล่ตาม Akai ได้ดี" },
            { name: "Wanwan", reason: "Wanwan กระโดดหนีการหนีบของ Akai ได้ง่ายและเก็บ Stack" },
            { name: "Silvanna", reason: "Silvanna ล็อค Akai ไม่ให้ปั่นหนีหรือปั่นเข้าหาเพื่อน" },
            { name: "Guinevere", reason: "Guinevere กระโดดข้ามการปั่นและยก Akai ลอยฟ้าได้" }
        ],
        tips: "ใช้สกิลปั่น (Ulti) เพื่อหนีบศัตรูเข้าป้อมหรือผนัง"
    },
    {
        id: 70, name: "Aldous", role: "Fighter", image: "img/Aldous.jpg",
        winRate: 50.30,
        weakAgainst: [
            { name: "Sun", reason: "Aldous ตีเป้าเดี่ยว เคลียร์ร่างปลอม Sun ไม่ทัน" },
            { name: "Novaria", reason: "Novaria ยิงไกลและเปิด Vision ทำให้ Aldous ซ่อนตัวยาก" },
            { name: "Zhask", reason: "Aldous ทุบป้อม Zhask ไม่เข้าและโดนสโลว์จนตาย" },
            { name: "Helcurt", reason: "โดนใบ้ (Silence) ตอนจะทุบ ทำให้เสียจังหวะ Stack หาย" },
            { name: "X.Borg", reason: "X.Borg เผาเกราะ Aldous แตกง่ายๆ และสโลว์ต่อเนื่อง" }
        ],
        tips: "ฟาร์มเก็บ Stack ให้ครบ 500 ก่อนเข้าไฟต์เต็มตัว"
    },
    {
        id: 60, name: "Alice", role: "Mage/Tank", image: "img/Alice.jpg",
        winRate: 50.66,
        weakAgainst: [
            { name: "Gloo", reason: "Gloo เกาะติด Alice ทำให้หนีไม่ออกและโดนดาเมจต่อเนื่อง" },
            { name: "Popol & Kupa", reason: "หมา Popol กัดขัดจังหวะและทำดาเมจแรงทะลุการดูดเลือด" },
            { name: "Chip", reason: "Chip วาร์ปเพื่อนมารุม Alice ที่ต้องเอาตัวเข้าแลก" },
            { name: "Atlas", reason: "Atlas จับ Alice ล็อคขาตายในวงไฟต์" },
            { name: "Tigreal", reason: "Tigreal ดัน Alice ออกจากวงไฟต์ทำให้ดูดเลือดไม่ได้" }
        ],
        tips: "ฟาร์มครีปให้ได้ 50 ตัวแรกไวๆ เพื่อปลดล็อคสเตตัส"
    },
    {
        id: 101, name: "Alpha", role: "Fighter", image: "img/Alpha.jpg",
        winRate: 48.29,
        weakAgainst: [
            { name: "Khufra", reason: "Khufra ขัดจังหวะการบินอัลติของ Alpha ได้" },
            { name: "Diggie", reason: "Diggie ล้าง Stun จากอัลติ Alpha ได้ทันที" },
            { name: "Hilda", reason: "Hilda วิ่งเร็ว Alpha ไล่ตามไม่ทันและโดนตอดจนตาย" },
            { name: "Odette", reason: "Odette ยิงสวน Alpha ที่พุ่งเข้ามาตรงๆ ได้แรงมาก" },
            { name: "Alucard", reason: "Alucard ดูดเลือดสู้ Alpha ได้ดีกว่าในการดวล 1-1" }
        ],
        tips: "คอมโบสกิลให้โดนเพื่อเรียก Beta (โดรน) มาช่วยโจมตี True Damage"
    },
    {
        id: 54, name: "Alucard", role: "Fighter", image: "img/Alucard.jpg",
        winRate: 51.12,
        weakAgainst: [
            { name: "Sun", reason: "Alucard ล็อคเป้าพลาดไปตีร่างปลอม Sun ได้ง่าย" },
            { name: "Natalia", reason: "โดน Natalia ใบ้และล้วงตายก่อนจะได้ดูดเลือด" },
            { name: "Saber", reason: "โดน Saber ล็อคตายในชุดเดียว (แพ้ CC จับตาย)" },
            { name: "Mathilda", reason: "Mathilda บินหนี Alucard และพาเพื่อนหนีได้" },
            { name: "Luo Yi", reason: "Luo Yi ดูด Alucard ให้เสียจังหวะการกระโดด" }
        ],
        tips: "รอจังหวะศัตรูใช้ CC หมดแล้วค่อยกระโดดเข้า"
    },
    {
        id: 66, name: "Angela", role: "Support", image: "img/Angela.jpg",
        winRate: 50.56,
        weakAgainst: [
            { name: "Carmilla", reason: "Carmilla แชร์ดาเมจใส่ร่างที่ Angela สิงอยู่ ตายคู่" },
            { name: "Uranus", reason: "Uranus รีเลือดสู้ดาเมจตอดของ Angela ได้สบาย" },
            { name: "Faramis", reason: "Faramis ดึง Angela และเพื่อนที่สิงอยู่ให้กลับมาตาย" },
            { name: "Balmond", reason: "Balmond ปั่นทะลุเกราะ Angela ได้ง่าย" },
            { name: "X.Borg", reason: "X.Borg เผาเกราะ Angela แตกไวมาก" }
        ],
        tips: "ดูแมพตลอดเวลา เตรียมกดอัลติช่วยเพื่อนที่กำลังบวก"
    },
    {
        id: 34, name: "Argus", role: "Fighter", image: "img/Argus.jpg",
        winRate: 51.97,
        weakAgainst: [
            { name: "Masha", reason: "Masha ปลดอาวุธ (Disarm) ทำให้ Argus ตีไม่ได้" },
            { name: "Saber", reason: "Saber ล็อคถ่วงเวลาให้ Argus หมดอมตะ" },
            { name: "Karrie", reason: "Karrie ยิงว่าว Argus จนเข้าไม่ถึงตัว" },
            { name: "Minsitthar", reason: "โดน Minsitthar กางวง Argus พุ่งหนีหรือเข้าไม่ได้" },
            { name: "Guinevere", reason: "โดนยกงัดลอยฟ้าเสียเวลาอมตะฟรี" }
        ],
        tips: "กดอัลติเมื่อเลือดใกล้หมดเท่านั้น อย่ากดเร็วไป"
    },
    {
        id: 106, name: "Arlott", role: "Fighter/Assassin", image: "img/Arlott.jpg",
        winRate: 48.01,
        weakAgainst: [
            { name: "X.Borg", reason: "โดน X.Borg เผาจนเข้าไม่ติด และแพ้ True Damage" },
            { name: "Ruby", reason: "Ruby ขัดจังหวะการพุ่งของ Arlott ได้ต่อเนื่อง" },
            { name: "Guinevere", reason: "โดนยกตอนกำลังจะพุ่ง คอมโบหลุด" },
            { name: "Natan", reason: "Natan ผลัก Arlott ออกและยิงสวนแรงมาก" },
            { name: "Esmeralda", reason: "Esmeralda ดูดเกราะ Arlott และยืนแลกได้นานกว่า" }
        ],
        tips: "รอเพื่อน CC ให้ติด Passive (ตาสีแดง) แล้วค่อยแทงจะแรงมาก"
    },
    {
        id: 41, name: "Atlas", role: "Tank", image: "img/Atlas.jpg",
        winRate: 51.59,
        weakAgainst: [
            { name: "Popol & Kupa", reason: "หมาของ Popol ขัดจังหวะการร่ายอัลติ Atlas" },
            { name: "Layla", reason: "Layla ยิงฟรีจากระยะไกล Atlas เข้าไม่ถึง" },
            { name: "Faramis", reason: "Faramis กดอัลติช่วยเพื่อนรอดจากการจับของ Atlas" },
            { name: "Harith", reason: "Harith แดชหลบการจับของ Atlas ได้ง่าย" },
            { name: "Odette", reason: "Odette ยิงอัลติสวนตอน Atlas พุ่งเข้ามา (แลกกัน)" }
        ],
        tips: "ถ้าอีกฝั่งมี Diggie ห้ามเลือก Atlas เด็ดขาด"
    },
    {
        id: 27, name: "Aulus", role: "Fighter", image: "img/Aulus.jpg",
        winRate: 52.57,
        weakAgainst: [
            { name: "Khufra", reason: "Khufra ขัดจังหวะ Aulus ไม่ให้ทุบ" },
            { name: "Faramis", reason: "Faramis ยื้อชีวิตเพื่อนจากดาเมจ Aulus" },
            { name: "Carmilla", reason: "Carmilla ลดเกราะและสโลว์ Aulus จนตีไม่ออก" },
            { name: "Odette", reason: "Aulus ต้องเดินเข้าหา โดน Odette สวนเจ็บ" },
            { name: "Uranus", reason: "Uranus ถึกและหนี Aulus ได้สบาย" }
        ],
        tips: "ฟาร์มให้ไวที่สุด Aulus เก่งตอนเลเวล 12 อัพค้อนใหญ่สุด"
    },
    {
        id: 95, name: "Aurora", role: "Mage", image: "img/Aurora.jpg",
        winRate: 48.54,
        weakAgainst: [
            { name: "Odette", reason: "Odette มีเกราะตอนอัลติ ทนคอมโบ Aurora ได้" },
            { name: "Guinevere", reason: "โดน Guinevere โดดข้ามหัวและยกตาย" },
            { name: "Silvanna", reason: "Silvanna ล็อค Aurora ตายในวงขัง" },
            { name: "Estes", reason: "Estes ฮีลสู้ดาเมจชุดเดียวของ Aurora ได้" },
            { name: "Cici", reason: "Cici พริ้วและรักษาระยะห่างจากสกิล Aurora ได้ดี" }
        ],
        tips: "เก็บ Stack ให้แดง (เต็ม) ก่อนเข้าไฟต์เสมอ เพื่อให้สกิลแช่แข็งทำงาน"
    },
    {
        id: 59, name: "Badang", role: "Fighter", image: "img/Badang.jpg",
        winRate: 50.69,
        weakAgainst: [
            { name: "Lylia", reason: "Lylia ระเบิดใส่ Badang ที่ยืนต่อยอยู่กับที่" },
            { name: "Sun", reason: "ร่างปลอม Sun บังกำแพงและรุมทุบ Badang" },
            { name: "Zilong", reason: "Zilong วิ่งหนีออกจากกำแพงได้ไว หรือแทงสวน" },
            { name: "Yin", reason: "Yin ลาก Badang เข้าห้องขัง ทำให้เสียจังหวะคอมโบ" },
            { name: "Aldous", reason: "Aldous ทุบ Badang ทีเดียวแตกตอนกำลังต่อย" }
        ],
        tips: "ดักพุ่มแล้วสร้างกำแพงขัง รัวหมัดใส่ให้ตาย"
    },
    {
        id: 128, name: "Balmond", role: "Fighter", image: "img/Balmond.jpg",
        winRate: 42.66,
        weakAgainst: [
            { name: "Diggie", reason: "Diggie ล้าง CC และวางระเบิดใส่ Balmond ที่เดินช้า" },
            { name: "Cici", reason: "Cici กระโดดไคท์ Balmond ได้ตลอดกาล" },
            { name: "Khufra", reason: "Khufra ขัดจังหวะสกิลปั่นของ Balmond" },
            { name: "Carmilla", reason: "Carmilla ดูดเกราะ Balmond จนตัวบาง" },
            { name: "Yve", reason: "Yve สโลว์ Balmond จนเข้าไม่ถึงตัว" }
        ],
        tips: "ใช้สกิล 2 ปั่นเพื่อลาสครีปและรีเลือด ใช้อัลติลาสคิล"
    },
    {
        id: 24, name: "Bane", role: "Fighter", image: "img/Bane.jpg",
        winRate: 52.66,
        weakAgainst: [
            { name: "Khufra", reason: "Khufra ขัดจังหวะการเดินของ Bane" },
            { name: "Khaleed", reason: "Khaleed เบิร์สต้นเกมแรงกว่า Bane ยืนแลกแพ้" },
            { name: "Faramis", reason: "อัลติ Faramis กันดาเมจระเบิดของ Bane ได้" },
            { name: "Rafaela", reason: "Rafaela เร่งความเร็วหนีสกิล Bane" },
            { name: "Granger", reason: "Granger ยิงไกลกว่าระยะสกิล Bane" }
        ],
        tips: "เน้นยิงสกิล 1 ชิ่งใส่ศัตรู แรงมากในช่วงท้ายเกม"
    },
    {
        id: 91, name: "Barats", role: "Tank", image: "img/Barats.jpg",
        winRate: 49.08,
        weakAgainst: [
            { name: "Harith", reason: "Harith แดชหลบลิ้น Barats ได้ง่ายมาก" },
            { name: "Saber", reason: "Saber เจาะเกราะ Barats เข้าเนื้อๆ" },
            { name: "Alucard", reason: "Alucard ดูดเลือดจาก Barats ที่ตัวใหญ่ได้สบาย" },
            { name: "Brody", reason: "Brody ตี % เลือด ใส่ Barats เจ็บมาก" },
            { name: "Silvanna", reason: "Silvanna ล็อค Barats ให้ขยับไม่ได้และแทงรัวๆ" }
        ],
        tips: "รักษา Stack ไว้ตลอดเวลา อย่าให้ตัวเล็กลง"
    },
    {
        id: 87, name: "Baxia", role: "Tank", image: "img/Baxia.jpg",
        winRate: 49.33,
        weakAgainst: [
            { name: "Gloo", reason: "Gloo ขี่หลัง Baxia ทำให้กลิ้งไม่ออก" },
            { name: "Harith", reason: "Harith แดชหลบการกลิ้งชนของ Baxia ได้หมด" },
            { name: "Carmilla", reason: "Carmilla สโลว์ Baxia จนเสียความเร็ว" },
            { name: "Minsitthar", reason: "Minsitthar ดึง Baxia หยุดการกลิ้ง" },
            { name: "Melissa", reason: "ตุ๊กตา Melissa กันไม่ให้ Baxia กลิ้งเข้าถึงตัว" }
        ],
        tips: "Baxia คือตัวแก้ทางพวกฮีลแรงๆ (Estes/Esmeralda) โดยธรรมชาติ"
    },
    {
        id: 88, name: "Beatrix", role: "Marksman", image: "img/Beatrix.jpg",
        winRate: 49.32,
        weakAgainst: [
            { name: "Estes", reason: "Estes ฮีลสู้ดาเมจตอดของ Beatrix ได้" },
            { name: "Hanabi", reason: "Hanabi ยิงชิ่งใส่ Beatrix ที่ยืนเลน" },
            { name: "Diggie", reason: "Diggie วางระเบิดไล่ Beatrix ออกจากพุ่ม" },
            { name: "Irithel", reason: "Irithel ยิงแรงกว่าในระยะประชิด" },
            { name: "Layla", reason: "Layla ยิงไกลกว่าปืนกลของ Beatrix" }
        ],
        tips: "เลือกปืนให้ถูกสถานการณ์ (สไนเปอร์=ไกล, ลูกซอง=ใกล้, กล=รัว)"
    },
    {
        id: 78, name: "Belerick", role: "Tank", image: "img/Belerick.jpg",
        winRate: 49.93,
        weakAgainst: [
            { name: "Carmilla", reason: "Carmilla ขโมยเกราะ Belerick" },
            { name: "Edith", reason: "Edith ตีเป็นเวทย์ Belerick สะท้อนกายภาพไม่ค่อยผล" },
            { name: "Melissa", reason: "Melissa ยิงผ่านตุ๊กตา ไม่โดนสะท้อน (Bug/Feature)" },
            { name: "Wanwan", reason: "Wanwan เปิดจุดอ่อน Belerick ได้ง่ายเพราะตัวใหญ่" },
            { name: "Rafaela", reason: "Rafaela สโลว์ Belerick จนเดินตามไม่ทัน" }
        ],
        tips: "ยิ่งโดนตีเร็วยิ่งดี สวนกลับด้วยหนาม Passive"
    },
    {
        id: 35, name: "Benedetta", role: "Assassin", image: "img/Benedetta.jpg",
        winRate: 51.95,
        weakAgainst: [
            { name: "Alpha", reason: "Alpha ล็อคขา Benedetta ได้ด้วยอัลติ" },
            { name: "Atlas", reason: "Atlas จับ Benedetta ที่พุ่งเข้ามาได้" },
            { name: "X.Borg", reason: "X.Borg เผา Benedetta ตลอดเวลา ทำให้พุ่งยาก" },
            { name: "Gord", reason: "Gord วางบ่อสตั๊นดักทางพุ่ง" },
            { name: "Carmilla", reason: "Carmilla สโลว์และใบ้ Benedetta" }
        ],
        tips: "ใช้สกิล 2 เพื่อบล็อค CC และสวนกลับ (Parry)"
    },
    {
        id: 36, name: "Brody", role: "Marksman", image: "img/Brody.jpg",
        winRate: 51.79,
        weakAgainst: [
            { name: "Irithel", reason: "Irithel ยิงรัวกว่า Brody ที่ต้องชาร์จยิง" },
            { name: "Natalia", reason: "Natalia ใบ้ Brody ทำให้กดสกิลหนีไม่ได้" },
            { name: "Karina", reason: "Karina สะท้อนการโจมตีปกติของ Brody" },
            { name: "Joy", reason: "Joy พริ้วหลบสกิลล็อคเป้าของ Brody" },
            { name: "Helcurt", reason: "Helcurt ใบ้และล้วง Brody ตายไวมาก" }
        ],
        tips: "มาร์คศัตรูให้ครบ 4 stack แล้วกดอัลติ จะแรงที่สุด"
    },
    {
        id: 73, name: "Bruno", role: "Marksman", image: "img/Bruno.jpg",
        winRate: 50.15,
        weakAgainst: [
            { name: "Lolita", reason: "Lolita บล็อคบอลของ Bruno ได้หมด" },
            { name: "Wanwan", reason: "Wanwan หลบสกิลสไลด์ของ Bruno ได้" },
            { name: "Irithel", reason: "Irithel ยิงไคท์ Bruno ได้ดีกว่า" },
            { name: "Ling", reason: "Ling ล้วง Bruno ตายก่อนเก็บบอล" },
            { name: "Gusion", reason: "Gusion เบิร์ส Bruno ตายคาที่" }
        ],
        tips: "เลี้ยงลูกบอลให้ดี อย่าให้ตกพื้น จะยิงแรงและคริตลอด"
    },
    {
        id: 37, name: "Carmilla", role: "Support", image: "img/Barmilla.jpg",
        winRate: 51.78,
        weakAgainst: [
            { name: "Harith", reason: "Harith แดชหลบโซ่ของ Carmilla" },
            { name: "Chip", reason: "Chip วาร์ปหนีวง Carmilla ได้" },
            { name: "Gloo", reason: "Gloo แยกร่างทำให้ Carmilla ล็อคเป้าผิด" },
            { name: "Minsitthar", reason: "Minsitthar กันไม่ให้ Carmilla เข้าถึงตัว" },
            { name: "Barats", reason: "Barats ต้านสถานะ CC ของ Carmilla ได้ดี" }
        ],
        tips: "รอเพื่อนที่มีดาเมจวงกว้าง (AOE) แล้วค่อยกดอัลติเชื่อมศัตรู"
    },
    {
        id: 53, name: "Cecilion", role: "Mage", image: "img/Becilion.jpg",
        winRate: 51.14,
        weakAgainst: [
            { name: "Odette", reason: "Odette ยืนแลกดาเมจได้แรงกว่า Cecilion" },
            { name: "Diggie", reason: "Diggie เร่งความเร็วพาเพื่อนเข้าประชิด Cecilion" },
            { name: "Khufra", reason: "Khufra กระโดดข้ามระยะสกิลมาหา Cecilion" },
            { name: "Lylia", reason: "Lylia วิ่งเร็วกว่าและระเบิดใส่ Cecilion ระยะใกล้" },
            { name: "Aulus", reason: "Aulus วิ่งเร็วและทุบ Cecilion ตายไว" }
        ],
        tips: "รักษาระยะห่างเสมอ สกิล 1 แรงที่สุดที่ปลายระยะ"
    },
    {
        id: 90, name: "Chang'e", role: "Mage", image: "img/Chang'e.jpg",
        winRate: 49.18,
        weakAgainst: [
            { name: "Diggie", reason: "Diggie วางระเบิดไล่ Chang'e" },
            { name: "Masha", reason: "Masha วิ่งเร็วหลบอัลติและเข้าถึงตัว Chang'e" },
            { name: "Barats", reason: "Barats ถึกทนทานอัลติ Chang'e ได้สบาย" },
            { name: "Ixia", reason: "Ixia ยิงสวน Chang'e ได้แรงกว่า" },
            { name: "Novaria", reason: "Novaria ยิงไกลกว่า Chang'e มาก" }
        ],
        tips: "รักษาโล่ (สกิล 2) ไว้ตลอดเวลา เพื่อเพิ่มดาเมจ"
    },
    {
        id: 120, name: "Chip", role: "Support/Tank", image: "img/Chip.jpg",
        winRate: 45.92,
        weakAgainst: [
            { name: "Zilong", reason: "Zilong วิ่งไล่ Chip ทันแม้จะเปิดวาร์ป" },
            { name: "Odette", reason: "Odette ดักรอหน้าประตูวาร์ปแล้วอัลติใส่" },
            { name: "Layla", reason: "Layla ยิงฟรีใส่ Chip จากระยะไกล" },
            { name: "Luo Yi", reason: "Luo Yi ดูด Chip ออกจากประตูวาร์ป" },
            { name: "Selena", reason: "Selena วางกับดักหน้าประตูวาร์ป Chip" }
        ],
        tips: "วางประตูมิติให้เพื่อนเข้ามารุมยำศัตรู"
    },
    {
        id: 123, name: "Chou", role: "Fighter", image: "img/Chou.jpg",
        winRate: 44.37,
        weakAgainst: [
            { name: "X.Borg", reason: "X.Borg เผาจน Chou เข้าไม่ติดและเกราะแตก" },
            { name: "Angela", reason: "Angela สโลว์ Chou จนเสียจังหวะเตะ" },
            { name: "Gord", reason: "Gord วางบ่อสตั๊นดักทางเตะ" },
            { name: "Natalia", reason: "Natalia ใบ้ Chou ทำให้ใช้ Shunpo ไม่ได้" },
            { name: "Nana", reason: "โดนสาปเป็นตุ๊กตาก่อนจะได้เตะ" }
        ],
        tips: "ใช้ Shunpo หลบ CC จังหวะสำคัญ"
    },
    {
        id: 104, name: "Cici", role: "Fighter", image: "img/Cici.jpg",
        winRate: 48.18,
        weakAgainst: [
            { name: "Thamuz", reason: "Thamuz ถึกและแรงกว่า ยืนแลกชนะ Cici" },
            { name: "Barats", reason: "Barats กิน Cici ที่กระโดดไปมาได้" },
            { name: "Carmilla", reason: "Carmilla สโลว์ Cici จนกระโดดไม่ออก" },
            { name: "Benedetta", reason: "Benedetta พริ้วกว่าและไล่ตาม Cici ทัน" },
            { name: "Hylos", reason: "Hylos สโลว์ Cici และทำดาเมจต่อเนื่อง" }
        ],
        tips: "รักษาระยะห่าง ล็อคเป้าแล้วกระโดดไปเรื่อยๆ อย่าหยุด"
    },
    {
        id: 68, name: "Claude", role: "Marksman", image: "img/Claude.jpg",
        winRate: 50.45,
        weakAgainst: [
            { name: "Odette", reason: "โดน Odette สวนอัลติใส่ตอน Claude เข้ามาหมุน" },
            { name: "Esmeralda", reason: "Esmeralda ดูดเกราะ Claude จนตัวบาง" },
            { name: "Irithel", reason: "Irithel ยิงแรงกว่าในระยะประชิด" },
            { name: "Nana", reason: "Nana วางตุ๊กตาดักจุดที่ Claude จะวาร์ปกลับ" },
            { name: "Balmond", reason: "Balmond ปั่นสวน Claude ได้แรงกว่า" }
        ],
        tips: "รักษา Stack ลิงให้เต็ม 5 ก่อนเข้าไฟต์เสมอ"
    },
    {
        id: 38, name: "Clint", role: "Marksman", image: "img/Clint.jpg",
        winRate: 51.76,
        weakAgainst: [
            { name: "Odette", reason: "Odette ยิงไกลและกว้างกว่า Clint" },
            { name: "Irithel", reason: "Irithel วิ่งหลบสกิล Clint ได้ง่าย" },
            { name: "Belerick", reason: "Clint ยิงแรง โดนสะท้อนตายเอง" },
            { name: "Karina", reason: "Karina กันการโจมตีปกติของ Clint ได้" },
            { name: "Lunox", reason: "Lunox ยิงสวน Clint ได้ไวกว่า" }
        ],
        tips: "กดสกิลแล้วยิงธรรมดาตามทันที (Passive) เพื่อระยะยิงที่ไกลขึ้น"
    },
    {
        id: 51, name: "Cyclops", role: "Mage", image: "img/Cyclops.jpg",
        winRate: 51.21,
        weakAgainst: [
            { name: "Rafaela", reason: "Rafaela วิ่งหนีลูกบอล Cyclops ได้" },
            { name: "Joy", reason: "Joy แดชหลบสกิล Cyclops ได้หมด" },
            { name: "Wanwan", reason: "Wanwan ล้างสถานะขังของ Cyclops ได้" },
            { name: "Julian", reason: "Julian หลบสกิลและสวนกลับแรงกว่า" },
            { name: "Chou", reason: "Chou เตะสวน Cyclops ที่ไม่มีสกิลหนี" }
        ],
        tips: "ขยับตัวตลอดเวลาขณะใช้สกิล 2 เพื่อไล่ตามศัตรู"
    },
    {
        id: 4, name: "Diggie", role: "Support", image: "img/Diggie.jpg",
        winRate: 54.96,
        weakAgainst: [
            { name: "Carmilla", reason: "Diggie ล้าง CC ได้ แต่กันดาเมจแชร์จาก Carmilla ไม่ได้" },
            { name: "Alpha", reason: "Diggie ตัวบาง โดน Alpha ล้วงชุดเดียวตาย" },
            { name: "Guinevere", reason: "ถ้า Diggie ไม่มีอัลติ จะโดน Guinevere ยกตายยกทีม" },
            { name: "Brody", reason: "โดน Brody ล็อคยิงจากระยะไกล ตายก่อนได้เดิน" },
            { name: "Valir", reason: "Diggie เข้าไม่ถึงตัวเพื่อนเพื่อกดอัลติ โดน Valir ผลักออก" }
        ],
        tips: "ตัวแก้ทาง Atlas/Tigreal ที่ดีที่สุดในเกม"
    },
    {
        id: 125, name: "Dyrroth", role: "Fighter", image: "img/Dyrroth.jpg",
        winRate: 44.31,
        weakAgainst: [
            { name: "Uranus", reason: "Uranus ถึกและรีเลือดสู้ Dyrroth ได้" },
            { name: "Esmeralda", reason: "Esmeralda ดูดเกราะที่ Dyrroth ลดไปได้" },
            { name: "Alucard", reason: "Alucard ดูดเลือดแลกชนะ Dyrroth" },
            { name: "Carmilla", reason: "Carmilla ลดเกราะ Dyrroth กลับและรุมกินโต๊ะ" },
            { name: "Angela", reason: "Angela ช่วยเพื่อนให้รอดจากคอมโบ Dyrroth" }
        ],
        tips: "ลดเกราะศัตรูด้วยสกิล 2 ก่อน แล้วค่อยใช้อัลติ"
    },
    {
        id: 43, name: "Edith", role: "Tank", image: "img/Edith.jpg",
        winRate: 51.58,
        weakAgainst: [
            { name: "Harith", reason: "Harith พริ้วหลบสกิลจับของ Edith ได้หมด" },
            { name: "Granger", reason: "Granger ยิงไกล Edith เข้าไม่ถึง" },
            { name: "Freya", reason: "Freya ยืนแลกตอน Edith แปลงร่างชนะ" },
            { name: "Silvanna", reason: "Silvanna ล็อค Edith ไม่ให้เล่น" },
            { name: "Carmilla", reason: "Carmilla ขโมยเกราะ Edith" }
        ],
        tips: "รอจังหวะหลอดพลังเต็มค่อยกดอัลติเปลี่ยนร่าง"
    },
    {
        id: 124, name: "Esmeralda", role: "Mage/Tank", image: "img/Esmeralda.jpg",
        winRate: 44.36,
        weakAgainst: [
            { name: "Odette", reason: "Odette เบิร์ส Esmeralda ตายก่อนได้ดูดเกราะ" },
            { name: "Ruby", reason: "Ruby CC เยอะ ขัดจังหวะ Esmeralda รำ" },
            { name: "Argus", reason: "Argus ตีทะลุเกราะและเป็นอมตะ" },
            { name: "Lapu-Lapu", reason: "Lapu-Lapu เบิร์สชุดเดียว Esmeralda หาย" },
            { name: "Aldous", reason: "Aldous ทุบ Esmeralda แตกในหมัดเดียวตอนท้ายเกม" }
        ],
        tips: "อย่ากดสกิล 1 มั่ว ถ้าไม่มีศัตรูให้ดูดเกราะ"
    },
    {
        id: 117, name: "Estes", role: "Support", image: "img/Estes.jpg",
        winRate: 53.36,
        weakAgainst: [
            { name: "Diggie", reason: "Diggie วางระเบิดดักจุดที่ Estes ยืนเกาะกลุ่มกัน" },
            { name: "Carmilla", reason: "Estes ชอบยืนชิดเพื่อน โดน Carmilla เชื่อมตายหมู่" },
            { name: "Guinevere", reason: "โดดรวบ Estes และเพื่อนที่ยืนกระจุกกัน" },
            { name: "Melissa", reason: "ตุ๊กตา Melissa เชื่อมดาเมจใส่ Estes และเพื่อนได้" },
            { name: "Cyclops", reason: "Cyclops สแปมสกิลใส่กลุ่มที่ยืนฮีลกัน" }
        ],
        tips: "ถ้าอีกฝั่งออกของตัดเลือด (Dominance Ice) ให้ระวังเป็นพิเศษ"
    },
    {
        id: 93, name: "Eudora", role: "Mage", image: "img/Eudora.jpg",
        winRate: 48.84,
        weakAgainst: [
            { name: "Natalia", reason: "โดน Natalia ล้วงตายก่อนได้กดสตั๊น" },
            { name: "Joy", reason: "Joy มีกันสถานะ ไม่กลัวสตั๊น Eudora" },
            { name: "Zilong", reason: "Zilong วิ่งเร็วและแทงสวน Eudora ตายไว" },
            { name: "Rafaela", reason: "Rafaela เปิดพุ่มเช็ค Eudora ได้" },
            { name: "Helcurt", reason: "Helcurt ใบ้ Eudora ไม่ให้ใช้สกิล" }
        ],
        tips: "ดักพุ่มไม้ รอตัวบางๆ เดินมาแล้วกด 2-3-1 หายวูบ"
    },
    {
        id: 127, name: "Fanny", role: "Assassin", image: "img/Fanny.jpg",
        winRate: 42.67,
        weakAgainst: [
            { name: "Gloo", reason: "Gloo เกาะติด Fanny ทำให้บินไม่ออก" },
            { name: "Granger", reason: "Granger ยิงสวน Fanny ได้แรงและแม่น" },
            { name: "Odette", reason: "Fanny บินเข้าหา โดน Odette อัลติสวน" },
            { name: "Atlas", reason: "Atlas จับ Fanny ล็อคขาตาย" },
            { name: "Baxia", reason: "Baxia กลิ้งตามและลดการรีเลือด Fanny" }
        ],
        tips: "ฝึกบินใน Custom ให้คล่องก่อนลงสนามจริง (สำคัญมาก)"
    },
    {
        id: 58, name: "Faramis", role: "Support", image: "img/Faramis.jpg",
        winRate: 50.71,
        weakAgainst: [
            { name: "Gloo", reason: "Gloo ระเบิดใส่เพื่อน Faramis ตายหมดก่อนกดอัลติ" },
            { name: "Sun", reason: "Sun แยกร่างทำให้ Faramis ดึงวิญญาณผิดตัว" },
            { name: "Wanwan", reason: "Wanwan บินหนีวงอัลติ Faramis ได้" },
            { name: "Chip", reason: "Chip วาร์ปหนี Faramis" },
            { name: "Edith", reason: "Edith ไล่ทุบ Faramis ออกจากวง" }
        ],
        tips: "กดอัลติเมื่อเพื่อนใกล้ตายหรือกำลังจะโดนคอมโบใหญ่"
    },
    {
        id: 12, name: "Floryn", role: "Support", image: "img/Floryn.jpg",
        winRate: 53.40,
        weakAgainst: [
            { name: "Carmilla", reason: "แชร์ดาเมจฆ่าเพื่อน Floryn ตายยกรัง ฮีลไม่ทัน" },
            { name: "X.Borg", reason: "X.Borg เผาต่อเนื่องและทำ True Damage ทะลุการฮีล" },
            { name: "Faramis", reason: "Faramis ดึงวิญญาณสวนกลับได้ดีกว่าแค่การฮีล" },
            { name: "Balmond", reason: "Balmond ปั่นเข้าไปล้วง Floryn ได้ง่าย" },
            { name: "Masha", reason: "Masha ล้วง Floryn ตายก่อนจะได้กดฮีล" }
        ],
        tips: "มอบดอกไม้ให้ตัวแบก (Core) ของทีม เพื่อเพิ่มดาเมจ"
    },
    {
        id: 111, name: "Franco", role: "Tank", image: "img/Franco.jpg",
        winRate: 47.28,
        weakAgainst: [
            { name: "Angela", reason: "Angela ช่วยเพื่อนที่โดนดึงได้ทัน" },
            { name: "Floryn", reason: "Floryn ฮีลสวนทันทีที่เพื่อนโดนดึง" },
            { name: "Diggie", reason: "Diggie ล้างสถานะดึงไม่ได้ (แต่ล้างอันอื่นได้)" },
            { name: "Layla", reason: "Layla ยิงฟรี Franco เข้าไม่ถึง" },
            { name: "Estes", reason: "Estes ยืนแลกและฮีลสู้" }
        ],
        tips: "เน้นดึงตัวบางๆ (Mage/Marksman) อย่าดึง Tank เข้ามา"
    },
    {
        id: 39, name: "Fredrinn", role: "Tank", image: "img/Fredrinn.jpg",
        winRate: 51.69,
        weakAgainst: [
            { name: "Gloo", reason: "Gloo เกาะติด Fredrinn ทำให้ทุบไม่โดน" },
            { name: "Argus", reason: "Argus ตีแลกชนะ Fredrinn" },
            { name: "Joy", reason: "Joy พริ้วหลบสกิลยั่วยุของ Fredrinn" },
            { name: "Gusion", reason: "Gusion เบิร์ส Fredrinn ชุดเดียวเจ็บหนัก" },
            { name: "Irithel", reason: "Irithel ยิงลดเกราะ Fredrinn จนบาง" }
        ],
        tips: "ต้องกล้ารับดาเมจเพื่อสะสม Crystal Energy แล้วทุบสวน"
    },
    {
        id: 21, name: "Freya", role: "Fighter", image: "img/Freya.jpg",
        winRate: 52.79,
        weakAgainst: [
            { name: "Odette", reason: "Freya ต้องเดินเข้าหา โดน Odette ยิงสวนเจ็บ" },
            { name: "Harith", reason: "Harith พริ้วเกินกว่า Freya จะทุบโดน" },
            { name: "Zhask", reason: "Freya เข้าไม่ถึงตัว Zhask ที่ซ่อนในป้อม" },
            { name: "Wanwan", reason: "Wanwan กระโดดหนี Freya ได้เรื่อยๆ" },
            { name: "Uranus", reason: "Uranus ถึกและหนีเก่ง Freya ฆ่าไม่ตาย" }
        ],
        tips: "กด Inspiration แล้วทุบ รัวๆ ในช่วงที่เปิดอัลติ"
    },
    {
        id: 118, name: "Gatotkaca", role: "Tank", image: "img/Gatotkaca.jpg",
        winRate: 46.28,
        weakAgainst: [
            { name: "Carmilla", reason: "Carmilla ขโมยเกราะ Gatot" },
            { name: "Diggie", reason: "Diggie ล้างสถานะยั่วยุ (Taunt) ของ Gatot ได้" },
            { name: "Alice", reason: "Alice ดูดเลือด Gatot จนแห้ง" },
            { name: "Zilong", reason: "Zilong วิ่งหนีวงอัลติ Gatot ทัน" },
            { name: "Odette", reason: "Odette ยิงเวทย์ทะลุเกราะกายภาพของ Gatot" }
        ],
        tips: "รอจังหวะศัตรูเผลอแล้วโดดอัลติใส่กลางวง"
    },
    {
        id: 2, name: "Gloo", role: "Tank", image: "img/Gloo.jpg",
        winRate: 56.34,
        weakAgainst: [
            { name: "Aamon", reason: "Aamon หายตัวได้ ทำให้ Gloo ล็อคเป้าขี่หัวลำบาก" },
            { name: "Odette", reason: "อัลติ Odette ชิ่งใส่ร่างแยก Gloo ดาเมจทวีคูณตายยกฝูง" },
            { name: "Beatrix", reason: "ปืน Nibiru (กล) ยิงละลายร่างแยก Gloo ได้ไวมาก" },
            { name: "Jawhead", reason: "Jawhead โยน Gloo ออกไปให้ห่างจากเพื่อนได้ง่ายๆ" },
            { name: "Alpha", reason: "สกิล Alpha เป็น AOE True Damage ฆ่าร่างแยก Gloo ได้ไว" }
        ],
        tips: "อย่ากดอัลติแตกตัวถ้าเจอ Vexana หรือ Faramis"
    },
    {
        id: 30, name: "Gord", role: "Mage", image: "img/Gord.jpg",
        winRate: 52.09,
        weakAgainst: [
            { name: "Barats", reason: "Barats ทนทานต่อเลเซอร์ Gord" },
            { name: "Odette", reason: "Gord ขาตายเวลายิง โดน Odette สวนง่าย" },
            { name: "Khufra", reason: "Khufra กระโดดข้ามเลเซอร์มาหา Gord" },
            { name: "Fredrinn", reason: "Fredrinn รับดาเมจแล้วสวนกลับ Gord" },
            { name: "Ruby", reason: "Ruby ดึง Gord ที่ยืนนิ่งๆ ได้ง่าย" }
        ],
        tips: "ยืนหลัง Tank เสมอ และใช้สกิล 1 สตั๊นให้โดนก่อนพ่นเลเซอร์"
    },
    {
        id: 130, name: "Granger", role: "Marksman", image: "img/Granger.jpg",
        winRate: 41.34,
        weakAgainst: [
            { name: "Karina", reason: "Karina สะท้อนกระสุน Granger ได้หมด" },
            { name: "Esmeralda", reason: "Esmeralda ดูดเกราะ Granger" },
            { name: "Beatrix", reason: "Beatrix ยิงสวนแรงกว่า Granger" },
            { name: "Hanabi", reason: "Hanabi มีโล่กันสตั๊นของ Granger" },
            { name: "Natan", reason: "Natan ยิงทะลุ Granger ได้ไว" }
        ],
        tips: "ยิงกระสุนนัดสุดท้าย (สีแดง) ให้โดน จะติดคริรุนแรง"
    },
    {
        id: 94, name: "Grock", role: "Tank", image: "img/Grock.jpg",
        winRate: 48.76,
        weakAgainst: [
            { name: "Popol & Kupa", reason: "หมา Popol กัด Grock จนเกราะแตก" },
            { name: "Layla", reason: "Layla ยิงฟรีใส่ Grock จากระยะไกล" },
            { name: "Miya", reason: "Miya ยิงละลาย Grock ท้ายเกม" },
            { name: "Akai", reason: "Akai ดัน Grock ออกจากกำแพง" },
            { name: "Khufra", reason: "Khufra ชน Grock ให้เสียจังหวะชาร์จ" }
        ],
        tips: "ยืนติดกำแพงเสมอเพื่อให้ถึกขึ้นและกัน CC"
    },
    {
        id: 48, name: "Guinevere", role: "Fighter", image: "img/Guinevere.jpg",
        winRate: 51.45,
        weakAgainst: [
            { name: "Lunox", reason: "Lunox กดอมตะหลบการยกของ Guinevere" },
            { name: "Zhask", reason: "Guinevere กระโดดใส่ป้อม Zhask แล้วโดนสวน" },
            { name: "Karrie", reason: "Karrie ยิง Guinevere ละลายก่อนกระโดดถึง" },
            { name: "Thamuz", reason: "Thamuz ยืนแลกในวงอัลติ Guinevere ได้" },
            { name: "Lylia", reason: "Lylia วิ่งเร็วหลบการกระโดดได้" }
        ],
        tips: "ต้องกระโดดให้โดน (Lifts) ถึงจะกดอัลติได้แรงสุดๆ"
    },
    {
        id: 61, name: "Gusion", role: "Assassin", image: "img/Gusion.jpg",
        winRate: 50.60,
        weakAgainst: [
            { name: "Natalia", reason: "Natalia ใบ้ Gusion ทำให้คอมโบไม่ออก" },
            { name: "Alucard", reason: "Alucard ดูดเลือดสู้ Gusion ได้" },
            { name: "Suyou", reason: "Suyou ลดดาเมจ Gusion ได้" },
            { name: "X.Borg", reason: "X.Borg เผาจน Gusion เข้าไม่ติด" },
            { name: "Valir", reason: "Valir ผลัก Gusion ออกตอนพุ่งเข้ามา" }
        ],
        tips: "ฝึกปามีดและเก็บมีดให้แม่น คอมโบไวๆ ศัตรูมองไม่ทัน"
    },
    {
        id: 6, name: "Hanabi", role: "Marksman", image: "img/Hanabi.jpg",
        winRate: 54.05,
        weakAgainst: [
            { name: "Popol & Kupa", reason: "หมาของ Popol กัดทะลุโล่ Hanabi และสตั๊นได้" },
            { name: "Faramis", reason: "Hanabi ยิงกระจาย จะยิ่งช่วยให้ Faramis ดึงวิญญาณได้เยอะ" },
            { name: "Guinevere", reason: "ถ้าโล่แตก Hanabi จะโดนยกและตายทันที" },
            { name: "Akai", reason: "Akai ไถ Hanabi ติดกำแพงได้แม้จะมีโล่ (ถ้ามุมดีๆ)" },
            { name: "Saber", reason: "ดาเมจ Saber แรงเกินกว่าโล่จะรับไหว (One Shot)" }
        ],
        tips: "รักษาโล่ (Passive) ไว้ตลอด เพื่อกันสถานะผิดปกติ"
    },
    {
        id: 28, name: "Hanzo", role: "Assassin", image: "img/Hanzo.jpg",
        winRate: 52.14,
        weakAgainst: [
            { name: "Diggie", reason: "Diggie ล้าง CC และตามหาร่างต้นได้" },
            { name: "Barats", reason: "Barats ถึกเกินกว่าผี Hanzo จะฆ่าได้" },
            { name: "Balmond", reason: "Balmond ปั่นมาฆ่าร่างต้น Hanzo" },
            { name: "Gord", reason: "Gord ยิงเลเซอร์หาร่างต้นจากระยะไกล" },
            { name: "Mathilda", reason: "Mathilda บินโฉบหาร่างต้นได้ไว" }
        ],
        tips: "ซ่อนร่างต้นในป้อมหรือพุ่มลึกๆ ก่อนถอดวิญญาณ"
    },
    {
        id: 121, name: "Harith", role: "Mage", image: "img/Harith.jpg",
        winRate: 45.49,
        weakAgainst: [
            { name: "Odette", reason: "Harith ต้องพุ่งไปมาในวง โดน Odette อัลติเต็มๆ" },
            { name: "Aldous", reason: "Aldous ทุบ Harith ทีเดียวตาย" },
            { name: "Irithel", reason: "Irithel ยิง Burst ใส่ Harith ตายไว" },
            { name: "Kadita", reason: "Kadita ดักคอมโบใส่ Harith" },
            { name: "Saber", reason: "Saber ล็อค Harith ไม่ให้แดช" }
        ],
        tips: "ใช้อัลติเมื่อมีสกิล 2 พร้อมใช้งาน เพื่อลดคูลดาวน์รัวๆ"
    },
    {
        id: 105, name: "Harley", role: "Mage", image: "img/Harley.jpg",
        winRate: 48.06,
        weakAgainst: [
            { name: "Zhask", reason: "Zhask ซ่อนในป้อมหนีอัลติ Harley" },
            { name: "Joy", reason: "Joy พริ้วหลบไพ่ Harley ได้หมด" },
            { name: "Gord", reason: "Gord สตั๊น Harley ตอนเข้ามาใกล้" },
            { name: "Angela", reason: "Angela ใส่เกราะให้เพื่อนรอดจากระเบิด Harley" },
            { name: "Wanwan", reason: "Wanwan ล้างวงแหวนไฟของ Harley ได้" }
        ],
        tips: "ปาไพ่ให้โดนหลังใส่วงแหวนไฟ (Ulti) เพื่อสะสมดาเมจระเบิด"
    },
    {
        id: 86, name: "Hayabusa", role: "Assassin", image: "img/Hayabusa.jpg",
        winRate: 49.35,
        weakAgainst: [
            { name: "Zhuxin", reason: "Zhuxin ยก Hayabusa ลอยฟ้า" },
            { name: "Alucard", reason: "Alucard ไล่ตามเงา Hayabusa ทัน" },
            { name: "Nolan", reason: "Nolan เบิร์สไวกว่า Hayabusa" },
            { name: "Leomord", reason: "Leomord ถึกและสวนกลับ Hayabusa ได้" },
            { name: "Novaria", reason: "Novaria เปิด Vision หาตัว Hayabusa เจอ" }
        ],
        tips: "เคลียร์ครีปให้หมดก่อนกดอัลติ ดาเมจจะได้ลงที่ฮีโร่ล้วนๆ"
    },
    {
        id: 52, name: "Helcurt", role: "Assassin", image: "img/Helcurt.jpg",
        winRate: 51.15,
        weakAgainst: [
            { name: "X.Borg", reason: "X.Borg เผา Helcurt จนเข้าใกล้ไม่ได้" },
            { name: "Zhask", reason: "Zhask มีป้อมช่วยยิง Helcurt" },
            { name: "Gord", reason: "Gord สตั๊น Helcurt ที่วิ่งเข้ามาตรงๆ" },
            { name: "Xavier", reason: "Xavier ยิงสวน Helcurt จากระยะไกล" },
            { name: "Valir", reason: "Valir ผลัก Helcurt ออกไป" }
        ],
        tips: "กดอัลติให้มืดเพื่อป่วนไฟต์ แม้จะไม่ได้เข้าไปฆ่าเองก็ตาม"
    },
    {
        id: 17, name: "Hilda", role: "Fighter", image: "img/Hilda.jpg",
        winRate: 53.20,
        weakAgainst: [
            { name: "Fredrinn", reason: "Fredrinn ถึกและยั่วยุ Hilda ให้ตีจนเสียจังหวะ" },
            { name: "Granger", reason: "Granger ยิงฟรีใส่ Hilda จากระยะไกล" },
            { name: "Ling", reason: "Hilda ไล่ตามความเร็วของ Ling ไม่ทัน" },
            { name: "Irithel", reason: "Irithel ลดเกราะและยิงไคท์ Hilda ได้" },
            { name: "Novaria", reason: "Novaria เปิด Vision ทำให้ Hilda ซ่อนในพุ่มไม่ได้" }
        ],
        tips: "เข้าออกพุ่มไม้บ่อยๆ เพื่อรีเลือดและเอาเกราะ"
    },
    {
        id: 102, name: "Hylos", role: "Tank", image: "img/Hylos.jpg",
        winRate: 48.28,
        weakAgainst: [
            { name: "Carmilla", reason: "Carmilla ขโมยเกราะ Hylos" },
            { name: "Layla", reason: "Layla ยิงฟรีใส่ Hylos ที่เดินช้า" },
            { name: "Diggie", reason: "Diggie ล้างสตั๊นของ Hylos" },
            { name: "Minsitthar", reason: "Minsitthar กันไม่ให้ Hylos เข้าถึงตัว" },
            { name: "Natan", reason: "Natan ยิง Hylos ละลายไวมาก" }
        ],
        tips: "เปิดทางเขียว (Ulti) ให้เพื่อนวิ่งไล่ หรือใช้หนี"
    },
    {
        id: 10, name: "Irithel", role: "Marksman", image: "img/Irithel.jpg",
        winRate: 53.67,
        weakAgainst: [
            { name: "Benedetta", reason: "Benedetta พุ่งไปมาและบล็อคดาเมจ Irithel ได้" },
            { name: "Sun", reason: "Irithel ยิงเป้าเดี่ยว เคลียร์ร่างปลอม Sun ไม่ทัน" },
            { name: "Zhask", reason: "Irithel แพ้ป้อมเลเซอร์ของ Zhask (ระยะยิงสั้นกว่า)" },
            { name: "Gatotkaca", reason: "โดน Gatot สะท้อนดาเมจ ยิงเองเจ็บเอง" },
            { name: "Mathilda", reason: "Mathilda บินโฉบเข้ามาฆ่า Irithel ได้ง่าย" }
        ],
        tips: "เดินยิงได้ (Shoot while moving) ใช้ความพริ้วไคท์ศัตรู"
    },
    {
        id: 14, name: "Ixia", role: "Marksman", image: "img/Ixia.jpg",
        winRate: 53.26,
        weakAgainst: [
            { name: "Aamon", reason: "Aamon หายตัวเข้ามาฆ่า Ixia ตอนกางอัลติ (เป็นเป้านิ่ง)" },
            { name: "Rafaela", reason: "Rafaela เพิ่มความเร็วให้เพื่อนวิ่งหลบอัลติ Ixia" },
            { name: "Odette", reason: "Odette สวนอัลติใส่ Ixia ที่ยืนขาตาย" },
            { name: "Floryn", reason: "Floryn ฮีลสวนดาเมจ Ixia ได้ทัน" },
            { name: "Cyclops", reason: "Cyclops วิ่งอ้อมมายิง Ixia จากด้านหลัง" }
        ],
        tips: "หาทำเลดีๆ ก่อนกางอัลติ เพราะจะขยับตัวไม่ได้"
    },
    {
        id: 99, name: "Jawhead", role: "Fighter", image: "img/Jawhead.jpg",
        winRate: 48.37,
        weakAgainst: [
            { name: "Zilong", reason: "Zilong แทงสวน Jawhead ที่เดินเข้ามา" },
            { name: "Helcurt", reason: "Helcurt ใบ้ Jawhead ไม่ให้ใช้สกิล" },
            { name: "Joy", reason: "Joy พริ้วหลบการจับของ Jawhead" },
            { name: "Guinevere", reason: "โดน Guinevere ยกก่อนจะได้จับ" },
            { name: "Khufra", reason: "Khufra ชนขัดจังหวะ Jawhead" }
        ],
        tips: "ใช้สกิล 2 โยนศัตรูมาหาเพื่อน หรือโยนเพื่อนหนี"
    },
    {
        id: 81, name: "Johnson", role: "Tank", image: "img/Johnson.jpg",
        winRate: 49.58,
        weakAgainst: [
            { name: "Layla", reason: "Layla ยิงฟรีใส่รถ Johnson" },
            { name: "Zilong", reason: "Zilong วิ่งหนีรถทัน" },
            { name: "Franco", reason: "Franco ดึงรถ Johnson ให้หยุดได้ (ถ้าแม่น)" },
            { name: "Kadita", reason: "Kadita มุดน้ำหลบรถชน" },
            { name: "Miya", reason: "Miya กดอัลติหายตัวหลบรถ" }
        ],
        tips: "ขับรถเลาะขอบแมพเพื่อหลบการมองเห็นใน Minimap"
    },
    {
        id: 98, name: "Joy", role: "Assassin", image: "img/Joy.jpg",
        winRate: 48.38,
        weakAgainst: [
            { name: "Sun", reason: "Sun รุมทุบ Joy ที่ไม่มีสกิลหนีแล้ว" },
            { name: "X.Borg", reason: "X.Borg เผา Joy ต่อเนื่อง" },
            { name: "Odette", reason: "Odette อัลติใส่ Joy ที่เข้ามาใกล้" },
            { name: "Gord", reason: "Gord สตั๊น Joy ขัดจังหวะดนตรี" },
            { name: "Lylia", reason: "Lylia ระเบิดใส่ Joy ที่วิ่งวนไปมา" }
        ],
        tips: "ฟังจังหวะเพลงให้ดี ต้องกดให้ตรงจังหวะถึงจะแรงและกัน CC"
    },
    {
        id: 62, name: "Julian", role: "Fighter/Mage", image: "img/Julian.jpg",
        winRate: 50.57,
        weakAgainst: [
            { name: "Faramis", reason: "Faramis ช่วยทีมรอดจากคอมโบ Julian" },
            { name: "Esmeralda", reason: "Esmeralda ดูดเกราะ Julian" },
            { name: "Sun", reason: "Sun แยกร่างหลบสกิล Julian" },
            { name: "Uranus", reason: "Uranus ทนดาเมจ Julian ได้" },
            { name: "Diggie", reason: "Diggie ล้าง CC ของ Julian" }
        ],
        tips: "เลือกคอมโบสกิลตามสถานการณ์ (ยกศัตรู/หนี/ล็อคขา)"
    },
    {
        id: 20, name: "Kadita", role: "Mage", image: "img/Kadita.jpg",
        winRate: 52.91,
        weakAgainst: [
            { name: "Odette", reason: "Kadita ต้องพุ่งเข้าหา โดน Odette อัลติสวนเต็มๆ" },
            { name: "Ixia", reason: "Ixia ยิงสวนแรงมากตอน Kadita พุ่งมา" },
            { name: "Silvanna", reason: "Silvanna ขัง Kadita ไม่ให้หนีหลังคอมโบ" },
            { name: "Alpha", reason: "Alpha ไล่ตาม Kadita ได้ติดๆ และดูดเลือดสู้" },
            { name: "Rafaela", reason: "Rafaela เผยตำแหน่งตอน Kadita มุดน้ำ" }
        ],
        tips: "คอมโบ 1-2-3 ให้แม่น หายวูบในชุดเดียว (One Shot)"
    },
    {
        id: 67, name: "Kagura", role: "Mage", image: "img/Kagura.jpg",
        winRate: 50.52,
        weakAgainst: [
            { name: "Odette", reason: "Odette ทนดาเมจ Kagura และสวนคืน" },
            { name: "Zhask", reason: "Zhask ซ่อนในป้อมหนีร่ม Kagura" },
            { name: "Yin", reason: "Yin ลาก Kagura เข้าห้องขัง (ถ้าล้างสถานะไม่ทัน)" },
            { name: "Kadita", reason: "Kadita มุดน้ำหลบร่ม Kagura" },
            { name: "Hanabi", reason: "โล่ Hanabi กันสตั๊นของ Kagura" }
        ],
        tips: "เก็บร่ม (สกิล 2) เพื่อล้างสถานะและเอาเกราะ"
    },
    {
        id: 5, name: "Kaja", role: "Fighter/Support", image: "img/Kaja.jpg",
        winRate: 54.19,
        weakAgainst: [
            { name: "Wanwan", reason: "Kaja จับ Wanwan ยาก เพราะนางกระโดดตลอดเวลา" },
            { name: "Granger", reason: "Granger ยิงไกลเกินระยะดึงของ Kaja" },
            { name: "Yi Sun-shin", reason: "Yi Sun-shin มีสกิล Dash กันสถานะ (CC Immunity)" },
            { name: "Kadita", reason: "Kadita มีสกิลกัน CC และมุดดินหนีการดึงได้" },
            { name: "Fanny", reason: "Fanny บินไวเกินกว่า Kaja จะล็อคเป้าทัน" }
        ],
        tips: "Flicker + อัลติ คือคอมโบหากินที่แก้ทางยากที่สุด"
    },
    {
        id: 119, name: "Kalea", role: "Support", image: "img/Kalea.jpg",
        winRate: 46.09,
        weakAgainst: [
            { name: "Freya", reason: "Freya โดดใส่ Kalea ตายไวมาก" },
            { name: "Lolita", reason: "Lolita บล็อคสกิล Kalea" },
            { name: "Helcurt", reason: "Helcurt ล้วง Kalea เงียบๆ" },
            { name: "Silvanna", reason: "Silvanna ขัง Kalea ไม่ให้หนี" },
            { name: "Chou", reason: "Chou เตะ Kalea ออกจากเพื่อน" }
        ],
        tips: "เกาะติดเพื่อนไว้เสมอ อย่าเดินคนเดียว"
    },
    {
        id: 117, name: "Karina", role: "Assassin", image: "img/Karina.jpg",
        winRate: 46.34,
        weakAgainst: [
            { name: "Odette", reason: "Odette สวนเวทย์ใส่ Karina เจ็บมาก" },
            { name: "Natalia", reason: "Natalia ล้วง Karina ก่อน" },
            { name: "Helcurt", reason: "Helcurt ใบ้ Karina ทำให้รำไม่ออก" },
            { name: "Ling", reason: "Ling หนี Karina ทัน" },
            { name: "Wanwan", reason: "Wanwan กระโดดหนี Karina" }
        ],
        tips: "รอจังหวะศัตรูเลือดน้อยค่อยเข้าไปลาส (Reset Cooldown)"
    },
    {
        id: 9, name: "Karrie", role: "Marksman", image: "img/Karrie.jpg",
        winRate: 53.76,
        weakAgainst: [
            { name: "Carmilla", reason: "โดน Carmilla เชื่อมโซ่ ตายพร้อมเพื่อน" },
            { name: "Esmeralda", reason: "Esmeralda ดูดเกราะ Karrie และเข้าถึงตัวไว" },
            { name: "Leomord", reason: "Leomord ขี่ม้าพุ่งเข้ามาแทง Karrie ตายในชุดเดียว" },
            { name: "Harith", reason: "Harith พริ้วมาก Karrie เล็งสกิลกงจักรไม่โดน" },
            { name: "Hilda", reason: "Hilda วิ่งเร็วและถึก ไล่กวด Karrie จนมุม" }
        ],
        tips: "เป็นตัวฆ่า Tank เบอร์ 1 ยิ่งเลือดเยอะยิ่งยิงแรง"
    },
    {
        id: 33, name: "Khaleed", role: "Fighter", image: "img/Khaleed.jpg",
        winRate: 51.98,
        weakAgainst: [
            { name: "Diggie", reason: "Diggie ขัดจังหวะการฮีลของ Khaleed" },
            { name: "Miya", reason: "Miya ยิง Khaleed ฟรี" },
            { name: "Novaria", reason: "Novaria ยิงไกลใส่ Khaleed" },
            { name: "Vale", reason: "Vale ยก Khaleed ลอย" },
            { name: "Yin", reason: "Yin ลาก Khaleed เข้าห้องขัง" }
        ],
        tips: "เดินให้เกจทรายเต็มเพื่อสไลด์เข้าหาศัตรู"
    },
    {
        id: 11, name: "Khufra", role: "Tank", image: "img/Khufra.jpg",
        winRate: 52.07,
        weakAgainst: [
            { name: "Guinevere", reason: "Guinevere โดดข้ามลูกบอล Khufra ได้" },
            { name: "Wanwan", reason: "Wanwan ล้างสถานะสตั๊นของ Khufra ได้" },
            { name: "Gusion", reason: "Gusion ปามีดจากระยะไกล ไม่ต้องพุ่งชน" },
            { name: "Paquito", reason: "Paquito ต่อยขัดจังหวะ Khufra ได้ก่อน" },
            { name: "Luo Yi", reason: "Luo Yi ดูด Khufra ออกจากเพื่อน" }
        ],
        tips: "ใช้สกิล 2 (ลูกบอล) ดักทางพวกตัวพริ้วๆ อย่าง Fanny/Ling"
    },
    {
        id: 100, name: "Kimmy", role: "Marksman", image: "img/Kimmy.jpg",
        winRate: 48.34,
        weakAgainst: [
            { name: "Sun", reason: "Sun แยกร่างบังกระสุน Kimmy" },
            { name: "Zhask", reason: "Zhask วางป้อมกัน Kimmy" },
            { name: "Barats", reason: "Barats ทนกระสุน Kimmy ได้" },
            { name: "Atlas", reason: "Atlas จับ Kimmy ง่ายมาก" },
            { name: "Hilda", reason: "Hilda วิ่งไล่ Kimmy ทัน" }
        ],
        tips: "รักษาระยะยิงให้ดี Kimmy ยิงไปเดินไปได้อิสระ"
    },
    {
        id: 129, name: "Lancelot", role: "Assassin", image: "img/Lancelot.jpg",
        winRate: 42.59,
        weakAgainst: [
            { name: "Atlas", reason: "Atlas จับ Lancelot ล็อคขาตาย" },
            { name: "Baxia", reason: "Baxia กลิ้งชนขัดจังหวะ Lancelot" },
            { name: "X.Borg", reason: "X.Borg เผา Lancelot จนเข้าไม่ติด" },
            { name: "Alpha", reason: "Alpha ล็อคขา Lancelot" },
            { name: "Yin", reason: "Yin ลาก Lancelot เข้าห้องขัง" }
        ],
        tips: "ใช้สกิล 1 แทงครีปเพื่อเก็บ Stack ดาเมจก่อนเข้าบวก"
    },
    {
        id: 103, name: "Lapu-Lapu", role: "Fighter", image: "img/Lapu-Lapu.jpg",
        winRate: 48.22,
        weakAgainst: [
            { name: "Popol & Kupa", reason: "Popol ปล่อยหมากัด Lapu-Lapu จนขยับยาก" },
            { name: "Argus", reason: "Argus เป็นอมตะสวนกลับ Lapu-Lapu" },
            { name: "Atlas", reason: "Atlas จับ Lapu-Lapu ตอนกระโดดเข้ามา" },
            { name: "Benedetta", reason: "Benedetta พริ้วหลบสกิล Lapu-Lapu" },
            { name: "Yin", reason: "Yin ขัง Lapu-Lapu ไม่ให้แปลงร่างช่วยเพื่อน" }
        ],
        tips: "เก็บอัลติไว้ใช้ตอนไฟต์ใหญ่ แปลงร่างแล้วถึกมาก"
    },
    {
        id: 108, name: "Layla", role: "Marksman", image: "img/Layla.jpg",
        winRate: 47.70,
        weakAgainst: [
            { name: "Diggie", reason: "Diggie วางระเบิดใส่ Layla" },
            { name: "Rafaela", reason: "Rafaela สโลว์ Layla" },
            { name: "Bruno", reason: "Bruno ยิงแรงกว่า Layla ช่วงต้นเกม" },
            { name: "Kaja", reason: "Kaja ดึง Layla มาฆ่า" },
            { name: "Lolita", reason: "Lolita บล็อคกระสุน Layla หมด" }
        ],
        tips: "ฟาร์มให้ไวที่สุด ยืนให้ไกลที่สุด (ท้ายเกมยิงแรงมาก)"
    },
    {
        id: 35, name: "Leomord", role: "Fighter", image: "img/Leomord.jpg",
        winRate: 52.70,
        weakAgainst: [
            { name: "Odette", reason: "Leomord ขี่ม้าเข้าหาตรงๆ โดน Odette สวน" },
            { name: "Saber", reason: "Saber ล็อค Leomord ตอนกำลังขี่ม้า" },
            { name: "Popol & Kupa", reason: "หมา Popol กัดขัดจังหวะและทำดาเมจแรง" },
            { name: "Belerick", reason: "Leomord ตีแรง โดน Belerick สะท้อนตายเอง" },
            { name: "Miya", reason: "Miya ยิงสวนแรงมากช่วงท้ายเกม" }
        ],
        tips: "เล็งตัวเลือดน้อยๆ จะติดคริติคอล 100%"
    },
    {
        id: 82, name: "Lesley", role: "Marksman", image: "img/Lesley.jpg",
        winRate: 49.54,
        weakAgainst: [
            { name: "Gusion", reason: "Gusion เบิร์ส Lesley ตายก่อนหายตัว" },
            { name: "Belerick", reason: "Lesley ยิงแรง โดนสะท้อนเจ็บหนัก" },
            { name: "Gatotkaca", reason: "Gatot โดดทับ Lesley ที่ยืนนิ่ง" },
            { name: "Ling", reason: "Ling ล้วง Lesley ได้ง่าย" },
            { name: "Kaja", reason: "Kaja ดึง Lesley มาฆ่า" }
        ],
        tips: "ยิงแล้วถอย (Hit & Run) เพื่อรอ Passive รีชาร์จ"
    },
    {
        id: 116, name: "Ling", role: "Assassin", image: "img/Ling.jpg",
        winRate: 46.64,
        weakAgainst: [
            { name: "Gloo", reason: "Gloo เกาะติด Ling ทำให้หนีไม่ได้" },
            { name: "Zhask", reason: "Zhask วางป้อมกัน Ling เข้ามา" },
            { name: "Atlas", reason: "Atlas จับ Ling ลงมาจากกำแพง" },
            { name: "Gord", reason: "Gord สตั๊น Ling" },
            { name: "X.Borg", reason: "X.Borg เผา Ling จนเลือดลด" }
        ],
        tips: "บริหารค่า Energy (Bar สีฟ้า) ให้ดี อย่าให้หมดกลางวงศัตรู"
    },
    {
        id: 3, name: "Lolita", role: "Support/Tank", image: "img/Lolita.jpg",
        winRate: 55.87,
        weakAgainst: [
            { name: "Cyclops", reason: "อัลติ Cyclops (กรงขัง) ทะลุโล่ Lolita ได้" },
            { name: "Edith", reason: "Edith โจมตีเป็นสายฟ้าฟาด (ไม่ใช่กระสุน) โล่กันไม่ได้" },
            { name: "Chang'e", reason: "ถ้า Lolita โล่หมดหรือหันผิดทาง จะโดน Chang'e ละลายทันที" },
            { name: "Bane", reason: "สกิล 1 Bane กระดอนข้ามโล่ไปโดนเพื่อนด้านหลังได้" },
            { name: "Rafaela", reason: "Rafaela วิ่งเร็วกว่าและตอดฟรี Lolita เข้าไม่ถึงตัว" }
        ],
        tips: "กางโล่ดักหน้า Marksman ศัตรู เพื่อบล็อคดาเมจให้เพื่อน"
    },
    {
        id: 89, name: "Lukas", role: "Fighter", image: "img/Lukas.jpg",
        winRate: 49.19,
        weakAgainst: [
            { name: "Ling", reason: "Ling หนี Lukas ทัน" },
            { name: "Arlott", reason: "Arlott แทงสวน Lukas เจ็บกว่า" },
            { name: "Aldous", reason: "Aldous ทุบ Lukas ทีเดียวแตก" },
            { name: "Saber", reason: "Saber ล็อค Lukas ตาย" },
            { name: "Natalia", reason: "Natalia ล้วง Lukas" }
        ],
        tips: "แปลงร่างเมื่อมีจังหวะสวนกลับที่แน่นอน"
    },
    {
        id: 92, name: "Lunox", role: "Mage", image: "img/Lunox.jpg",
        winRate: 48.97,
        weakAgainst: [
            { name: "Wanwan", reason: "Wanwan เปิดอัลติใส่ Lunox ง่าย" },
            { name: "Esmeralda", reason: "Esmeralda ดูดเกราะ Lunox" },
            { name: "Karrie", reason: "Karrie ยิง Lunox ตายไวมาก" },
            { name: "Gloo", reason: "Gloo เกาะ Lunox ทำให้หนีไม่ได้" },
            { name: "Argus", reason: "Argus อมตะสวน Lunox" }
        ],
        tips: "เลี้ยงหลอดแสง/มืด ให้เหลือ 1 ช่อง เพื่อสลับร่างได้ทันทีตามสถานการณ์"
    },
    {
        id: 107, name: "Luo Yi", role: "Mage", image: "img/Luo Yi.jpg",
        winRate: 47.85,
        weakAgainst: [
            { name: "Popol & Kupa", reason: "หมา Popol กัน Luo Yi" },
            { name: "Estes", reason: "Estes ฮีลสู้ดาเมจ Luo Yi" },
            { name: "Baxia", reason: "Baxia กลิ้งชน Luo Yi" },
            { name: "Faramis", reason: "Faramis ช่วยเพื่อนรอดจากคอมโบ" },
            { name: "Aulus", reason: "Aulus วิ่งมาทุบ Luo Yi" }
        ],
        tips: "เล็งสกิลให้สีต่างกัน (หยิน-หยาง) เพื่อดูดศัตรูมาชนกัน"
    },
    {
        id: 76, name: "Lylia", role: "Mage", image: "img/Lylia.jpg",
        winRate: 49.95,
        weakAgainst: [
            { name: "Diggie", reason: "Diggie วางระเบิดใส่ Lylia" },
            { name: "Alpha", reason: "Alpha ล็อคขา Lylia" },
            { name: "Benedetta", reason: "Benedetta พุ่งหลบระเบิด Lylia" },
            { name: "Terizla", reason: "Terizla ทุบ Lylia ตายในวง" },
            { name: "Atlas", reason: "Atlas จับ Lylia" }
        ],
        tips: "วางรองเท้าทิ้งไว้ในที่ปลอดภัย ก่อนเดินไปโซนหน้า"
    },
    {
        id: 109, name: "Martis", role: "Fighter", image: "img/Martis.jpg",
        winRate: 47.49,
        weakAgainst: [
            { name: "Khufra", reason: "Khufra ชน Martis เสียจังหวะ" },
            { name: "Saber", reason: "Saber ล็อค Martis ตอนสกิลหมด" },
            { name: "Yin", reason: "Yin ขัง Martis" },
            { name: "Alucard", reason: "Alucard ดวลชนะ Martis" },
            { name: "Cici", reason: "Cici ไคท์ Martis จนตาย" }
        ],
        tips: "รอลาสช็อตด้วยอัลติ เพื่อรีเซ็ตคูลดาวน์"
    },
    {
        id: 1, name: "Masha", role: "Fighter", image: "img/Masha.jpg",
        winRate: 56.62,
        weakAgainst: [
            { name: "Yu Zhong", reason: "Yu Zhong ดูดเลือดจาก Masha ที่เลือดเยอะได้รุนแรงมาก" },
            { name: "Saber", reason: "โดน Saber ล็อคอัลติชุดเดียวหาย (Masha แพ้ Burst)" },
            { name: "Guinevere", reason: "โดนยกงัดลอยฟ้า Masha ตีสวนไม่ได้และเสียจังหวะ" },
            { name: "Fanny", reason: "Masha ไล่ Fanny ไม่ทัน และโดนดาเมจชุดใหญ่ตายก่อน" },
            { name: "Baxia", reason: "Baxia ตัดเลือด (Anti-Heal) ทำให้ Masha รีเลือดไม่ขึ้น" }
        ],
        tips: "แยกดันเลน (Split Push) คือหน้าที่หลัก ป้อมแตกไวมาก"
    },
    {
        id: 126, name: "Mathilda", role: "Support", image: "img/Mathilda.jpg",
        winRate: 44.10,
        weakAgainst: [
            { name: "X.Borg", reason: "X.Borg เผา Mathilda ตอนบิน" },
            { name: "Valir", reason: "Valir ผลัก Mathilda ออก" },
            { name: "Granger", reason: "Granger ยิงสวน Mathilda" },
            { name: "Carmilla", reason: "Carmilla ล็อค Mathilda" },
            { name: "Natalia", reason: "Natalia ล้วง Mathilda" }
        ],
        tips: "ให้เพื่อนกดโล่ (Skill 2) เพื่อพุ่งหนีออกจากวงล้อม"
    },
    {
        id: 7, name: "Melissa", role: "Marksman", image: "img/Melissa.jpg",
        winRate: 53.91,
        weakAgainst: [
            { name: "Odette", reason: "อัลติ Odette เป็นเวทย์วงกว้าง ทะลุเกราะป้องกัน Melissa" },
            { name: "Granger", reason: "Granger ยิงสกิลจากวงนอก ไม่ต้องเดินเข้าหา" },
            { name: "Sun", reason: "ร่างปลอม Sun รุมทุบ Melissa จนเกราะแตก" },
            { name: "Beatrix", reason: "Beatrix (สไนเปอร์/ปืนใหญ่) ยิงไกลเกินระยะเกราะ" },
            { name: "Helcurt", reason: "Helcurt ใบ้และมืดจอ ทำให้ Melissa กางเกราะไม่ทัน" }
        ],
        tips: "กางอัลติเพื่อกันพวกตัวล้วงระยะประชิด (Fighter/Assassin)"
    },
    {
        id: 4, name: "Minotaur", role: "Tank", image: "img/Minotaur.jpg",
        winRate: 53.22,
        weakAgainst: [
            { name: "Khufra", reason: "Khufra ขัดจังหวะการชาร์จทุบของ Minotaur ได้" },
            { name: "Odette", reason: "Odette ยิงอัลติสวนตอน Minotaur เข้ามา" },
            { name: "Arlott", reason: "Arlott พริ้วและขัดจังหวะ Minotaur ได้" },
            { name: "Alpha", reason: "Alpha จ่าย True Damage ใส่ Minotaur เจ็บมาก" },
            { name: "Rafaela", reason: "Rafaela สโลว์และฮีลหนีการทุบได้" }
        ],
        tips: "ใช้ Flicker + อัลติ เพื่อเปิดไฟต์หมู่ที่สวยงาม"
    },
    {
        id: 18, name: "Minsitthar", role: "Fighter", image: "img/Minsitthar.jpg",
        winRate: 53.15,
        weakAgainst: [
            { name: "Freya", reason: "Freya ไม่ต้องใช้สกิลพุ่ง แค่เดินตีก็ชนะ Minsitthar" },
            { name: "Khufra", reason: "Khufra ขัดจังหวะการแทงของ Minsitthar ได้" },
            { name: "Harith", reason: "Harith แดชหลบหอกได้ ถ้าไม่โดนกางวงใส่นะ" },
            { name: "Martis", reason: "Martis มีกันสถานะ ไม่กลัวหอกดึง" },
            { name: "Gusion", reason: "Gusion เบิร์สเร็วมาก ฆ่า Minsitthar ก่อนกางวง" }
        ],
        tips: "คอมโบสกิล 1 ดึง + สกิล 3 กางวง คือที่สุดของการจับตาย"
    },
    {
        id: 22, name: "Miya", role: "Marksman", image: "img/Miya.jpg",
        winRate: 52.74,
        weakAgainst: [
            { name: "Saber", reason: "Miya ตัวบาง โดน Saber ยกชุดเดียวดับ" },
            { name: "Irithel", reason: "Irithel ยิงแรงกว่าและยิงระหว่างเดินได้" },
            { name: "Lunox", reason: "Lunox ยิงรัวและอมตะหลบดาเมจ Miya" },
            { name: "Guinevere", reason: "โดน Guinevere โดดทับ หายตัวหนีไม่ทัน" },
            { name: "Faramis", reason: "Faramis ช่วยทีมไม่ให้ตายจากดาเมจ Miya" }
        ],
        tips: "เก็บอัลติไว้ใช้หนี CC เท่านั้น อย่าใช้เปิดเพื่อวิ่งเข้าหาศัตรู"
    },
    {
        id: 44, name: "Moskov", role: "Marksman", image: "img/Moskov.jpg",
        winRate: 51.58,
        weakAgainst: [
            { name: "Gloo", reason: "Gloo เกาะ Moskov ทำให้ยิงลำบาก" },
            { name: "Joy", reason: "Joy พริ้วหลบหอก Moskov" },
            { name: "Edith", reason: "Edith ทุบ Moskov ตายคาที่" },
            { name: "Hanzo", reason: "Hanzo ล้วง Moskov จากระยะไกล" },
            { name: "Novaria", reason: "Novaria ยิงไกลใส่ Moskov" }
        ],
        tips: "หามุมปักศัตรูเข้ากำแพง จะสตั๊นนานมาก"
    },
    {
        id: 69, name: "Nana", role: "Mage", image: "img/Nana.jpg",
        winRate: 47.04,
        weakAgainst: [
            { name: "Odette", reason: "Odette อัลติใส่ Nana ตายคาที่" },
            { name: "Guinevere", reason: "Guinevere ยก Nana ลอย" },
            { name: "Estes", reason: "Estes ฮีลสู้ดาเมจ Nana" },
            { name: "Silvanna", reason: "Silvanna ขัง Nana" },
            { name: "Alucard", reason: "Alucard ไล่ฆ่า Nana" }
        ],
        tips: "วางตุ๊กตา (Molina) ในพุ่มไม้เพื่อดักศัตรูและกันการโดนล้วง"
    },
    {
        id: 29, name: "Natan", role: "Marksman", image: "img/Natan.jpg",
        winRate: 52.12,
        weakAgainst: [
            { name: "Sun", reason: "Natan ยิงเป้าเดี่ยว แพ้ร่างแยก Sun" },
            { name: "Gloo", reason: "Gloo เกาะติด Natan ทำให้ยิงไม่ออก" },
            { name: "Zhask", reason: "ป้อม Zhask ยิง Natan ตายก่อน Stack เต็ม" },
            { name: "Minotaur", reason: "Minotaur โดดทุบ Natan ขาตาย" },
            { name: "X.Borg", reason: "X.Borg เผา Natan จนยืนเลนไม่ได้" }
        ],
        tips: "เก็บ Stack ให้เต็มเพื่อความเร็วโจมตีสูงสุด"
    },
    {
        id: 46, name: "Natalia", role: "Assassin", image: "img/Natalia.jpg",
        winRate: 51.49,
        weakAgainst: [
            { name: "Hanzo", reason: "Hanzo มองเห็น Natalia" },
            { name: "Ling", reason: "Ling หนี Natalia ได้" },
            { name: "Xavier", reason: "Xavier ยิงสวน Natalia" },
            { name: "Gord", reason: "Gord สตั๊น Natalia" },
            { name: "Novaria", reason: "Novaria เปิด Vision Natalia" }
        ],
        tips: "เน้นล้วง Mage/Marksman จากด้านหลัง แล้วหายตัวหนีทันที"
    },
    {
        id: 85, name: "Nolan", role: "Assassin", image: "img/Nolan.jpg",
        winRate: 49.40,
        weakAgainst: [
            { name: "Estes", reason: "Estes ฮีลสู้ดาเมจ Nolan" },
            { name: "Floryn", reason: "Floryn กัน Nolan ฆ่าเพื่อน" },
            { name: "Aulus", reason: "Aulus ถึกสู้ Nolan ได้" },
            { name: "Rafaela", reason: "Rafaela เร่งความเร็วหนี Nolan" },
            { name: "Natan", reason: "Natan ยิงสวน Nolan แรงมาก" }
        ],
        tips: "พยายามทำคอมโบให้รอยแยกตัดกันเพื่อระเบิด CC"
    },
    {
        id: 113, name: "Novaria", role: "Mage", image: "img/Novaria.jpg",
        winRate: 47.19,
        weakAgainst: [
            { name: "Diggie", reason: "Diggie วางระเบิดไล่ Novaria" },
            { name: "Carmilla", reason: "Carmilla ล้วง Novaria" },
            { name: "Atlas", reason: "Atlas จับ Novaria" },
            { name: "Tigreal", reason: "Tigreal ดัน Novaria" },
            { name: "Luo Yi", reason: "Luo Yi ดูด Novaria" }
        ],
        tips: "ยิงสกิล 2 ให้ไกลที่สุดเท่าที่จะทำได้ ดาเมจจะแรงตามระยะทาง"
    },
    {
        id: 45, name: "Obsidia", role: "Marksman", image: "img/Obsidia.jpg",
        winRate: 51.57,
        weakAgainst: [
            { name: "Benedetta", reason: "Benedetta พุ่งใส่ Obsidia" },
            { name: "Helcurt", reason: "Helcurt ปิดไฟใส่ Obsidia" },
            { name: "Guinevere", reason: "Guinevere ยก Obsidia" },
            { name: "Minsitthar", reason: "Minsitthar ขัง Obsidia" },
            { name: "Natalia", reason: "Natalia ล้วง Obsidia" }
        ],
        tips: "ใช้เงามืดพรางตัวเพื่อเพิ่มดาเมจคริติคอล"
    },
    {
        id: 40, name: "Odette", role: "Mage", image: "img/Odette.jpg",
        winRate: 51.67,
        weakAgainst: [
            { name: "Rafaela", reason: "Rafaela วิ่งหนีวงอัลติ Odette" },
            { name: "Aamon", reason: "Aamon ล้วง Odette ตายไว" },
            { name: "Mathilda", reason: "Mathilda พาเพื่อนบินหนี Odette" },
            { name: "Cyclops", reason: "Cyclops ขัดจังหวะ Odette" },
            { name: "Kaja", reason: "Kaja ดึง Odette หยุดอัลติ" }
        ],
        tips: "รอให้ศัตรูใช้ CC หมดก่อนค่อยกระโดดเข้าไปเปิดอัลติ"
    },
    {
        id: 115, name: "Paquito", role: "Fighter", image: "img/Paquito.jpg",
        winRate: 46.96,
        weakAgainst: [
            { name: "Natalia", reason: "Natalia ใบ้ Paquito" },
            { name: "X.Borg", reason: "X.Borg เผา Paquito" },
            { name: "Alice", reason: "Alice ดูดเลือดสู้ Paquito" },
            { name: "Aldous", reason: "Aldous ทุบ Paquito" },
            { name: "Karina", reason: "Karina หลบหมัด Paquito" }
        ],
        tips: "สะสม Stack ให้แดงก่อนเข้าไฟต์ เพื่อใช้สกิลฟรีได้ 1 ครั้ง"
    },
    {
        id: 84, name: "Pharsa", role: "Mage", image: "img/Pharsa.jpg",
        winRate: 49.42,
        weakAgainst: [
            { name: "Odette", reason: "Odette ยิงสวน Pharsa" },
            { name: "Rafaela", reason: "Rafaela วิ่งหลบระเบิด Pharsa" },
            { name: "Hanabi", reason: "Hanabi มีโล่กันสตั๊น Pharsa" },
            { name: "Aulus", reason: "Aulus วิ่งเข้าหา Pharsa ไว" },
            { name: "Alucard", reason: "Alucard กระโดดใส่ Pharsa" }
        ],
        tips: "หาที่ยืนหลังกำแพงหนาๆ ก่อนเปิดอัลติระเบิดลง"
    },
    {
        id: 71, name: "Phoveus", role: "Fighter", image: "img/Phoveus.jpg",
        winRate: 50.24,
        weakAgainst: [
            { name: "Wanwan", reason: "Wanwan เปิดจุดอ่อน Phoveus ง่าย" },
            { name: "Freya", reason: "Freya ทุบ Phoveus ชนะ" },
            { name: "Lylia", reason: "Lylia ระเบิดใส่ Phoveus" },
            { name: "Ruby", reason: "Ruby CC ใส่ Phoveus" },
            { name: "Luo Yi", reason: "Luo Yi ดูด Phoveus" }
        ],
        tips: "เลือก Phoveus เฉพาะตอนที่อีกฝั่งมีตัว Dash เยอะๆ (Wanwan/Harith)"
    },
    {
        id: 25, name: "Popol & Kupa", role: "Marksman", image: "img/Popol & Kupa.jpg",
        winRate: 52.61,
        weakAgainst: [
            { name: "Masha", reason: "Masha ตีเร็ว ฆ่าหมา Kupa ตายในพริบตา" },
            { name: "Harith", reason: "Harith พริ้วหลบหมาได้สบาย" },
            { name: "Beatrix", reason: "Beatrix ยิงระเบิดหรือสไนเปอร์เก็บหมาได้ไว" },
            { name: "Harley", reason: "Harley ล็อคหัว Popol โดยไม่สนหมา" },
            { name: "Selena", reason: "Selena สตั๊น Popol จากระยะไกล" }
        ],
        tips: "ถ้าหมาตาย Popol จะอ่อนแอมาก รีบเรียกหมาใหม่ทันที"
    },
    {
        id: 16, name: "Rafaela", role: "Support", image: "img/Rafaela.jpg",
        winRate: 53.21,
        weakAgainst: [
            { name: "Natalia", reason: "Rafaela ตัวบางมาก โดน Natalia ล้วงตายทันที" },
            { name: "Valir", reason: "Valir ผลักและสโลว์ Rafaela จนเสียตำแหน่ง" },
            { name: "Karrie", reason: "Rafaela ฮีลสู้ดาเมจของ Karrie ไม่ไหว" },
            { name: "Carmilla", reason: "โดน Carmilla จับเชื่อมโซ่ ตายพร้อมเพื่อน" },
            { name: "Nana", reason: "โดนสาปเป็นตุ๊กตา จ่ายสกิลช่วยเพื่อนไม่ได้" }
        ],
        tips: "ใช้สกิล 1 เช็คพุ่มไม้ได้ ถ้ามีศัตรูจะสโลว์"
    },
    {
        id: 74, name: "Roger", role: "Marksman/Fighter", image: "img/Roger.jpg",
        winRate: 50.04,
        weakAgainst: [
            { name: "Harley", reason: "Harley ล็อค Roger ตาย" },
            { name: "Gusion", reason: "Gusion เบิร์ส Roger" },
            { name: "Saber", reason: "Saber ล็อค Roger" },
            { name: "Benedetta", reason: "Benedetta พริ้วกว่า Roger" },
            { name: "Aldous", reason: "Aldous ทุบ Roger" }
        ],
        tips: "ใช้ร่างคนตอดเลือดก่อน แล้วใช้ร่างหมาป่าเข้าปิดงาน"
    },
    {
        id: 26, name: "Ruby", role: "Fighter", image: "img/Ruby.jpg",
        winRate: 52.57,
        weakAgainst: [
            { name: "Sun", reason: "ร่างปลอม Sun ทำให้ Ruby ล็อคเป้าผิด" },
            { name: "Gloo", reason: "Gloo เกาะติด Ruby ทำให้รำไม่ออก" },
            { name: "Belerick", reason: "Ruby ดูดเลือดไม่ทันดาเมจสะท้อน Belerick" },
            { name: "Masha", reason: "Masha ตีเร็วและมีกันสถานะ" },
            { name: "Joy", reason: "Joy พริ้วจน Ruby จับไม่ได้" }
        ],
        tips: "อย่าลืมกดเดินหลังใช้สกิลเพื่อให้ Passive กระโดดทำงาน"
    },
    {
        id: 42, name: "Saber", role: "Assassin", image: "img/Saber.jpg",
        winRate: 51.58,
        weakAgainst: [
            { name: "Natalia", reason: "Natalia ใบ้ Saber ก่อนได้ใช้อัลติ" },
            { name: "Ling", reason: "Ling หลบอัลติ Saber ได้ด้วยอัลติของตัวเอง" },
            { name: "Fredrinn", reason: "Fredrinn ถึกเกินกว่า Saber จะคอมโบตาย" },
            { name: "Granger", reason: "Granger ยิงไกล Saber เข้าไม่ถึง" },
            { name: "Benedetta", reason: "Benedetta บล็อคอัลติ Saber ได้" }
        ],
        tips: "รอพุ่มไม้ ดักรอตัวบางๆ เดินผ่านแล้วคอมโบชุดเดียว"
    },
    {
        id: 122, name: "Selena", role: "Assassin/Mage", image: "img/Selena.jpg",
        winRate: 44.84,
        weakAgainst: [
            { name: "X.Borg", reason: "X.Borg เผา Selena" },
            { name: "Gord", reason: "Gord สตั๊น Selena" },
            { name: "Benedetta", reason: "Benedetta หลบสตั๊น Selena" },
            { name: "Ixia", reason: "Ixia ยิงสวน Selena" },
            { name: "Carmilla", reason: "Carmilla ล็อค Selena" }
        ],
        tips: "วางกับดัก (Trap) ในพุ่มไม้เพื่อเปิด Vision และคอมโบสกิล 2 สตั๊นระยะไกล"
    },
    {
        id: 19, name: "Silvanna", role: "Fighter", image: "img/Silvanna.jpg",
        winRate: 53.11,
        weakAgainst: [
            { name: "Aamon", reason: "Aamon หายตัวหนีออกจากวงขัง Silvanna ได้" },
            { name: "Angela", reason: "Angela สโลว์และล็อคขา Silvanna ได้" },
            { name: "Floryn", reason: "Floryn สตั๊นขัดจังหวะการหมุนหอก" },
            { name: "Sun", reason: "Silvanna ตีเป้าเดี่ยว แพ้ร่างแยก Sun" },
            { name: "Rafaela", reason: "Rafaela วิ่งหนีและล้างสโลว์ได้" }
        ],
        tips: "ใช้สกิล 2 (หมุนหอก) เพื่อดูดเลือดและเกราะ ยิ่งโดนหลายตัวยิ่งถึก"
    },
    {
        id: 75, name: "Sora", role: "Fighter", image: "img/Sora.jpg",
        winRate: 50.03,
        weakAgainst: [
            { name: "Estes", reason: "Estes ฮีลสู้ดาเมจ Sora" },
            { name: "Odette", reason: "Odette อัลติใส่ Sora" },
            { name: "Esmeralda", reason: "Esmeralda ดูดเกราะ Sora" },
            { name: "Sun", reason: "Sun รุมทุบ Sora" },
            { name: "Rafaela", reason: "Rafaela หนี Sora" }
        ],
        tips: "ใช้ความเร็วในการโฉบเข้าออก"
    },
    {
        id: 8, name: "Sun", role: "Fighter", image: "img/Sun.jpg",
        winRate: 53.91,
        weakAgainst: [
            { name: "Masha", reason: "Masha ตีเร็วและล็อคเป้าเดี่ยว ฆ่าร่างจริงได้ไว" },
            { name: "Nana", reason: "โดนสาปเป็นตุ๊กตา ร่างปลอมช่วยอะไรไม่ได้" },
            { name: "Karrie", reason: "Karrie ยิงกระจายและเก็บ Stack จากร่างปลอมได้ง่าย" },
            { name: "Diggie", reason: "ระเบิด Diggie ติดตามร่างจริงและร่างปลอม" },
            { name: "Jawhead", reason: "Jawhead ล็อคเป้าโยนร่างจริงออกมาฆ่า" }
        ],
        tips: "ใช้ร่างปลอมหลอกล่อสกิลสำคัญของศัตรูก่อนเข้าตี"
    },
    {
        id: 79, name: "Suyou", role: "Assassin", image: "img/Suyou.jpg",
        winRate: 49.82,
        weakAgainst: [
            { name: "Sun", reason: "Sun รุมทุบ Suyou" },
            { name: "Zhask", reason: "Zhask ยิง Suyou" },
            { name: "Ling", reason: "Ling หนี Suyou" },
            { name: "Natalia", reason: "Natalia ล้วง Suyou" },
            { name: "Argus", reason: "Argus อมตะใส่ Suyou" }
        ],
        tips: "ใช้ร่างผีสิงเพื่อเพิ่มความเร็วในการไล่ล่า"
    },
    {
        id: 56, name: "Terizla", role: "Fighter", image: "img/Terizla.jpg",
        winRate: 51.01,
        weakAgainst: [
            { name: "Nana", reason: "Nana สาป Terizla ให้ตีไม่ได้" },
            { name: "Argus", reason: "Argus ตีแลกชนะ Terizla ตอนอัลติ" },
            { name: "Khufra", reason: "Khufra ขัดจังหวะการทุบของ Terizla" },
            { name: "Hilda", reason: "Hilda วิ่งหนีและรีเลือดสู้ Terizla" },
            { name: "Silvanna", reason: "Silvanna ขัง Terizla ไว้ในวง" }
        ],
        tips: "ใช้ Flicker + อัลติ เพื่อเปิดไฟต์หมู่ที่สวยงาม"
    },
    {
        id: 55, name: "Thamuz", role: "Fighter", image: "img/Thamuz.jpg",
        winRate: 51.05,
        weakAgainst: [
            { name: "Gusion", reason: "Gusion เบิร์สและหนี Thamuz ได้" },
            { name: "Carmilla", reason: "Carmilla ลดเกราะและแชร์ดาเมจใส่ Thamuz" },
            { name: "Aulus", reason: "Aulus ตีแรงกว่า Thamuz ช่วงท้ายเกม" },
            { name: "Harith", reason: "Harith แดชหลบการโจมตีของ Thamuz" },
            { name: "Odette", reason: "Odette ยิงอัลติใส่ Thamuz ที่เดินเข้ามา" }
        ],
        tips: "บวกยับๆ ได้เลยถ้ามีเคียวหมุนรอบตัว"
    },
    {
        id: 112, name: "Tigreal", role: "Tank", image: "img/Tigreal.jpg",
        winRate: 47.27,
        weakAgainst: [
            { name: "Estes", reason: "Estes ฮีลสู้ Tigreal" },
            { name: "Johnson", reason: "Johnson ชน Tigreal" },
            { name: "Zilong", reason: "Zilong ดันป้อมหนี Tigreal" },
            { name: "Sun", reason: "Sun ตี Tigreal" },
            { name: "Minsitthar", reason: "Minsitthar ขัด Tigreal" }
        ],
        tips: "อย่าเลือก Tigreal ถ้าอีกฝั่งมี Diggie ยกเว้นจะแบนไปแล้ว"
    },
    {
        id: 49, name: "Uranus", role: "Tank", image: "img/Uranus.jpg",
        winRate: 51.43,
        weakAgainst: [
            { name: "Luo Yi", reason: "Luo Yi ดูด Uranus ให้เสียตำแหน่ง" },
            { name: "Irithel", reason: "Irithel ยิงลดเกราะ Uranus จนบาง" },
            { name: "Yi Sun-shin", reason: "Yi Sun-shin ยิงคริใส่ Uranus เจ็บมาก" },
            { name: "Argus", reason: "Argus ไล่ฟัน Uranus จนตาย" },
            { name: "Diggie", reason: "Diggie ล้างสโลว์และวางระเบิดใส่ Uranus" }
        ],
        tips: "วิ่งเข้าออกไฟต์เพื่อปั่น Stack เลือดเด้ง"
    },
    {
        id: 77, name: "Vale", role: "Mage", image: "img/Vale.jpg",
        winRate: 49.93,
        weakAgainst: [
            { name: "Odette", reason: "Odette ยิงสวน Vale" },
            { name: "Estes", reason: "Estes ฮีลสู้ Vale" },
            { name: "Novaria", reason: "Novaria ยิงไกลกว่า Vale" },
            { name: "Rafaela", reason: "Rafaela วิ่งหลบพายุ Vale" },
            { name: "Bane", reason: "Bane ยิงสวน Vale" }
        ],
        tips: "อัปเกรดสกิลตามสถานการณ์ (สีฟ้า=CC ยก, สีเหลือง=แรง)"
    },
    {
        id: 131, name: "Valentina", role: "Mage", image: "img/Valentina.jpg",
        winRate: 40.71,
        weakAgainst: [
            { name: "Atlas", reason: "Atlas จับ Valentina" },
            { name: "X.Borg", reason: "X.Borg เผา Valentina" },
            { name: "Carmilla", reason: "Carmilla ล็อค Valentina" },
            { name: "Kadita", reason: "Kadita สวน Valentina" },
            { name: "Benedetta", reason: "Benedetta ฆ่า Valentina" }
        ],
        tips: "เลือกก็อปอัลติพวก Tank/Mage ที่เปิดไฟต์แรงๆ (Atlas/Faramis)"
    },
    {
        id: 47, name: "Valir", role: "Mage", image: "img/Valir.jpg",
        winRate: 51.48,
        weakAgainst: [
            { name: "Barats", reason: "Barats ทนทานต่อการผลักของ Valir (เพราะตัวใหญ่)" },
            { name: "Fredrinn", reason: "Fredrinn รับดาเมจ Valir แล้วสวนกลับ" },
            { name: "Thamuz", reason: "Thamuz วิ่งเร็วและถึกฝ่าไฟ Valir ได้" },
            { name: "Balmond", reason: "Balmond ปั่นเข้ามาหา Valir ได้ต่อเนื่อง" },
            { name: "Carmilla", reason: "Carmilla สโลว์และใบ้ Valir" }
        ],
        tips: "เก็บสกิล 2 (ผลัก) ไว้ใช้ตอนโดนล้วงเท่านั้น อย่าใช้มั่ว"
    },
    {
        id: 50, name: "Vexana", role: "Mage", image: "img/Vexana.jpg",
        winRate: 51.30,
        weakAgainst: [
            { name: "Odette", reason: "Odette อัลติละลายร่างยักษ์ Vexana และตัวจริงพร้อมกัน" },
            { name: "Gloo", reason: "Gloo เกาะ Vexana ทำให้หนีไม่ได้" },
            { name: "Zhask", reason: "Zhask วางป้อมยิงร่างยักษ์ Vexana ตายไว" },
            { name: "Khufra", reason: "Khufra กระโดดข้ามร่างยักษ์มาหา Vexana" },
            { name: "Chip", reason: "Chip วาร์ปเพื่อนมาฆ่า Vexana" }
        ],
        tips: "ใช้อัลติเรียกร่างยักษ์มาช่วยแทงค์ป้อมได้"
    },
    {
        id: 96, name: "Wanwan", role: "Marksman", image: "img/Wanwan.jpg",
        winRate: 48.49,
        weakAgainst: [
            { name: "Yin", reason: "Yin ขัง Wanwan ทำให้บินไม่ได้" },
            { name: "Atlas", reason: "Atlas จับ Wanwan ตอนกระโดด" },
            { name: "Guinevere", reason: "Guinevere ยก Wanwan ลอย" },
            { name: "Ixia", reason: "Ixia ยิง Wanwan ไกลๆ" },
            { name: "Gloo", reason: "Gloo เกาะ Wanwan" }
        ],
        tips: "โจมตีจุดอ่อนให้ครบ 4 จุดเพื่อเปิดอัลติ (บิน)"
    },
    {
        id: 65, name: "Xavier", role: "Mage", image: "img/Xavier.jpg",
        winRate: 50.56,
        weakAgainst: [
            { name: "Belerick", reason: "Belerick สะท้อนดาเมจใส่ Xavier" },
            { name: "Diggie", reason: "Diggie ล้างสตั๊น Xavier" },
            { name: "Faramis", reason: "Faramis ช่วยเพื่อนรอดจากเลเซอร์ Xavier" },
            { name: "Terizla", reason: "Terizla ทุบ Xavier ถึงตัว" },
            { name: "Baxia", reason: "Baxia กลิ้งชน Xavier" }
        ],
        tips: "ยิงสกิลให้โดนเพื่อเก็บ Stack จะยิงไกลขึ้นและแรงขึ้น"
    },
    {
        id: 69, name: "X.Borg", role: "Fighter", image: "img/X.Borg.jpg",
        winRate: 50.45,
        weakAgainst: [
            { name: "Diggie", reason: "Diggie วางระเบิดทำลายเกราะไฟ X.Borg" },
            { name: "Baxia", reason: "Baxia ตัดเลือดทำให้ X.Borg ไม่ถึก" },
            { name: "Terizla", reason: "Terizla ทุบ X.Borg แลกกัน Terizla ชนะ" },
            { name: "Martis", reason: "Martis สับ X.Borg ตายตอนเกราะแตก" },
            { name: "Ruby", reason: "Ruby ดูดเลือดและ CC ขัด X.Borg" }
        ],
        tips: "รักษาเกราะ Firaga ไว้เสมอ ถ้าเกราะแตกให้รีบเก็บถังยา"
    },
    {
        id: 63, name: "Yi Sun-shin", role: "Marksman/Assassin", image: "img/Yi Sun-shin.jpg",
        winRate: 50.57,
        weakAgainst: [
            { name: "Khufra", reason: "Khufra ขัดจังหวะการ Dash ของ YSS" },
            { name: "Pharsa", reason: "Pharsa ยิง YSS จากระยะไกล" },
            { name: "Wanwan", reason: "Wanwan หลบสกิลฟันของ YSS ได้" },
            { name: "Benedetta", reason: "Benedetta พริ้วกว่า YSS" },
            { name: "Valir", reason: "Valir ผลัก YSS ออกไป" }
        ],
        tips: "สลับตีไกล/ตีใกล้ เพื่อให้ Passive ติดคริติคอลตลอดเวลา"
    },
    {
        id: 83, name: "Yin", role: "Fighter", image: "img/Yin.jpg",
        winRate: 49.45,
        weakAgainst: [
            { name: "Estes", reason: "Estes ฮีลเพื่อนสู้ Yin ในห้องขัง" },
            { name: "Floryn", reason: "Floryn ฮีลข้ามมิติช่วยเพื่อน" },
            { name: "Angela", reason: "Angela สิงเพื่อนในห้องขังได้" },
            { name: "Diggie", reason: "Diggie อัลติช่วยเพื่อนรอด" },
            { name: "Hayabusa", reason: "Hayabusa อัลติสวน Yin ในห้อง" }
        ],
        tips: "ลากตัว Mage หรือ Marksman ขาตายเข้าห้องมาฆ่าเท่านั้น"
    },
    {
        id: 72, name: "Yu Zhong", role: "Fighter", image: "img/Yu Zhong.jpg",
        winRate: 50.18,
        weakAgainst: [
            { name: "Gloo", reason: "Gloo เกาะติด Yu Zhong ตอนเป็นมังกร" },
            { name: "Popol & Kupa", reason: "หมา Popol กัด Yu Zhong" },
            { name: "Odette", reason: "Odette ยิงสวน Yu Zhong" },
            { name: "Minsitthar", reason: "Minsitthar ขัง Yu Zhong" },
            { name: "Atlas", reason: "Atlas จับ Yu Zhong" }
        ],
        tips: "พยายามทำให้ Passive (Bar สีม่วง) เต็ม เพื่อดูดเลือดศัตรู"
    },
    {
        id: 80, name: "Yve", role: "Mage", image: "img/Yve.jpg",
        winRate: 49.71,
        weakAgainst: [
            { name: "Odette", reason: "Odette ยิงอัลติใส่ Yve ที่ยืนนิ่ง" },
            { name: "Diggie", reason: "Diggie วางระเบิดใส่ Yve" },
            { name: "Carmilla", reason: "Carmilla ล็อค Yve" },
            { name: "Aulus", reason: "Aulus วิ่งฝ่าสโลว์มาทุบ Yve" },
            { name: "Minotaur", reason: "Minotaur โดดทุบ Yve" }
        ],
        tips: "กดคลิกเพื่อโจมตีทีละจุด หรือลากนิ้วเพื่อสโลว์ (เลือกใช้ให้ถูก)"
    },
    {
        id: 32, name: "Zetian", role: "Mage", image: "img/Zetian.jpg",
        winRate: 52.06,
        weakAgainst: [
            { name: "Odette", reason: "Odette ยิงแรงกว่า Zetian" },
            { name: "Natalia", reason: "Natalia ล้วง Zetian" },
            { name: "Tigreal", reason: "Tigreal ดัน Zetian" },
            { name: "Popol & Kupa", reason: "หมา Popol กัด Zetian" },
            { name: "Zilong", reason: "Zilong แทง Zetian" }
        ],
        tips: "ควบคุมพื้นที่ไฟต์ด้วยสกิลจักรพรรดินี"
    },
    {
        id: 97, name: "Zhask", role: "Mage", image: "img/Zhask.jpg",
        winRate: 48.39,
        weakAgainst: [
            { name: "Odette", reason: "Odette ยิงชิ่งจากป้อม Zhask โดนตัวจริง" },
            { name: "Diggie", reason: "Diggie วางระเบิดใส่ป้อม Zhask" },
            { name: "Yin", reason: "Yin ลาก Zhask ออกจากป้อม" },
            { name: "Faramis", reason: "Faramis ดึงวิญญาณ Zhask" },
            { name: "Selena", reason: "Selena สตั๊น Zhask ที่ยืนนิ่ง" }
        ],
        tips: "วางแมงมุมขวางทางเดินแคบๆ เพื่อโซนศัตรู"
    },
    {
        id: 64, name: "Zhuxin", role: "Mage", image: "img/Zhuxin.jpg",
        winRate: 50.56,
        weakAgainst: [
            { name: "Odette", reason: "Odette ยิงอัลติสวน Zhuxin" },
            { name: "Alucard", reason: "Alucard ไล่ฆ่า Zhuxin" },
            { name: "Khufra", reason: "Khufra ชน Zhuxin" },
            { name: "Leomord", reason: "Leomord ฟัน Zhuxin" },
            { name: "Gord", reason: "Gord ยิงไกลใส่ Zhuxin" }
        ],
        tips: "ใช้โคมไฟโซนพื้นที่ บีบให้ศัตรูเดินลำบาก"
    },
    {
        id: 110, name: "Zilong", role: "Fighter", image: "img/Zilong.jpg",
        winRate: 47.32,
        weakAgainst: [
            { name: "Angela", reason: "Angela สโลว์ Zilong จนวิ่งไม่ออก" },
            { name: "X.Borg", reason: "X.Borg เผา Zilong" },
            { name: "Zhask", reason: "Zhask ยิง Zilong ตายก่อนถึงตัว" },
            { name: "Lolita", reason: "Lolita บล็อค Zilong" },
            { name: "Diggie", reason: "Diggie ล้างงัดของ Zilong" }
        ],
        tips: "เน้นแอบตุ๋ยป้อม (Split Push) หรือรอล้วงตัวบางๆ"
    }
];