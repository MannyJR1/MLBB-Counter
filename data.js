const heroesData = [
    // --- TANK ---
    {
        id: 112, name: "Tigreal", role: "Tank", image: "img/tigreal.jpg",
        winRate: 47.27,
        weakAgainst: [
            { name: "Diggie", reason: "Tigreal แพ้เพราะ Diggie กดอัลติล้างสถานะรวบของ Tigreal ได้ทั้งทีม (Hard Counter)" },
            { name: "Valir", reason: "Tigreal แพ้เพราะโดน Valir ผลักและสโลว์จนเดินเข้าไม่ถึงตัวเพื่อรวบ" },
            { name: "Khufra", reason: "Tigreal แพ้เพราะ Khufra ขัดจังหวะการร่ายอัลติของ Tigreal ได้ง่ายๆ" },
            { name: "Akai", reason: "Tigreal แพ้เพราะ Akai ปั่นผลัก Tigreal ออกไปก่อนที่จะได้รวบสำเร็จ" },
            { name: "Valentina", reason: "Tigreal แพ้เพราะ Valentina ก็อปอัลติไปรวบสวนเพื่อนร่วมทีม Tigreal เอง" }
        ],
        tips: "ใช้ Flicker + อัลติ เพื่อรวบศัตรูแบบไม่ทันตั้งตัว"
    },
    {
        id: 57, name: "Akai", role: "Tank", image: "img/akai.jpg",
        winRate: 50.84,
        weakAgainst: [
            { name: "Hanabi", reason: "Akai แพ้เพราะ Hanabi มีโล่กัน CC ทำให้ Akai ปั่นผลักไม่ไปและโดนยิงฟรี" },
            { name: "Diggie", reason: "Akai แพ้เพราะ Diggie ล้างสถานะสตั๊นจากการชนกำแพงให้เพื่อนได้" },
            { name: "Valir", reason: "Akai แพ้เพราะ Valir ผลัก Akai กระเด็นออกไปตอนพยายามจะเข้าประชิด" },
            { name: "Martis", reason: "Akai แพ้เพราะ Martis มีกันสถานะ ปั่นไปก็ทำอะไรไม่ได้" },
            { name: "Valentina", reason: "Akai แพ้เพราะ Valentina ก็อปอัลติปั่นสวน ทำให้เสียรูปขบวน" }
        ],
        tips: "ใช้สกิลปั่น (Ulti) เพื่อหนีบศัตรูเข้าป้อมหรือผนัง"
    },
    {
        id: 111, name: "Franco", role: "Tank", image: "img/franco.jpg",
        winRate: 47.28,
        weakAgainst: [
            { name: "Hylos", reason: "Franco แพ้เพราะดึง Hylos มาก็ทำอะไรไม่ได้ แถมช่วย Hylos เปิดวงสโลว์ใส่เพื่อน" },
            { name: "Johnson", reason: "Franco แพ้เพราะดึง Johnson มาเท่ากับพาตัวเปิดไฟต์มาส่งกลางวงเพื่อน" },
            { name: "Atlas", reason: "Franco แพ้เพราะดึง Atlas มาช่วยให้ Atlas จับเพื่อนเราได้ง่ายขึ้น" },
            { name: "Sun", reason: "Franco แพ้เพราะดึงโดนร่างปลอม Sun บ่อยมาก" },
            { name: "Grock", reason: "Franco แพ้เพราะ Grock กันสถานะได้ ดึงไม่ค่อยมา" }
        ],
        tips: "เน้นดึงตัวบางๆ (Mage/Marksman) อย่าดึง Tank เข้ามา"
    },
    {
        id: 4, name: "Minotaur", role: "Tank", image: "img/minotaur.jpg",
        winRate: 53.22,
        weakAgainst: [
            { name: "Diggie", reason: "Minotaur แพ้เพราะ Diggie ล้างสถานะลอย (Knockup) ของ Minotaur ได้หมด" },
            { name: "Valir", reason: "Minotaur แพ้เพราะ Valir ผลักและเผาจน Minotaur เก็บ Rage ยาก" },
            { name: "Karrie", reason: "Minotaur แพ้เพราะโดน Karrie ละลายเกราะด้วย True Damage" },
            { name: "Claude", reason: "Minotaur แพ้เพราะตามความเร็วของ Claude ไม่ทันและโดนดูดความเร็ว" },
            { name: "X.Borg", reason: "Minotaur แพ้เพราะโดน X.Borg เผาด้วย True Damage ทะลุความถึก" }
        ],
        tips: "ใช้ Flicker + อัลติ เพื่อเปิดไฟต์หมู่ที่สวยงาม"
    },
    {
        id: 3, name: "Lolita", role: "Support/Tank", image: "img/lolita.jpg",
        winRate: 55.87,
        weakAgainst: [
            { name: "Melissa", reason: "Lolita แพ้เพราะตุ๊กตาของ Melissa เชื่อมดาเมจทะลุโล่ Lolita ได้" },
            { name: "Natan", reason: "Lolita แพ้เพราะกระสุน Natan ตีโค้งอ้อมโล่และทะลุได้บางจังหวะ" },
            { name: "Diggie", reason: "Lolita แพ้เพราะ Diggie ล้างสตั๊นจากอัลติ Lolita ได้" },
            { name: "Gloo", reason: "Lolita แพ้เพราะ Gloo เกาะหลัง โล่ด้านหน้าจึงไร้ผล" },
            { name: "Franco", reason: "Lolita แพ้เพราะโดน Franco ดึงยกเลิกการกางโล่ได้" }
        ],
        tips: "กางโล่ดักหน้า Marksman ศัตรู เพื่อบล็อคดาเมจให้เพื่อน"
    },
    {
        id: 94, name: "Grock", role: "Tank", image: "img/grock.jpg",
        winRate: 48.76,
        weakAgainst: [
            { name: "Baxia", reason: "Grock แพ้เพราะ Baxia กลิ้งชนและเผาเกราะ Grock ได้เรื่อยๆ" },
            { name: "Karrie", reason: "Grock แพ้เพราะเกราะหนาแค่ไหนก็โดน Karrie เจาะเข้า" },
            { name: "Valir", reason: "Grock แพ้เพราะ Valir ขัดจังหวะการชาร์จของ Grock ได้ตลอด" },
            { name: "Lylia", reason: "Grock แพ้เพราะ Lylia สแปมระเบิดใส่ Grock ที่ตัวใหญ่ได้ง่าย" },
            { name: "Hylos", reason: "Grock แพ้เพราะ Hylos เลือดเยอะกว่าและยืนชนชนะ" }
        ],
        tips: "ยืนติดกำแพงเสมอเพื่อให้ถึกขึ้นและกัน CC"
    },
    {
        id: 102, name: "Hylos", role: "Tank", image: "img/hylos.jpg",
        winRate: 48.28,
        weakAgainst: [
            { name: "Karrie", reason: "Hylos แพ้เพราะ Karrie ยิง % เลือด ยิ่ง Hylos เลือดเยอะยิ่งโดนแรง" },
            { name: "Valir", reason: "Hylos แพ้เพราะเดินเข้าไม่ถึงตัว Valir โดนผลักตลอด" },
            { name: "Baxia", reason: "Hylos แพ้เพราะ Baxia ตัดเลือด Hylos และถึกพอกัน" },
            { name: "Gloo", reason: "Hylos แพ้เพราะ Gloo เกาะแล้ว Hylos แกะไม่ออก โดนตอดจนตาย" },
            { name: "Claude", reason: "Hylos แพ้เพราะโดน Demon Hunter Sword ของ Claude ละลายเลือด" }
        ],
        tips: "เปิดทางเขียว (Ulti) ให้เพื่อนวิ่งไล่ หรือใช้หนี"
    },
    {
        id: 81, name: "Johnson", role: "Tank", image: "img/johnson.jpg",
        winRate: 49.58,
        weakAgainst: [
            { name: "Diggie", reason: "Johnson แพ้เพราะ Diggie ล้างสถานะสตั๊นจากการชนให้เพื่อนได้" },
            { name: "Grock", reason: "Johnson แพ้เพราะ Grock สร้างกำแพงดักทางรถได้ทันที" },
            { name: "Belerick", reason: "Johnson แพ้เพราะชน Belerick แล้วโดนสะท้อนดาเมจใส่เพื่อนที่นั่งมาด้วย" },
            { name: "Karrie", reason: "Johnson แพ้เพราะชนพลาดเมื่อไหร่ โดน Karrie ละลายทันที" },
            { name: "Martis", reason: "Johnson แพ้เพราะ Martis ไม่ติดสตั๊นจากการชน (ถ้ากดสกิล 2)" }
        ],
        tips: "ขับรถเลาะขอบแมพเพื่อหลบการมองเห็นใน Minimap"
    },
    {
        id: 78, name: "Belerick", role: "Tank", image: "img/belerick.jpg",
        winRate: 49.93,
        weakAgainst: [
            { name: "Gusion", reason: "Belerick แพ้เพราะ Gusion ใช้ดาเมจเวทย์ Belerick สะท้อนกายภาพไม่ค่อยผล" },
            { name: "Karrie", reason: "Belerick แพ้เพราะ Karrie ยิง True Damage ทะลุเกราะสะท้อน" },
            { name: "Lunox", reason: "Belerick แพ้เพราะ Lunox ยิงทะลุเกราะและรีเลือดสู้ได้" },
            { name: "Lesley", reason: "Belerick แพ้เพราะ Lesley ยิง True Damage นัดเดียวแรงๆ ไม่รัวให้สะท้อน" },
            { name: "Natan", reason: "Belerick แพ้เพราะ Natan ตีเป็นเวทย์ Belerick สะท้อนกลับเบา" }
        ],
        tips: "ยิ่งโดนตีเร็วยิ่งดี สวนกลับด้วยหนาม Passive"
    },
    {
        id: 11, name: "Khufra", role: "Tank", image: "img/khufra.jpg",
        winRate: 52.07,
        weakAgainst: [
            { name: "Franco", reason: "Khufra แพ้เพราะโดน Franco ดึงขัดจังหวะตอนชาร์จกระโดด" },
            { name: "Kaja", reason: "Khufra แพ้เพราะโดน Kaja ดึงล็อคตายขยับไม่ได้" },
            { name: "Valir", reason: "Khufra แพ้เพราะโดน Valir ผลักตอนกำลังพุ่งเข้ามา" },
            { name: "Eudora", reason: "Khufra แพ้เพราะโดนสตั๊นหยุดบอลเด้งได้" },
            { name: "Martis", reason: "Khufra แพ้เพราะ Martis ต้านสถานะกระแทกของ Khufra ได้" }
        ],
        tips: "ใช้สกิล 2 (ลูกบอล) ดักทางพวกตัวพริ้วๆ อย่าง Fanny/Ling"
    },
    {
        id: 87, name: "Baxia", role: "Tank", image: "img/baxia.jpg",
        winRate: 49.33,
        weakAgainst: [
            { name: "Valir", reason: "Baxia แพ้เพราะ Valir ผลักขัดจังหวะการกลิ้งได้ตลอด" },
            { name: "X.Borg", reason: "Baxia แพ้เพราะโดน X.Borg เผาด้วย True Damage ทะลุเกราะ" },
            { name: "Karrie", reason: "Baxia แพ้เพราะ Karrie ยิงเจาะเกราะเข้าเนื้อเน้นๆ" },
            { name: "Martis", reason: "Baxia แพ้เพราะ Martis ขัดจังหวะการกลิ้งได้ด้วยสกิล 1" },
            { name: "Terizla", reason: "Baxia แพ้เพราะโดน Terizla ล็อคด้วยอัลติ กลิ้งหนีไม่ออก" }
        ],
        tips: "Baxia คือตัวแก้ทางพวกฮีลแรงๆ (Estes/Esmeralda) โดยธรรมชาติ"
    },
    {
        id: 41, name: "Atlas", role: "Tank", image: "img/atlas.jpg",
        winRate: 51.59,
        weakAgainst: [
            { name: "Diggie", reason: "Atlas แพ้เพราะ Diggie คือ Hard Counter กดอัลติล้างจับได้ทั้งทีม" },
            { name: "Valir", reason: "Atlas แพ้เพราะ Valir ผลักและล้างสถานะจับได้" },
            { name: "Wanwan", reason: "Atlas แพ้เพราะ Wanwan กดสกิล 2 ล้างสถานะจับได้ทันที" },
            { name: "Lylia", reason: "Atlas แพ้เพราะ Lylia กดอัลติหนีจากการจับได้" },
            { name: "Valentina", reason: "Atlas แพ้เพราะ Valentina ก็อปอัลติไปจับเพื่อน Atlas คืน" }
        ],
        tips: "ถ้าอีกฝั่งมี Diggie ห้ามเลือก Atlas เด็ดขาด"
    },
    {
        id: 2, name: "Gloo", role: "Tank", image: "img/gloo.jpg",
        winRate: 56.34,
        weakAgainst: [
            { name: "Faramis", reason: "Gloo แพ้เพราะ Faramis ใช้สกิล 2 เด้งใส่ร่างแยก Gloo ดาเมจมหาศาล" },
            { name: "Vexana", reason: "Gloo แพ้เพราะ Vexana ระเบิดร่างแยก Gloo ตายเรียบ (Passive)" },
            { name: "Alice", reason: "Gloo แพ้เพราะ Alice ดูดเลือดจากร่างแยก Gloo จนเลือดเต็มหลอด" },
            { name: "Claude", reason: "Gloo แพ้เพราะ Claude เก็บ Stack จากร่างแยก Gloo ได้ไวมาก" },
            { name: "Baxia", reason: "Gloo แพ้เพราะ Baxia เปิดสกิลเผาชนร่างแยก Gloo ได้รัวๆ" }
        ],
        tips: "เกาะติดศัตรูตัวสำคัญ (Core) เพื่อป่วนไฟต์"
    },
    {
        id: 43, name: "Edith", role: "Tank", image: "img/edith.jpg",
        winRate: 51.58,
        weakAgainst: [
            { name: "Karrie", reason: "Edith แพ้เพราะร่าง Tank โดน Karrie ละลายไวมาก" },
            { name: "Wanwan", reason: "Edith แพ้เพราะโจมตีช้า เก็บ Stack ให้ Wanwan บินง่าย" },
            { name: "Valentina", reason: "Edith แพ้เพราะ Valentina ก็อปอัลติมายิงสวนแรงมาก" },
            { name: "Dyrroth", reason: "Edith แพ้เพราะโดน Dyrroth ลดเกราะจนบางเฉียบ" },
            { name: "Lunox", reason: "Edith แพ้เพราะ Lunox ยิงเจาะเกราะเวทย์เข้าเนื้อ" }
        ],
        tips: "รอจังหวะหลอดพลังเต็มค่อยกดอัลติเปลี่ยนร่าง"
    },
    {
        id: 39, name: "Fredrinn", role: "Tank", image: "img/fredrinn.jpg",
        winRate: 51.69,
        weakAgainst: [
            { name: "Valir", reason: "Fredrinn แพ้เพราะเข้าไม่ถึงตัว Valir โดนผลักตลอด เก็บ Crystal ไม่ได้" },
            { name: "Karrie", reason: "Fredrinn แพ้เพราะถึกแค่ไหนก็โดน Karrie ยิงแตก" },
            { name: "X.Borg", reason: "Fredrinn แพ้เพราะโดนเผาระยะไกล เข้าไปทุบสวนไม่ได้" },
            { name: "Dyrroth", reason: "Fredrinn แพ้เพราะโดน Dyrroth ลดเกราะแล้วคอมโบชุดเดียวหาย" },
            { name: "Baxia", reason: "Fredrinn แพ้เพราะโดนตัดเลือด ทำให้สกิลรีเลือดเบาลง" }
        ],
        tips: "ต้องกล้ารับดาเมจเพื่อสะสม Crystal Energy แล้วทุบสวน"
    },
    {
        id: 91, name: "Barats", role: "Tank", image: "img/barats.jpg",
        winRate: 49.08,
        weakAgainst: [
            { name: "Karrie", reason: "Barats แพ้เพราะตัวใหญ่ HP เยอะ เป็นเป้าให้ Karrie ยิงสบาย" },
            { name: "Dyrroth", reason: "Barats แพ้เพราะโดน Dyrroth ลดเกราะแล้วเบิร์สหาย" },
            { name: "Lylia", reason: "Barats แพ้เพราะตัวใหญ่ หลบระเบิด Lylia ยากมาก" },
            { name: "Valir", reason: "Barats แพ้เพราะโดน Valir ผลักและเผาจนเดินไม่ออก" },
            { name: "Claude", reason: "Barats แพ้เพราะโดน Claude ดูดเลือดเป็น % จนยืนไม่ไหว" }
        ],
        tips: "รักษา Stack ไว้ตลอดเวลา อย่าให้ตัวเล็กลง"
    },
    {
        id: 118, name: "Gatotkaca", role: "Tank", image: "img/gatotkaca.jpg",
        winRate: 46.28,
        weakAgainst: [
            { name: "Irithel", reason: "Gatotkaca แพ้เพราะโดน Irithel ยิงเจาะเกราะเข้าเนื้อ" },
            { name: "Karrie", reason: "Gatotkaca แพ้เพราะเกราะหนาแค่ไหนก็แพ้ True Damage" },
            { name: "Lunox", reason: "Gatotkaca แพ้เพราะ Lunox ยิงทะลุเกราะเวทย์" },
            { name: "Diggie", reason: "Gatotkaca แพ้เพราะโดดลงไปแล้ว Diggie กดอัลติช่วยเพื่อนทัน" },
            { name: "Valir", reason: "Gatotkaca แพ้เพราะเข้าถึงตัว Valir ยากมาก" }
        ],
        tips: "รอจังหวะศัตรูเผลอแล้วโดดอัลติใส่กลางวง"
    },
    {
        id: 49, name: "Uranus", role: "Tank", image: "img/uranus.jpg",
        winRate: 51.43,
        weakAgainst: [
            { name: "Baxia", reason: "Uranus แพ้เพราะ Baxia ตัดเลือด ทำให้รีเลือดไม่ขึ้น" },
            { name: "Esmeralda", reason: "Uranus แพ้เพราะโดน Esmeralda ดูดเกราะที่สร้างมา" },
            { name: "Karrie", reason: "Uranus แพ้เพราะรีเลือดไม่ทันดาเมจ Karrie" },
            { name: "Dyrroth", reason: "Uranus แพ้เพราะโดนลดเกราะแล้วฆ่า" },
            { name: "Wanwan", reason: "Uranus แพ้เพราะเป็นเป้านิ่งให้ Wanwan เก็บ Stack บิน" }
        ],
        tips: "วิ่งเข้าออกไฟต์เพื่อปั่น Stack เลือดเด้ง"
    },
    {
        id: 120, name: "Chip", role: "Support/Tank", image: "img/chip.jpg",
        winRate: 45.92,
        weakAgainst: [
            { name: "Minsitthar", reason: "Chip แพ้เพราะโดนกางวงห้ามวาร์ป" },
            { name: "Tigreal", reason: "Chip แพ้เพราะวาร์ปมาแล้วโดน Tigreal รวบทั้งทีม" },
            { name: "Carmilla", reason: "Chip แพ้เพราะวาร์ปมารวมกันให้ Carmilla เชื่อม" },
            { name: "Luo Yi", reason: "Chip แพ้เพราะวาร์ปมารวมกันให้ Luo Yi คอมโบ" },
            { name: "Silvanna", reason: "Chip แพ้เพราะโดนขัง วาร์ปหนีไม่ได้" }
        ],
        tips: "วางประตูมิติให้เพื่อนเข้ามารุมยำศัตรู"
    },

    // --- FIGHTER ---
    {
        id: 128, name: "Balmond", role: "Fighter", image: "img/balmond.jpg",
        winRate: 42.66,
        weakAgainst: [
            { name: "Valir", reason: "Balmond แพ้เพราะโดนผลักตอนปั่น เข้าไม่ถึงตัว" },
            { name: "Wanwan", reason: "Balmond แพ้เพราะปั่นตาม Wanwan ไม่ทัน โดนไคท์จนตาย" },
            { name: "Karrie", reason: "Balmond แพ้เพราะถึกแค่ไหนก็โดนยิงแตก" },
            { name: "Dyrroth", reason: "Balmond แพ้เพราะดวล 1-1 สู้ Dyrroth ไม่ไหว" },
            { name: "X.Borg", reason: "Balmond แพ้เพราะโดนเผาจากระยะไกล" }
        ],
        tips: "ใช้สกิล 2 ปั่นเพื่อลาสครีปและรีเลือด ใช้อัลติลาสคิล"
    },
    {
        id: 54, name: "Alucard", role: "Fighter", image: "img/alucard.jpg",
        winRate: 51.12,
        weakAgainst: [
            { name: "Baxia", reason: "Alucard แพ้เพราะโดนตัดเลือด ดูดเลือดไม่ขึ้น" },
            { name: "Khufra", reason: "Alucard แพ้เพราะกระโดดไม่ได้ ติดบอล Khufra" },
            { name: "Franco", reason: "Alucard แพ้เพราะโดนล็อคขาตาย ดูดเลือดไม่ได้" },
            { name: "Kaja", reason: "Alucard แพ้เพราะโดนดึง suppression" },
            { name: "Akai", reason: "Alucard แพ้เพราะโดนปั่นติดกำแพง ขยับไม่ได้" }
        ],
        tips: "รอจังหวะศัตรูใช้ CC หมดแล้วค่อยกระโดดเข้า"
    },
    {
        id: 24, name: "Bane", role: "Fighter", image: "img/bane.jpg",
        winRate: 52.66,
        weakAgainst: [
            { name: "Lancelot", reason: "Bane แพ้เพราะ Lancelot หลบสกิล Bane ได้หมด" },
            { name: "Chou", reason: "Bane แพ้เพราะโดน Chou เตะก่อนได้พ่นสกิล" },
            { name: "Paquito", reason: "Bane แพ้เพราะ Paquito เข้าประชิดตัวไวมาก" },
            { name: "Hayabusa", reason: "Bane แพ้เพราะสกิล Bane ช้าเกินไปที่จะโดน Hayabusa" },
            { name: "Ling", reason: "Bane แพ้เพราะ Ling หลบอัลติ Bane ได้ง่าย" }
        ],
        tips: "เน้นยิงสกิล 1 ชิ่งใส่ศัตรู แรงมากในช่วงท้ายเกม"
    },
    {
        id: 110, name: "Zilong", role: "Fighter", image: "img/zilong.jpg",
        winRate: 47.32,
        weakAgainst: [
            { name: "Minsitthar", reason: "Zilong แพ้เพราะโดนกางวงห้ามพุ่ง/ห้ามงัด" },
            { name: "Fredrinn", reason: "Zilong แพ้เพราะแทง Fredrinn ไม่เข้าแถมโดนสวน" },
            { name: "Belerick", reason: "Zilong แพ้เพราะแทงรัวๆ โดนสะท้อนตายเอง" },
            { name: "Khufra", reason: "Zilong แพ้เพราะพุ่งติดบอล Khufra" },
            { name: "Argus", reason: "Zilong แพ้เพราะดวลกับ Argus ตอนมีอัลติไม่ไหว" }
        ],
        tips: "เน้นแอบตุ๋ยป้อม (Split Push) หรือรอล้วงตัวบางๆ"
    },
    {
        id: 21, name: "Freya", role: "Fighter", image: "img/freya.jpg",
        winRate: 52.79,
        weakAgainst: [
            { name: "Esmeralda", reason: "Freya แพ้เพราะมีเกราะเยอะ โดน Esmeralda ดูดเกราะหมด" },
            { name: "Minsitthar", reason: "Freya แพ้เพราะกระโดดเข้าไม่ได้ถ้าวางวง" },
            { name: "Valir", reason: "Freya แพ้เพราะโดนผลักออกตอนเปิดอัลติ" },
            { name: "Phoveus", reason: "Freya แพ้เพราะ Phoveus ทุบสวนตอนกระโดด (Hard Counter)" },
            { name: "Baxia", reason: "Freya แพ้เพราะตีเร็วแต่โดนตัดเลือดและสะท้อน" }
        ],
        tips: "กด Inspiration แล้วทุบ รัวๆ ในช่วงที่เปิดอัลติ"
    },
    {
        id: 123, name: "Chou", role: "Fighter", image: "img/chou.jpg",
        winRate: 44.37,
        weakAgainst: [
            { name: "Minsitthar", reason: "Chou แพ้เพราะโดนกางวงห้ามใช้สกิลพุ่งเตะ" },
            { name: "Phoveus", reason: "Chou แพ้เพราะทุกครั้งที่แดช Phoveus จะทุบ" },
            { name: "Khufra", reason: "Chou แพ้เพราะพุ่งติดบอล Khufra" },
            { name: "Gloo", reason: "Chou แพ้เพราะเตะ Gloo แล้วติดหนึบ แกะไม่ออก" },
            { name: "Fredrinn", reason: "Chou แพ้เพราะเตะ Fredrinn ไม่ตายแถมโดนยั่วยุ" }
        ],
        tips: "ใช้ Shunpo หลบ CC จังหวะสำคัญ"
    },
    {
        id: 8, name: "Sun", role: "Fighter", image: "img/sun.jpg",
        winRate: 53.91,
        weakAgainst: [
            { name: "Melissa", reason: "Sun แพ้เพราะ Melissa ปาตุ๊กตาใส่ร่างปลอมแล้วยิงชิ่งโดนร่างจริงตายยกแผง" },
            { name: "Irithel", reason: "Sun แพ้เพราะ Irithel ระเบิดดาเมจหมู่ (Splash) ยิงทีเดียวหายทั้งร่างจริงร่างปลอม" },
            { name: "X.Borg", reason: "Sun แพ้เพราะ X.Borg เผาไฟทีเดียวโดนทุกร่าง ละลายหายไปพร้อมกัน" },
            { name: "Aldous", reason: "Sun แพ้เพราะร่างปลอม Sun เป็นขนมให้ Aldous เก็บ Stack" },
            { name: "Ruby", reason: "Sun แพ้เพราะ Ruby ดูดเลือดจากร่างปลอมได้มหาศาล" }
        ],
        tips: "ใช้ร่างปลอมหลอกล่อสกิลสำคัญของศัตรูก่อนเข้าตี"
    },
    {
        id: 101, name: "Alpha", role: "Fighter", image: "img/alpha.jpg",
        winRate: 48.29,
        weakAgainst: [
            { name: "Valir", reason: "Alpha แพ้เพราะเข้าไม่ถึงตัว Valir โดนผลักตลอด" },
            { name: "Wanwan", reason: "Alpha แพ้เพราะสกิลช้า ไล่ Wanwan ไม่ทัน" },
            { name: "Melissa", reason: "Alpha แพ้เพราะเข้าประชิด Melissa ไม่ได้ ติดโดม" },
            { name: "Diggie", reason: "Alpha แพ้เพราะ Diggie ล้างสตั๊นอัลติ Alpha ได้" },
            { name: "Baxia", reason: "Alpha แพ้เพราะโดนตัดเลือด ดูดเลือดไม่ขึ้น" }
        ],
        tips: "คอมโบสกิลให้โดนเพื่อเรียก Beta (โดรน) มาช่วยโจมตี True Damage"
    },
    {
        id: 26, name: "Ruby", role: "Fighter", image: "img/ruby.jpg",
        winRate: 52.57,
        weakAgainst: [
            { name: "Baxia", reason: "Ruby แพ้เพราะโดนตัดเลือด ดูดเลือดไม่ขึ้น" },
            { name: "Phoveus", reason: "Ruby แพ้เพราะทุกครั้งที่โดด Phoveus จะทุบ" },
            { name: "Minsitthar", reason: "Ruby แพ้เพราะโดดไม่ได้ในวง Minsitthar" },
            { name: "Valir", reason: "Ruby แพ้เพราะเข้าไม่ถึงตัว Valir" },
            { name: "Aurora", reason: "Ruby แพ้เพราะโดนแช่แข็ง ขยับไม่ได้" }
        ],
        tips: "อย่าลืมกดเดินหลังใช้สกิลเพื่อให้ Passive กระโดดทำงาน"
    },
    {
        id: 17, name: "Hilda", role: "Fighter", image: "img/hilda.jpg",
        winRate: 53.20,
        weakAgainst: [
            { name: "Karrie", reason: "Hilda แพ้เพราะโดน Karrie ยิงเข้าเนื้อ" },
            { name: "Dyrroth", reason: "Hilda แพ้เพราะโดน Dyrroth ลดเกราะแล้วทุบ" },
            { name: "Valir", reason: "Hilda แพ้เพราะวิ่งเข้าหาไม่ได้ โดนผลัก" },
            { name: "Gloo", reason: "Hilda แพ้เพราะโดน Gloo เกาะแล้วหนีไม่ออก" },
            { name: "Baxia", reason: "Hilda แพ้เพราะรีเลือดในพุ่มไม่ขึ้นถ้าติดสถานะ Baxia" }
        ],
        tips: "เข้าออกพุ่มไม้บ่อยๆ เพื่อรีเลือดและเอาเกราะ"
    },
    {
        id: 103, name: "Lapu-Lapu", role: "Fighter", image: "img/lapu-lapu.jpg",
        winRate: 48.22,
        weakAgainst: [
            { name: "Kaja", reason: "Lapu-Lapu แพ้เพราะโดน Kaja ดึงล็อคตายตอนกระโดดเข้ามา" },
            { name: "Esmeralda", reason: "Lapu-Lapu แพ้เพราะโดนดูดเกราะตอนแปลงร่าง" },
            { name: "Franco", reason: "Lapu-Lapu แพ้เพราะโดนล็อคขาขยับไม่ได้" },
            { name: "Minsitthar", reason: "Lapu-Lapu แพ้เพราะกดสกิลพุ่งไม่ได้ในวง" },
            { name: "Diggie", reason: "Lapu-Lapu แพ้เพราะ Diggie ล้างสตั๊นอัลติให้เพื่อนได้" }
        ],
        tips: "เก็บอัลติไว้ใช้ตอนไฟต์ใหญ่ แปลงร่างแล้วถึกมากและมีกันสถานะ"
    },
    {
        id: 70, name: "Aldous", role: "Fighter", image: "img/aldous.jpg",
        winRate: 50.30,
        weakAgainst: [
            { name: "Melissa", reason: "Aldous แพ้เพราะ Melissa กดอัลติผลัก Aldous กระเด็นออกไปตอนบินมาถึง" },
            { name: "Twilight Armor", reason: "Aldous แพ้ไอเทมนี้ เพราะลดดาเมจจากการทุบทีเดียวหนักๆ" },
            { name: "Franco", reason: "Aldous แพ้เพราะโดนล็อคตายตอนบินมาถึง" },
            { name: "Esmeralda", reason: "Aldous แพ้เพราะ Esmeralda มีเกราะเยอะ ทุบไม่เข้า" },
            { name: "Masha", reason: "Aldous แพ้เพราะ Masha มีสกิลอมตะ/ปลดอาวุธ สู้ยาก" }
        ],
        tips: "ฟาร์มเก็บ Stack ให้ครบ 500 ก่อนเข้าไฟต์เต็มตัว"
    },
    {
        id: 35, name: "Leomord", role: "Fighter", image: "img/leomord.jpg",
        winRate: 52.70,
        weakAgainst: [
            { name: "Karrie", reason: "Leomord แพ้เพราะโดน Karrie ไคท์และยิงละลายม้า" },
            { name: "Minsitthar", reason: "Leomord แพ้เพราะขี่ม้าพุ่งไม่ได้ในวง" },
            { name: "Ruby", reason: "Leomord แพ้เพราะโดน Ruby ขัดจังหวะการขี่ม้า" },
            { name: "Khufra", reason: "Leomord แพ้เพราะพุ่งชนบอล Khufra" },
            { name: "Valir", reason: "Leomord แพ้เพราะเข้าไม่ถึงตัว Valir" }
        ],
        tips: "เล็งตัวเลือดน้อยๆ จะติดคริติคอล 100%"
    },
    {
        id: 55, name: "Thamuz", role: "Fighter", image: "img/thamuz.jpg",
        winRate: 51.05,
        weakAgainst: [
            { name: "Baxia", reason: "Thamuz แพ้เพราะโดนตัดเลือด ดูดเลือดไม่ขึ้น" },
            { name: "Valir", reason: "Thamuz แพ้เพราะเข้าไม่ถึงตัว โดนผลักตลอด" },
            { name: "Karrie", reason: "Thamuz แพ้เพราะถึกแค่ไหนก็โดนยิงแตก" },
            { name: "Dyrroth", reason: "Thamuz แพ้เพราะโดนลดเกราะแล้วแพ้ดาเมจ" },
            { name: "X.Borg", reason: "Thamuz แพ้เพราะโดนเผาระยะไกล (Kite)" }
        ],
        tips: "บวกยับๆ ได้เลยถ้ามีเคียวหมุนรอบตัว"
    },
    {
        id: 56, name: "Terizla", role: "Fighter", image: "img/terizla.jpg",
        winRate: 51.01,
        weakAgainst: [
            { name: "Valir", reason: "Terizla แพ้เพราะช้าและโดน Valir ผลักออกง่าย" },
            { name: "Karrie", reason: "Terizla แพ้เพราะโดน Karrie ยิงละลายเกราะ" },
            { name: "Diggie", reason: "Terizla แพ้เพราะ Diggie ล้างสถานะอัลติให้เพื่อนได้" },
            { name: "Wanwan", reason: "Terizla แพ้เพราะตีช้า เป็นเป้าให้ Wanwan เก็บ Stack" },
            { name: "X.Borg", reason: "Terizla แพ้เพราะโดน X.Borg เผาฟรี" }
        ],
        tips: "ใช้ Flicker + อัลติ เพื่อเปิดไฟต์หมู่ที่สวยงาม"
    },
    {
        id: 59, name: "Badang", role: "Fighter", image: "img/badang.jpg",
        winRate: 50.69,
        weakAgainst: [
            { name: "Wanwan", reason: "Badang แพ้เพราะต่อยไม่โดน Wanwan ที่กระโดดไปมา" },
            { name: "Chou", reason: "Badang แพ้เพราะ Chou เตะสวนตอน Badang เปิดอัลติ" },
            { name: "Khufra", reason: "Badang แพ้เพราะพุ่งติดบอล Khufra" },
            { name: "Minsitthar", reason: "Badang แพ้เพราะพุ่งไม่ได้ สร้างกำแพงยาก" },
            { name: "Phoveus", reason: "Badang แพ้เพราะ Phoveus ทุบสวนตอน Badang พุ่ง" }
        ],
        tips: "ดักพุ่มแล้วสร้างกำแพงขัง รัวหมัดใส่ให้ตาย"
    },
    {
        id: 69, name: "X.Borg", role: "Fighter", image: "img/x.borg.jpg",
        winRate: 50.45,
        weakAgainst: [
            { name: "Silvanna", reason: "X.Borg แพ้เพราะโดน Silvanna ล็อคเผาเกราะแตกไวมาก" },
            { name: "Baxia", reason: "X.Borg แพ้เพราะโดน Baxia ชนเกราะแตกง่าย" },
            { name: "Esmeralda", reason: "X.Borg แพ้เพราะโดน Esmeralda ดูดเกราะ Firaga ไปหมด" },
            { name: "Karrie", reason: "X.Borg แพ้เพราะโดน Karrie ยิงทะลุเกราะ" },
            { name: "Uranus", reason: "X.Borg แพ้เพราะเผา Uranus ไม่ตาย แถมช่วยปั่น Stack ให้" }
        ],
        tips: "รักษาเกราะ Firaga ไว้เสมอ ถ้าเกราะแตกให้รีบเก็บถังยา"
    },
    {
        id: 125, name: "Dyrroth", role: "Fighter", image: "img/dyrroth.jpg",
        winRate: 44.31,
        weakAgainst: [
            { name: "Thamuz", reason: "Dyrroth แพ้เพราะ Thamuz ยืนแลกชนะในระยะยาว" },
            { name: "Freya", reason: "Dyrroth แพ้เพราะ Freya ตีรัวและมีเกราะเยอะกว่า" },
            { name: "Johnson", reason: "Dyrroth แพ้เพราะ Johnson ถึกและชนสวนได้" },
            { name: "Argus", reason: "Dyrroth แพ้เพราะ Argus กดอมตะสวนอัลติ" },
            { name: "Terizla", reason: "Dyrroth แพ้เพราะ Terizla ถึกและสวนแรง" }
        ],
        tips: "ลดเกราะศัตรูด้วยสกิล 2 ก่อน แล้วค่อยใช้อัลติ"
    },
    {
        id: 18, name: "Minsitthar", role: "Fighter", image: "img/minsitthar.jpg",
        winRate: 53.15,
        weakAgainst: [
            { name: "Diggie", reason: "Minsitthar แพ้เพราะ Diggie ล้างสถานะดึงได้" },
            { name: "Grock", reason: "Minsitthar แพ้เพราะ Grock กันสถานะดึงได้" },
            { name: "Chou", reason: "Minsitthar แพ้เพราะ Chou เตะ Minsitthar ออกจากวงได้" },
            { name: "Valir", reason: "Minsitthar แพ้เพราะเดินเข้าไม่ถึงตัว Valir" },
            { name: "Yve", reason: "Minsitthar แพ้เพราะ Yve กางวงไกลกว่าระยะ Minsitthar" }
        ],
        tips: "คอมโบสกิล 1 ดึง + สกิล 3 กางวง คือที่สุดของการจับตายตัวพริ้ว"
    },
    {
        id: 48, name: "Guinevere", role: "Fighter", image: "img/guinevere.jpg",
        winRate: 51.45,
        weakAgainst: [
            { name: "Hanabi", reason: "Guinevere แพ้เพราะ Hanabi มีโล่กันสถานะลอย" },
            { name: "Diggie", reason: "Guinevere แพ้เพราะ Diggie ล้างสถานะลอยให้เพื่อนได้" },
            { name: "Wanwan", reason: "Guinevere แพ้เพราะ Wanwan สกิล 2 ล้างสถานะได้" },
            { name: "Helcurt", reason: "Guinevere แพ้เพราะกระโดดใส่ Helcurt แล้วโดนใบ้ (Silence)" },
            { name: "Martis", reason: "Guinevere แพ้เพราะ Martis กันสถานะได้และปั่นสวน" }
        ],
        tips: "ต้องกระโดดให้โดน (Lifts) ถึงจะกดอัลติได้แรงสุดๆ"
    },
    {
        id: 33, name: "Khaleed", role: "Fighter", image: "img/khaleed.jpg",
        winRate: 51.98,
        weakAgainst: [
            { name: "Valir", reason: "Khaleed แพ้เพราะโดนขัดจังหวะการฮีลและโดนผลัก" },
            { name: "Luo Yi", reason: "Khaleed แพ้เพราะโดน Luo Yi ดูดขัดจังหวะสกิล" },
            { name: "Baxia", reason: "Khaleed แพ้เพราะโดนตัดเลือด ฮีลไม่ขึ้น" },
            { name: "Jawhead", reason: "Khaleed แพ้เพราะโดนโยนขัดจังหวะฮีล" },
            { name: "Martis", reason: "Khaleed แพ้เพราะ Martis ขัดจังหวะสกิล Khaleed ได้" }
        ],
        tips: "เดินให้เกจทรายเต็มเพื่อสไลด์เข้าหาศัตรู"
    },
    {
        id: 133, name: "Yu Zhong", role: "Fighter", image: "img/yu-zhong.jpg",
        winRate: 50.18,
        weakAgainst: [
            { name: "Baxia", reason: "Yu Zhong แพ้เพราะโดน Baxia ตัดเลือดรุนแรง ดูดเลือดไม่ขึ้น" },
            { name: "Masha", reason: "Yu Zhong แพ้เพราะ Masha ตีไวและเลือดเยอะ ดูดไม่ทัน" },
            { name: "Wanwan", reason: "Yu Zhong แพ้เพราะไล่ Wanwan ไม่ทันและโดนไคท์" },
            { name: "Karrie", reason: "Yu Zhong แพ้เพราะโดน Karrie ยิงทะลุความถึก" },
            { name: "Dyrroth", reason: "Yu Zhong แพ้เพราะโดน Dyrroth ลดเกราะและทุบ" }
        ],
        tips: "พยายามทำให้ Passive (Bar สีม่วง) เต็ม เพื่อดูดเลือดศัตรู"
    },
    {
        id: 27, name: "Aulus", role: "Fighter", image: "img/aulus.jpg",
        winRate: 52.57,
        weakAgainst: [
            { name: "Valir", reason: "Aulus แพ้เพราะวิ่งเข้าไม่ถึงตัว Valir" },
            { name: "Lylia", reason: "Aulus แพ้เพราะโดน Lylia สโลว์จนเดินไม่ออก" },
            { name: "Melissa", reason: "Aulus แพ้เพราะเข้าประชิด Melissa ไม่ได้ ติดโดม" },
            { name: "Saber", reason: "Aulus แพ้เพราะตัวบางช่วงต้นเกม โดน Saber ล้วงง่าย" },
            { name: "Chou", reason: "Aulus แพ้เพราะโดน Chou เตะขัดจังหวะ" }
        ],
        tips: "ฟาร์มให้ไวที่สุด Aulus เก่งตอนเลเวล 12 อัพค้อนใหญ่สุด"
    },
    {
        id: 114, name: "Yin", role: "Fighter", image: "img/yin.jpg",
        winRate: 49.45,
        weakAgainst: [
            { name: "Wanwan", reason: "Yin แพ้เพราะ Wanwan กดสกิล 2 หนีออกจากห้องขังได้" },
            { name: "Valir", reason: "Yin แพ้เพราะ Valir กดอัลติล้างสถานะจับได้" },
            { name: "Argus", reason: "Yin แพ้เพราะ Argus เป็นอมตะในห้องขัง สู้ไม่ได้" },
            { name: "Zhask", reason: "Yin แพ้เพราะ Zhask เข้าป้อมหนีในห้องขังได้" },
            { name: "Edith", reason: "Yin แพ้เพราะ Edith ถึกและสวนแรงมากในห้อง" }
        ],
        tips: "ลากตัว Mage หรือ Marksman ขาตายเข้าห้องมาฆ่าเท่านั้น"
    },
    {
        id: 62, name: "Julian", role: "Fighter/Mage", image: "img/julian.jpg",
        winRate: 50.57,
        weakAgainst: [
            { name: "Saber", reason: "Julian แพ้เพราะโดน Saber ล้วงตายก่อนได้กดสกิล" },
            { name: "Benedetta", reason: "Julian แพ้เพราะ Benedetta หลบสกิล Julian ได้หมด" },
            { name: "Chou", reason: "Julian แพ้เพราะโดน Chou เตะใบ้" },
            { name: "Esmeralda", reason: "Julian แพ้เพราะ Esmeralda ดูดเกราะ Julian" },
            { name: "Phoveus", reason: "Julian แพ้เพราะใช้สกิลพุ่ง Phoveus จะทุบ" }
        ],
        tips: "เลือกคอมโบสกิลตามสถานการณ์ (ยกศัตรู/หนี/ล็อคขา)"
    },
    {
        id: 71, name: "Phoveus", role: "Fighter", image: "img/phoveus.jpg",
        winRate: 50.24,
        weakAgainst: [
            { name: "Esmeralda", reason: "Phoveus แพ้เพราะดูดเกราะ Phoveus ได้" },
            { name: "Lylia", reason: "Phoveus แพ้เพราะโดนสโลว์และไม่มีสกิล Dash ให้ทุบ" },
            { name: "Yve", reason: "Phoveus แพ้เพราะ Yve ยืนนิ่งๆ Phoveus ทุบไม่ได้" },
            { name: "Gord", reason: "Phoveus แพ้เพราะ Gord ยืนนิ่งๆ Phoveus เข้าไม่ถึง" },
            { name: "Layla", reason: "Phoveus แพ้เพราะ Layla ยิงไกลและไม่ค่อย Dash" }
        ],
        tips: "เลือก Phoveus เฉพาะตอนที่อีกฝั่งมีตัว Dash เยอะๆ (Wanwan/Harith)"
    },
    {
        id: 106, name: "Arlott", role: "Fighter/Assassin", image: "img/arlott.jpg",
        winRate: 48.01,
        weakAgainst: [
            { name: "Minsitthar", reason: "Arlott แพ้เพราะโดนกางวงห้ามพุ่ง" },
            { name: "Phoveus", reason: "Arlott แพ้เพราะทุกครั้งที่พุ่ง Phoveus จะทุบ" },
            { name: "Kaja", reason: "Arlott แพ้เพราะโดน Kaja ล็อคตาย" },
            { name: "Franco", reason: "Arlott แพ้เพราะโดน Franco ล็อคขา" },
            { name: "Khufra", reason: "Arlott แพ้เพราะพุ่งติดบอล Khufra" }
        ],
        tips: "รอเพื่อน CC ให้ติด Passive (ตาสีแดง) แล้วค่อยแทงจะแรงมาก"
    },
    {
        id: 104, name: "Cici", role: "Fighter", image: "img/cici.jpg",
        winRate: 48.18,
        weakAgainst: [
            { name: "Minsitthar", reason: "Cici แพ้เพราะกระโดดไม่ได้ในวง Minsitthar" },
            { name: "Phoveus", reason: "Cici แพ้เพราะกระโดดแล้วโดน Phoveus ทุบ" },
            { name: "Belerick", reason: "Cici แพ้เพราะตีรัวแล้วโดนสะท้อนตายเอง" },
            { name: "Saber", reason: "Cici แพ้เพราะตัวบาง โดน Saber ล้วงชุดเดียว" },
            { name: "Kaja", reason: "Cici แพ้เพราะโดน Kaja ดึงล็อคตาย" }
        ],
        tips: "รักษาระยะห่าง ล็อคเป้าแล้วกระโดดไปเรื่อยๆ อย่าหยุด"
    },
    {
        id: 132, name: "Masha", role: "Fighter", image: "img/masha.jpg",
        winRate: 56.62,
        weakAgainst: [
            { name: "Sun", reason: "Masha แพ้เพราะ Sun มีร่างปลอมรุมทุบ" },
            { name: "Aamon", reason: "Masha แพ้เพราะตี Aamon ไม่โดนตอนหายตัว" },
            { name: "Baxia", reason: "Masha แพ้เพราะโดน Baxia ตัดเลือด รีเลือดไม่ขึ้น" },
            { name: "Blade Armor", reason: "Masha แพ้ไอเทมนี้เพราะตีธรรมดาแล้วเจ็บเอง" },
            { name: "Belerick", reason: "Masha แพ้เพราะตีรัวแล้วโดน Belerick สะท้อนตาย" }
        ],
        tips: "เน้นแยกดันป้อม (Split Push) หลีกเลี่ยงการบวกตรงๆ กับตัวที่มีตัดเลือด"
    },
    {
        id: 5, name: "Kaja", role: "Fighter/Support", image: "img/kaja.jpg",
        winRate: 54.19,
        weakAgainst: [
            { name: "Valir", reason: "Kaja แพ้เพราะโดน Valir ผลักตอนจะเข้าไปดึง" },
            { name: "Diggie", reason: "Kaja แพ้เพราะ Diggie กันสถานะอื่นๆ ให้เพื่อนได้ (ยกเว้นอัลติ)" },
            { name: "Grock", reason: "Kaja แพ้เพราะดึง Grock ไม่ค่อยมา (กันสถานะ)" },
            { name: "Lylia", reason: "Kaja แพ้เพราะดึง Lylia ไม่ตาย นางกดอัลติเลือดเด้ง" },
            { name: "Akai", reason: "Kaja แพ้เพราะ Akai ปั่นผลัก Kaja ออกไป" }
        ],
        tips: "ใช้ Flicker + อัลติ ดึงตัวสำคัญเท่านั้น (Suppression แก้ทางไม่ได้ด้วย Purify ปกติ)"
    },
    {
        id: 109, name: "Martis", role: "Fighter", image: "img/martis.jpg",
        winRate: 47.49,
        weakAgainst: [
            { name: "Phoveus", reason: "Martis แพ้เพราะทุกครั้งที่พุ่ง Phoveus จะทุบ" },
            { name: "Minsitthar", reason: "Martis แพ้เพราะพุ่งไม่ได้ในวง" },
            { name: "Kaja", reason: "Martis แพ้เพราะกันสถานะได้หมดยกเว้นอัลติ Kaja" },
            { name: "Franco", reason: "Martis แพ้เพราะโดน Franco ล็อคขาตาย" },
            { name: "Belerick", reason: "Martis แพ้เพราะปั่นใส่ Belerick แล้วเจ็บเอง" }
        ],
        tips: "รอลาสช็อตด้วยอัลติ เพื่อรีเซ็ตคูลดาวน์"
    },
    {
        id: 89, name: "Lukas", role: "Fighter", image: "img/lukas.jpg",
        winRate: 49.19,
        weakAgainst: [
            { name: "Valir", reason: "Lukas แพ้เพราะเข้าไม่ถึงตัว Valir" },
            { name: "Kaja", reason: "Lukas แพ้เพราะโดนดึงล็อคตาย" },
            { name: "Franco", reason: "Lukas แพ้เพราะโดนล็อคขา" },
            { name: "Minsitthar", reason: "Lukas แพ้เพราะใช้สกิลเคลื่อนที่ไม่ได้" },
            { name: "Phoveus", reason: "Lukas แพ้เพราะโดน Phoveus ทุบสวน" }
        ],
        tips: "แปลงร่างเมื่อมีจังหวะสวนกลับที่แน่นอน"
    },
     {
        id: 75, name: "Sora", role: "Fighter", image: "img/sora.jpg",
        winRate: 50.03,
        weakAgainst: [
            { name: "Minsitthar", reason: "Sora แพ้เพราะใช้สกิลไม่ได้ในวง" },
            { name: "Phoveus", reason: "Sora แพ้เพราะโดน Phoveus ทุบ" },
            { name: "Khufra", reason: "Sora แพ้เพราะพุ่งติดบอล Khufra" },
            { name: "Kaja", reason: "Sora แพ้เพราะโดน Kaja ล็อค" },
            { name: "Franco", reason: "Sora แพ้เพราะโดน Franco ล็อค" }
        ],
        tips: "ใช้ความเร็วในการโฉบเข้าออก"
    },

    // --- ASSASSIN ---
    {
        id: 42, name: "Saber", role: "Assassin", image: "img/saber.jpg",
        winRate: 51.58,
        weakAgainst: [
            { name: "Hanabi", reason: "Saber แพ้เพราะ Hanabi มีโล่กัน CC ยกไม่ขึ้น" },
            { name: "Argus", reason: "Saber แพ้เพราะ Argus กดอมตะสวนอัลติ" },
            { name: "Diggie", reason: "Saber แพ้เพราะ Diggie กดเกราะกันตายให้เพื่อนได้" },
            { name: "Antique Cuirass", reason: "Saber แพ้ไอเทมเกราะนี้ ดาเมจหายไปเยอะมาก" },
            { name: "Edith", reason: "Saber แพ้เพราะยก Edith ไม่ตายแล้วโดนสวนหนัก" }
        ],
        tips: "ดักพุ่มไม้ รอตัวบางๆ เดินผ่านแล้วคอมโบชุดเดียว"
    },
    {
        id: 117, name: "Karina", role: "Assassin", image: "img/karina.jpg",
        winRate: 46.34,
        weakAgainst: [
            { name: "Baxia", reason: "Karina แพ้เพราะ Baxia ถึกและลดดาเมจ Karina" },
            { name: "Ruby", reason: "Karina แพ้เพราะ Ruby ขัดจังหวะคอมโบได้ตลอด" },
            { name: "Kaja", reason: "Karina แพ้เพราะโดน Kaja ล็อคตาย" },
            { name: "Franco", reason: "Karina แพ้เพราะโดน Franco ล็อค" },
            { name: "Athena Shield", reason: "Karina แพ้ไอเทมกันเวทย์นี้อย่างรุนแรง" }
        ],
        tips: "รอจังหวะศัตรูเลือดน้อยค่อยเข้าไปลาส (Reset Cooldown)"
    },
    {
        id: 127, name: "Fanny", role: "Assassin", image: "img/fanny.jpg",
        winRate: 42.67,
        weakAgainst: [
            { name: "Kaja", reason: "Fanny แพ้เพราะโดน Kaja ล็อคขาร่วงจากเชือก" },
            { name: "Khufra", reason: "Fanny แพ้เพราะบินชนบอล Khufra ร่วงตลอด" },
            { name: "Saber", reason: "Fanny แพ้เพราะโดน Saber ล็อคตายกลางอากาศ" },
            { name: "Franco", reason: "Fanny แพ้เพราะโดน Franco กดอัลติล็อค" },
            { name: "Akai", reason: "Fanny แพ้เพราะโดน Akai ไถติดกำแพง" }
        ],
        tips: "ฝึกบินใน Custom ให้คล่องก่อนลงสนามจริง (สำคัญมาก)"
    },
    {
        id: 86, name: "Hayabusa", role: "Assassin", image: "img/hayabusa.jpg",
        winRate: 49.35,
        weakAgainst: [
            { name: "Kaja", reason: "Hayabusa แพ้เพราะโดน Kaja ล็อคตายก่อนได้กดอัลติ" },
            { name: "Franco", reason: "Hayabusa แพ้เพราะโดน Franco ล็อคขา" },
            { name: "Sun", reason: "Hayabusa แพ้เพราะอัลติไปลงร่างปลอม Sun หมด" },
            { name: "Minsitthar", reason: "Hayabusa แพ้เพราะใช้เงาหนีไม่ได้ในวง" },
            { name: "Khufra", reason: "Hayabusa แพ้เพราะพุ่งติดบอล Khufra" }
        ],
        tips: "เคลียร์ครีปให้หมดก่อนกดอัลติ ดาเมจจะได้ลงที่ฮีโร่ล้วนๆ"
    },
    {
        id: 46, name: "Natalia", role: "Assassin", image: "img/natalia.jpg",
        winRate: 51.49,
        weakAgainst: [
            { name: "Rafaela", reason: "Natalia แพ้เพราะ Rafaela เปิด Vision หาตัวเจอ" },
            { name: "Yi Sun-shin", reason: "Natalia แพ้เพราะ YSS เปิดอัลติหาตำแหน่งเจอ" },
            { name: "Kaja", reason: "Natalia แพ้เพราะโผล่มาก็โดน Kaja ล็อคทันที" },
            { name: "Hylos", reason: "Natalia แพ้เพราะ Hylos ถึกเกินและมีวงเผา" },
            { name: "Popol & Kupa", reason: "Natalia แพ้เพราะกับดักของ Popol" }
        ],
        tips: "เน้นล้วง Mage/Marksman จากด้านหลัง แล้วหายตัวหนีทันที"
    },
    {
        id: 129, name: "Lancelot", role: "Assassin", image: "img/lancelot.jpg",
        winRate: 42.59,
        weakAgainst: [
            { name: "Khufra", reason: "Lancelot แพ้เพราะพุ่งติดบอล Khufra" },
            { name: "Phoveus", reason: "Lancelot แพ้เพราะพุ่งแล้วโดน Phoveus ทุบ" },
            { name: "Minsitthar", reason: "Lancelot แพ้เพราะพุ่งไม่ได้ในวง" },
            { name: "Kaja", reason: "Lancelot แพ้เพราะโดน Kaja ล็อคตาย" },
            { name: "Ruby", reason: "Lancelot แพ้เพราะโดน Ruby ขัดจังหวะตลอด" }
        ],
        tips: "ใช้สกิล 1 แทงครีปเพื่อเก็บ Stack ดาเมจก่อนเข้าบวก"
    },
    {
        id: 52, name: "Helcurt", role: "Assassin", image: "img/helcurt.jpg",
        winRate: 51.15,
        weakAgainst: [
            { name: "Hylos", reason: "Helcurt แพ้เพราะ Hylos ถึกและเดินไล่ Helcurt ทัน" },
            { name: "Kaja", reason: "Helcurt แพ้เพราะโดน Kaja ล็อค" },
            { name: "Belerick", reason: "Helcurt แพ้เพราะตี Belerick แล้วเจ็บเอง" },
            { name: "Rafaela", reason: "Helcurt แพ้เพราะโดนเปิด Vision" },
            { name: "Eudora", reason: "Helcurt แพ้เพราะโดนสตั๊นสวนทันทีที่เข้าใกล้" }
        ],
        tips: "กดอัลติให้มืดเพื่อป่วนไฟต์ แม้จะไม่ได้เข้าไปฆ่าเองก็ตาม"
    },
    {
        id: 61, name: "Gusion", role: "Assassin", image: "img/gusion.jpg",
        winRate: 50.60,
        weakAgainst: [
            { name: "Athena Shield", reason: "Gusion แพ้ไอเทมนี้สุดๆ ดาเมจเบาลงมาก" },
            { name: "Khufra", reason: "Gusion แพ้เพราะพุ่งติดบอล Khufra" },
            { name: "Minsitthar", reason: "Gusion แพ้เพราะคอมโบไม่ออกในวง" },
            { name: "Ruby", reason: "Gusion แพ้เพราะโดน Ruby ขัดจังหวะคอมโบ" },
            { name: "Kaja", reason: "Gusion แพ้เพราะโดน Kaja ล็อคตาย" }
        ],
        tips: "ฝึกปามีดและเก็บมีดให้แม่น คอมโบไวๆ ศัตรูมองไม่ทัน"
    },
    {
        id: 28, name: "Hanzo", role: "Assassin", image: "img/hanzo.jpg",
        winRate: 52.14,
        weakAgainst: [
            { name: "Natalia", reason: "Hanzo แพ้เพราะ Natalia หาตัวร่างต้นเจอและฆ่าทิ้ง" },
            { name: "Ling", reason: "Hanzo แพ้เพราะ Ling บินข้ามป่ามาหาร่างต้นได้ไว" },
            { name: "Aldous", reason: "Hanzo แพ้เพราะ Aldous บินหาร่างต้นเจอเสมอ" },
            { name: "Johnson", reason: "Hanzo แพ้เพราะ Johnson ขับรถชนร่างต้น" },
            { name: "Yi Sun-shin", reason: "Hanzo แพ้เพราะ YSS เปิดอัลติเห็นตำแหน่งร่างต้น" }
        ],
        tips: "ซ่อนร่างต้นในป้อมหรือพุ่มลึกๆ ก่อนถอดวิญญาณ"
    },
    {
        id: 116, name: "Ling", role: "Assassin", image: "img/ling.jpg",
        winRate: 46.64,
        weakAgainst: [
            { name: "Aamon", reason: "Ling แพ้เพราะ Aamon ล็อคเป้าเบิร์ส Ling ตายคาที่" },
            { name: "Kaja", reason: "Ling แพ้เพราะโดนดึงลงจากกำแพง" },
            { name: "Saber", reason: "Ling แพ้เพราะโดน Saber ล็อคอัลติร่วง" },
            { name: "Khufra", reason: "Ling แพ้เพราะ Khufra ดักทางกระโดด" },
            { name: "Minsitthar", reason: "Ling แพ้เพราะโดนกางวงห้ามหนี" }
        ],
        tips: "บริหารค่า Energy (Bar สีฟ้า) ให้ดี อย่าให้หมดกลางวงศัตรู"
    },
    {
        id: 134, name: "Benedetta", role: "Assassin", image: "img/benedetta.jpg",
        winRate: 51.95,
        weakAgainst: [
            { name: "Irithel", reason: "Benedetta แพ้เพราะ Irithel วิ่งยิงได้ Benedetta จับตัวยาก" },
            { name: "Phoveus", reason: "Benedetta แพ้เพราะทุกครั้งที่พุ่ง Phoveus จะทุบ" },
            { name: "Minsitthar", reason: "Benedetta แพ้เพราะพุ่งไม่ได้ในวง" },
            { name: "Khufra", reason: "Benedetta แพ้เพราะพุ่งติดบอล Khufra" },
            { name: "Kaja", reason: "Benedetta แพ้เพราะโดน Kaja ล็อค" }
        ],
        tips: "ใช้สกิล 2 เพื่อบล็อค CC และสวนกลับ (Parry)"
    },
    {
        id: 122, name: "Selena", role: "Assassin/Mage", image: "img/selena.jpg",
        winRate: 44.84,
        weakAgainst: [
            { name: "Diggie", reason: "Selena แพ้เพราะ Diggie ล้างสตั๊นให้เพื่อนได้" },
            { name: "Kaja", reason: "Selena แพ้เพราะพุ่งเข้าไปแล้วโดน Kaja ล็อค" },
            { name: "Phoveus", reason: "Selena แพ้เพราะพุ่งแล้วโดน Phoveus ทุบ" },
            { name: "Saber", reason: "Selena แพ้เพราะตัวบาง โดน Saber ดักฆ่า" },
            { name: "Wanwan", reason: "Selena แพ้เพราะ Wanwan ล้างสตั๊นได้" }
        ],
        tips: "วางกับดัก (Trap) ในพุ่มไม้เพื่อเปิด Vision และคอมโบสกิล 2 สตั๊นระยะไกล"
    },
    {
        id: 136, name: "Aamon", role: "Assassin", image: "img/aamon.jpg",
        winRate: 53.55,
        weakAgainst: [
            { name: "Rafaela", reason: "Aamon แพ้เพราะ Rafaela เปิด Vision หาตัวเจอ" },
            { name: "Kaja", reason: "Aamon แพ้เพราะโดน Kaja ล็อคตาย" },
            { name: "Eudora", reason: "Aamon แพ้เพราะโดน Eudora สตั๊นและเบิร์ส" },
            { name: "Hylos", reason: "Aamon แพ้เพราะ Hylos ถึกมากและมีวงสโลว์" },
            { name: "Ruby", reason: "Aamon แพ้เพราะโดน Ruby ขัดจังหวะตลอด" }
        ],
        tips: "เก็บเศษกระจกเพื่อหายตัวต่อเนื่อง และรอจังหวะล้วงตัวบางๆ"
    },
    {
        id: 98, name: "Joy", role: "Assassin", image: "img/joy.jpg",
        winRate: 48.38,
        weakAgainst: [
            { name: "Minsitthar", reason: "Joy แพ้เพราะแดชไม่ได้ในวง Minsitthar" },
            { name: "Phoveus", reason: "Joy แพ้เพราะทุกครั้งที่แดช Phoveus จะทุบ" },
            { name: "Khufra", reason: "Joy แพ้เพราะแดชติดบอล Khufra" },
            { name: "Kaja", reason: "Joy แพ้เพราะโดน Kaja ล็อคจังหวะเข้าทำ" },
            { name: "Franco", reason: "Joy แพ้เพราะโดน Franco กดอัลติหยุด" }
        ],
        tips: "ฟังจังหวะเพลงให้ดี ต้องกดให้ตรงจังหวะถึงจะแรงและกัน CC"
    },
    {
        id: 85, name: "Nolan", role: "Assassin", image: "img/nolan.jpg",
        winRate: 49.40,
        weakAgainst: [
            { name: "Phoveus", reason: "Nolan แพ้เพราะสไลด์แล้วโดน Phoveus ทุบ" },
            { name: "Minsitthar", reason: "Nolan แพ้เพราะสไลด์ไม่ได้ในวง" },
            { name: "Khufra", reason: "Nolan แพ้เพราะสไลด์ติดบอล Khufra" },
            { name: "Kaja", reason: "Nolan แพ้เพราะโดน Kaja ล็อคตาย" },
            { name: "Antique Cuirass", reason: "Nolan แพ้ไอเทมนี้ เพราะลดดาเมจสกิลหนักมาก" }
        ],
        tips: "พยายามทำคอมโบให้รอยแยกตัดกันเพื่อระเบิด CC"
    },
    {
        id: 79, name: "Suyou", role: "Assassin", image: "img/suyou.jpg",
        winRate: 49.82,
        weakAgainst: [
            { name: "Kaja", reason: "Suyou แพ้เพราะโดน Kaja ล็อค" },
            { name: "Franco", reason: "Suyou แพ้เพราะโดน Franco ล็อค" },
            { name: "Minsitthar", reason: "Suyou แพ้เพราะใช้สกิลเคลื่อนที่ไม่ได้" },
            { name: "Phoveus", reason: "Suyou แพ้เพราะโดน Phoveus ทุบ" },
            { name: "Khufra", reason: "Suyou แพ้เพราะพุ่งติดบอล Khufra" }
        ],
        tips: "ใช้ร่างผีสิงเพื่อเพิ่มความเร็วในการไล่ล่า"
    },

    // --- MAGE ---
    {
        id: 93, name: "Eudora", role: "Mage", image: "img/eudora.jpg",
        winRate: 48.84,
        weakAgainst: [
            { name: "Athena Shield", reason: "Eudora แพ้ไอเทมนี้ คอมโบชุดเดียวไม่ตาย" },
            { name: "Lylia", reason: "Eudora แพ้เพราะ Lylia กดอัลติรีเลือดสวนได้" },
            { name: "Kadita", reason: "Eudora แพ้เพราะ Kadita กดมุดดินหลบสตั๊นได้" },
            { name: "Wanwan", reason: "Eudora แพ้เพราะ Wanwan ล้างสตั๊นได้" },
            { name: "Diggie", reason: "Eudora แพ้เพราะ Diggie ล้างสตั๊นให้เพื่อน" }
        ],
        tips: "ดักพุ่มไม้ รอตัวบางๆ เดินมาแล้วกด 2-3-1 หายวูบ"
    },
    {
        id: 51, name: "Cyclops", role: "Mage", image: "img/cyclops.jpg",
        winRate: 51.21,
        weakAgainst: [
            { name: "Lolita", reason: "Cyclops แพ้เพราะ Lolita บล็อคสกิลได้หมด" },
            { name: "Lancelot", reason: "Cyclops แพ้เพราะ Lancelot หลบสกิลได้ง่าย" },
            { name: "Gusion", reason: "Cyclops แพ้เพราะโดน Gusion เบิร์สไวเกินไป" },
            { name: "Kaja", reason: "Cyclops แพ้เพราะโดน Kaja ล็อคตาย" },
            { name: "Baxia", reason: "Cyclops แพ้เพราะ Baxia ถึกและลดการเด้งเลือด" }
        ],
        tips: "ขยับตัวตลอดเวลาขณะใช้สกิล 2 เพื่อไล่ตามศัตรู"
    },
    {
        id: 40, name: "Odette", role: "Mage", image: "img/odette.jpg",
        winRate: 51.67,
        weakAgainst: [
            { name: "Kadita", reason: "Odette แพ้เพราะโดน Kadita งัดลอยหยุดอัลติ" },
            { name: "Eudora", reason: "Odette แพ้เพราะโดน Eudora สตั๊นหยุดอัลติ" },
            { name: "Vale", reason: "Odette แพ้เพราะโดน Vale ยกหยุดอัลติ" },
            { name: "Guinevere", reason: "Odette แพ้เพราะโดน Guinevere กระโดดทับหยุดอัลติ" },
            { name: "Lolita", reason: "Odette แพ้เพราะโดน Lolita สตั๊นระยะไกล" }
        ],
        tips: "รอให้ศัตรูใช้ CC หมดก่อนค่อยกระโดดเข้าไปเปิดอัลติ"
    },
    {
        id: 97, name: "Zhask", role: "Mage", image: "img/zhask.jpg",
        winRate: 48.39,
        weakAgainst: [
            { name: "Aldous", reason: "Zhask แพ้เพราะ Aldous ทุบป้อมแตกในหมัดเดียว (Popup User)" },
            { name: "Irithel", reason: "Zhask แพ้เพราะ Irithel ยิงป้อมแตกไวมาก" },
            { name: "Claude", reason: "Zhask แพ้เพราะ Claude ดูด Stack จากป้อมได้" },
            { name: "Lancelot", reason: "Zhask แพ้เพราะ Lancelot ใช้ป้อมเป็นทางผ่านพุ่งเข้าหา Zhask" },
            { name: "Retribution", reason: "Zhask แพ้ Spell นี้ เพราะกดใส่ป้อมแล้วตายเลย" }
        ],
        tips: "วางแมงมุมขวางทางเดินแคบๆ เพื่อโซนศัตรู"
    },
    {
        id: 84, name: "Pharsa", role: "Mage", image: "img/pharsa.jpg",
        winRate: 49.42,
        weakAgainst: [
            { name: "Kadita", reason: "Pharsa แพ้เพราะ Kadita มุดดินมาล้วงถึงตัว" },
            { name: "Ling", reason: "Pharsa แพ้เพราะ Ling บินข้ามกำแพงมาฆ่า" },
            { name: "Fanny", reason: "Pharsa แพ้เพราะเป็นเป้านิ่งให้ Fanny บินโฉบ" },
            { name: "Franco", reason: "Pharsa แพ้เพราะยืนนิ่งๆ โดนดึงง่าย" },
            { name: "Kaja", reason: "Pharsa แพ้เพราะโดน Kaja แฟลชมาดึง" }
        ],
        tips: "หาที่ยืนหลังกำแพงหนาๆ ก่อนเปิดอัลติระเบิดลง"
    },
    {
        id: 47, name: "Valir", role: "Mage", image: "img/valir.jpg",
        winRate: 51.48,
        weakAgainst: [
            { name: "Kaja", reason: "Valir แพ้เพราะผลัก Kaja ไม่ได้ตอนโดนล็อค" },
            { name: "Franco", reason: "Valir แพ้เพราะโดนดึงระยะไกล ผลักไม่ทัน" },
            { name: "Lesley", reason: "Valir แพ้เพราะ Lesley ยิงไกลกว่าระยะผลัก" },
            { name: "X.Borg", reason: "Valir แพ้เพราะ X.Borg เผาจากระยะไกล" },
            { name: "Pharsa", reason: "Valir แพ้เพราะ Pharsa ระเบิดจากระยะไกล" }
        ],
        tips: "เก็บสกิล 2 (ผลัก) ไว้ใช้ตอนโดนล้วงเท่านั้น อย่าใช้มั่ว"
    },
    {
        id: 90, name: "Chang'e", role: "Mage", image: "img/change.jpg",
        winRate: 49.18,
        weakAgainst: [
            { name: "Lolita", reason: "Chang'e แพ้เพราะ Lolita กางโล่กันอัลติหายหมด (Hard Counter)" },
            { name: "Baxia", reason: "Chang'e แพ้เพราะ Baxia กลิ้งหลบและถึกมาก" },
            { name: "Ling", reason: "Chang'e แพ้เพราะโดน Ling ล้วงหลัง" },
            { name: "Lancelot", reason: "Chang'e แพ้เพราะ Lancelot พุ่งหลบกระสุนได้หมด" },
            { name: "Radiant Armor", reason: "Chang'e แพ้ไอเทมนี้ ยิงไม่เข้าเลย" }
        ],
        tips: "รักษาโล่ (สกิล 2) ไว้ตลอดเวลา เพื่อเพิ่มดาเมจ"
    },
    {
        id: 121, name: "Harith", role: "Mage", image: "img/harith.jpg",
        winRate: 45.49,
        weakAgainst: [
            { name: "Minsitthar", reason: "Harith แพ้เพราะแดชไม่ได้ในวง Minsitthar" },
            { name: "Khufra", reason: "Harith แพ้เพราะแดชติดบอล Khufra" },
            { name: "Esmeralda", reason: "Harith แพ้เพราะโดน Esmeralda ดูดเกราะ" },
            { name: "Phoveus", reason: "Harith แพ้เพราะทุกครั้งที่แดช Phoveus จะทุบ" },
            { name: "Kaja", reason: "Harith แพ้เพราะโดน Kaja ล็อคตาย" }
        ],
        tips: "ใช้อัลติเมื่อมีสกิล 2 พร้อมใช้งาน เพื่อลดคูลดาวน์รัวๆ"
    },
    {
        id: 20, name: "Kadita", role: "Mage", image: "img/kadita.jpg",
        winRate: 52.91,
        weakAgainst: [
            { name: "Kaja", reason: "Kadita แพ้เพราะโดน Kaja ล็อคก่อนจะได้มุดดิน" },
            { name: "Franco", reason: "Kadita แพ้เพราะโดน Franco ล็อคขา" },
            { name: "Minsitthar", reason: "Kadita แพ้เพราะมุดดินหนีไม่ได้ในวง" },
            { name: "Valir", reason: "Kadita แพ้เพราะโดน Valir ผลักตอนพุ่งเข้ามา" },
            { name: "Eudora", reason: "Kadita แพ้เพราะโดนสตั๊นก่อนคอมโบจบ" }
        ],
        tips: "คอมโบ 1-2-3 ให้แม่น หายวูบในชุดเดียว (One Shot)"
    },
    {
        id: 113, name: "Novaria", role: "Mage", image: "img/novaria.jpg",
        winRate: 47.19,
        weakAgainst: [
            { name: "Aldous", reason: "Novaria แพ้เพราะโดน Aldous ล็อคอัลติใส่ (Popup User)" },
            { name: "Ling", reason: "Novaria แพ้เพราะ Ling บินข้ามกำแพงมาฆ่า" },
            { name: "Fanny", reason: "Novaria แพ้เพราะ Fanny บินโฉบถึงตัวไวมาก" },
            { name: "Hayabusa", reason: "Novaria แพ้เพราะ Hayabusa ล้วงง่าย" },
            { name: "Natalia", reason: "Novaria แพ้เพราะโดน Natalia ใบ้และฆ่า" }
        ],
        tips: "ยิงสกิล 2 ให้ไกลที่สุดเท่าที่จะทำได้ ดาเมจจะแรงตามระยะทาง"
    },
    {
        id: 53, name: "Cecilion", role: "Mage", image: "img/cecilion.jpg",
        winRate: 51.14,
        weakAgainst: [
            { name: "Fanny", reason: "Cecilion แพ้เพราะแพ้ตัวล้วงระยะประชิดอย่างแรง" },
            { name: "Ling", reason: "Cecilion แพ้เพราะ Ling เข้าถึงตัวไวมาก" },
            { name: "Natalia", reason: "Cecilion แพ้เพราะโดนใบ้และฆ่าทันที" },
            { name: "Chou", reason: "Cecilion แพ้เพราะโดน Chou เตะเข้าหาศัตรู" },
            { name: "Gusion", reason: "Cecilion แพ้เพราะ Gusion เบิร์สไวเกินไป" }
        ],
        tips: "รักษาระยะห่างเสมอ สกิล 1 แรงที่สุดที่ปลายระยะ"
    },
    {
        id: 107, name: "Luo Yi", role: "Mage", image: "img/luo-yi.jpg",
        winRate: 47.85,
        weakAgainst: [
            { name: "Wanwan", reason: "Luo Yi แพ้เพราะสกิลใส่ Wanwan ยากมาก" },
            { name: "Lancelot", reason: "Luo Yi แพ้เพราะ Lancelot หลบสกิลได้หมด" },
            { name: "Benedetta", reason: "Luo Yi แพ้เพราะ Benedetta พริ้วเกินกว่าจะเล็งโดน" },
            { name: "Chou", reason: "Luo Yi แพ้เพราะโดน Chou เตะ" },
            { name: "Kaja", reason: "Luo Yi แพ้เพราะโดน Kaja ล็อค" }
        ],
        tips: "เล็งสกิลให้สีต่างกัน (หยิน-หยาง) เพื่อดูดศัตรูมาชนกัน"
    },
    {
        id: 80, name: "Yve", role: "Mage", image: "img/yve.jpg",
        winRate: 49.71,
        weakAgainst: [
            { name: "Kaja", reason: "Yve แพ้เพราะโดน Kaja ดึงตอนกางกระดาน" },
            { name: "Franco", reason: "Yve แพ้เพราะโดน Franco ดึงตอนกางกระดาน" },
            { name: "Yu Zhong", reason: "Yve แพ้เพราะ Yu Zhong บินข้ามกระดานมาหา" },
            { name: "Kadita", reason: "Yve แพ้เพราะ Kadita มุดดินมาเสย" },
            { name: "Claude", reason: "Yve แพ้เพราะ Claude โดดเข้ามาหมุนกลางกระดาน" }
        ],
        tips: "กดคลิกเพื่อโจมตีทีละจุด หรือลากนิ้วเพื่อสโลว์ (เลือกใช้ให้ถูก)"
    },
    {
        id: 76, name: "Lylia", role: "Mage", image: "img/lylia.jpg",
        winRate: 49.95,
        weakAgainst: [
            { name: "Kaja", reason: "Lylia แพ้เพราะโดน Kaja ล็อคตายก่อนได้กดอัลติ" },
            { name: "Franco", reason: "Lylia แพ้เพราะโดน Franco ล็อคขา กดอัลติไม่ได้" },
            { name: "Chou", reason: "Lylia แพ้เพราะโดน Chou เตะใบ้" },
            { name: "Saber", reason: "Lylia แพ้เพราะโดน Saber ล็อคตาย" },
            { name: "Wanwan", reason: "Lylia แพ้เพราะ Wanwan ล้างสโลว์ได้และไล่ฆ่า" }
        ],
        tips: "วางรองเท้าทิ้งไว้ในที่ปลอดภัย ก่อนเดินไปโซนหน้า"
    },
    {
        id: 64, name: "Zhuxin", role: "Mage", image: "img/zhuxin.jpg",
        winRate: 50.56,
        weakAgainst: [
            { name: "Ling", reason: "Zhuxin แพ้เพราะ Ling เข้าถึงตัวง่าย" },
            { name: "Fanny", reason: "Zhuxin แพ้เพราะหยุด Fanny ไม่ได้" },
            { name: "Joy", reason: "Zhuxin แพ้เพราะ Joy พริ้วเกินจับ" },
            { name: "Helcurt", reason: "Zhuxin แพ้เพราะโดนใบ้" },
            { name: "Hayabusa", reason: "Zhuxin แพ้เพราะ Hayabusa ล้วงง่าย" }
        ],
        tips: "ใช้โคมไฟโซนพื้นที่ บีบให้ศัตรูเดินลำบาก"
    },
    {
        id: 67, name: "Kagura", role: "Mage", image: "img/kagura.jpg",
        winRate: 50.52,
        weakAgainst: [
            { name: "Wanwan", reason: "Kagura แพ้เพราะ Wanwan ล้างสถานะได้และไล่ฆ่า" },
            { name: "Khufra", reason: "Kagura แพ้เพราะพุ่งติดบอล Khufra" },
            { name: "Minsitthar", reason: "Kagura แพ้เพราะพุ่งไม่ได้ในวง" },
            { name: "Kaja", reason: "Kagura แพ้เพราะโดนล็อคตาย" },
            { name: "Franco", reason: "Kagura แพ้เพราะโดนกดอัลติล็อค" }
        ],
        tips: "เก็บร่ม (สกิล 2) เพื่อล้างสถานะและเอาเกราะ"
    },
    {
        id: 77, name: "Vale", role: "Mage", image: "img/vale.jpg",
        winRate: 49.93,
        weakAgainst: [
            { name: "Kadita", reason: "Vale แพ้เพราะ Kadita มุดหลบสกิลได้" },
            { name: "Lancelot", reason: "Vale แพ้เพราะ Lancelot หลบสกิลได้ง่าย" },
            { name: "Chou", reason: "Vale แพ้เพราะโดน Chou เตะ" },
            { name: "Saber", reason: "Vale แพ้เพราะโดน Saber ล้วง" },
            { name: "Ling", reason: "Vale แพ้เพราะโดน Ling ล้วง" }
        ],
        tips: "อัปเกรดสกิลตามสถานการณ์ (สีฟ้า=CC ยก, สีเหลือง=แรง)"
    },
    {
        id: 50, name: "Vexana", role: "Mage", image: "img/vexana.jpg",
        winRate: 51.30,
        weakAgainst: [
            { name: "Hanabi", reason: "Vexana แพ้เพราะ Hanabi มีโล่กัน CC " },
            { name: "Joy", reason: "Vexana แพ้เพราะ Joy พริ้วเกินกว่าจะสกิลโดน" },
            { name: "Fanny", reason: "Vexana แพ้เพราะโดน Fanny ล้วงตายไว" },
            { name: "Ling", reason: "Vexana แพ้เพราะโดน Ling ล้วง" },
            { name: "Lancelot", reason: "Vexana แพ้เพราะ Lancelot หลบสกิลได้" }
        ],
        tips: "ใช้อัลติเรียกร่างยักษ์มาช่วยแทงค์ป้อมได้"
    },
    {
        id: 105, name: "Harley", role: "Mage", image: "img/harley.jpg",
        winRate: 48.06,
        weakAgainst: [
            { name: "Saber", reason: "Harley แพ้เพราะโดน Saber ดักรอวาร์ปกลับหมวก" },
            { name: "Kaja", reason: "Harley แพ้เพราะโดน Kaja ล็อคตอนเข้ามา" },
            { name: "Lolita", reason: "Harley แพ้เพราะ Lolita บล็อคไพ่ได้หมด" },
            { name: "Radiant Armor", reason: "Harley แพ้ไอเทมนี้ ยิงไม่เข้า" },
            { name: "Hayabusa", reason: "Harley แพ้เพราะ Hayabusa หลบอัลติได้" }
        ],
        tips: "ปาไพ่ให้โดนหลังใส่วงแหวนไฟ (Ulti) เพื่อสะสมดาเมจระเบิด"
    },
    {
        id: 30, name: "Gord", role: "Mage", image: "img/gord.jpg",
        winRate: 52.09,
        weakAgainst: [
            { name: "Franco", reason: "Gord แพ้เพราะยืนนิ่งๆ โดนดึงง่าย" },
            { name: "Natalia", reason: "Gord แพ้เพราะโดน Natalia ล้วงตาย" },
            { name: "Ling", reason: "Gord แพ้เพราะโดน Ling ล้วง" },
            { name: "Fanny", reason: "Gord แพ้เพราะโดน Fanny ล้วง" },
            { name: "Kaja", reason: "Gord แพ้เพราะโดน Kaja แฟลชมาดึง" }
        ],
        tips: "ยืนหลัง Tank เสมอ และใช้สกิล 1 สตั๊นให้โดนก่อนพ่นเลเซอร์"
    },
    {
        id: 65, name: "Xavier", role: "Mage", image: "img/xavier.jpg",
        winRate: 50.56,
        weakAgainst: [
            { name: "Ling", reason: "Xavier แพ้เพราะโดน Ling ล้วง" },
            { name: "Fanny", reason: "Xavier แพ้เพราะโดน Fanny ล้วง" },
            { name: "Joy", reason: "Xavier แพ้เพราะสกิลใส่ Joy ยาก" },
            { name: "Hayabusa", reason: "Xavier แพ้เพราะโดน Hayabusa ล้วง" },
            { name: "Lancelot", reason: "Xavier แพ้เพราะ Lancelot เข้าถึงตัวไว" }
        ],
        tips: "ยิงสกิลให้โดนเพื่อเก็บ Stack จะยิงไกลขึ้นและแรงขึ้น"
    },
    {
        id: 92, name: "Lunox", role: "Mage", image: "img/lunox.jpg",
        winRate: 48.97,
        weakAgainst: [
            { name: "Khufra", reason: "Lunox แพ้เพราะพุ่งติดบอล Khufra" },
            { name: "Kaja", reason: "Lunox แพ้เพราะโดน Kaja ล็อคตาย" },
            { name: "Franco", reason: "Lunox แพ้เพราะโดน Franco ล็อค" },
            { name: "Minsitthar", reason: "Lunox แพ้เพราะพุ่งไม่ได้ในวง" },
            { name: "Saber", reason: "Lunox แพ้เพราะโดน Saber ล็อคก่อนกดอมตะ" }
        ],
        tips: "เลี้ยงหลอดแสง/มืด ให้เหลือ 1 ช่อง เพื่อสลับร่างได้ทันทีตามสถานการณ์"
    },
    {
        id: 60, name: "Alice", role: "Mage/Tank", image: "img/alice.jpg",
        winRate: 50.66,
        weakAgainst: [
            { name: "Baxia", reason: "Alice แพ้เพราะโดน Baxia ตัดเลือด ดูดเลือดไม่ขึ้น" },
            { name: "Karrie", reason: "Alice แพ้เพราะโดน Karrie ละลายเลือด" },
            { name: "Valir", reason: "Alice แพ้เพราะเข้าไม่ถึงตัว Valir" },
            { name: "Alpha", reason: "Alice แพ้เพราะโดน Alpha ตี True Damage" },
            { name: "Sea Halberd", reason: "Alice แพ้ไอเทมตัดเลือดทุกชนิด" }
        ],
        tips: "ฟาร์มครีปให้ได้ 50 ตัวแรกไวๆ เพื่อปลดล็อคสเตตัส"
    },
    {
        id: 95, name: "Aurora", role: "Mage", image: "img/aurora.jpg",
        winRate: 48.54,
        weakAgainst: [
            { name: "Lancelot", reason: "Aurora แพ้เพราะ Lancelot หลบสกิลได้" },
            { name: "Helcurt", reason: "Aurora แพ้เพราะโดนใบ้" },
            { name: "Diggie", reason: "Aurora แพ้เพราะ Diggie ล้างแช่แข็งได้" },
            { name: "Wanwan", reason: "Aurora แพ้เพราะ Wanwan ล้างแช่แข็งได้" },
            { name: "Kaja", reason: "Aurora แพ้เพราะโดนล็อคตาย" }
        ],
        tips: "เก็บ Stack ให้แดง (เต็ม) ก่อนเข้าไฟต์เสมอ เพื่อให้สกิลแช่แข็งทำงาน"
    },
    {
        id: 131, name: "Valentina", role: "Mage", image: "img/valentina.jpg",
        winRate: 40.71,
        weakAgainst: [
            { name: "Wanwan", reason: "Valentina แพ้เพราะก็อปอัลติ Wanwan มาใช้ยากมาก" },
            { name: "Popol & Kupa", reason: "Valentina แพ้เพราะก็อปอัลติ Popol มาแปลงร่างเป็นหมาไม่ได้" },
            { name: "Gusion", reason: "Valentina แพ้เพราะก็อปอัลติ Gusion มาคอมโบยาก" },
            { name: "Valir", reason: "Valentina แพ้เพราะโดน Valir ผลัก" },
            { name: "Kaja", reason: "Valentina แพ้เพราะโดน Kaja ล็อค" }
        ],
        tips: "เลือกก็อปอัลติพวก Tank/Mage ที่เปิดไฟต์แรงๆ (Atlas/Faramis)"
    },
    {
        id: 32, name: "Zetian", role: "Mage", image: "img/zetian.jpg",
        winRate: 52.06,
        weakAgainst: [
            { name: "Ling", reason: "Zetian แพ้เพราะ Ling เข้าถึงตัวง่าย" },
            { name: "Fanny", reason: "Zetian แพ้เพราะหยุด Fanny ไม่ได้" },
            { name: "Joy", reason: "Zetian แพ้เพราะ Joy พริ้วเกินจับ" },
            { name: "Helcurt", reason: "Zetian แพ้เพราะโดนใบ้" },
            { name: "Hayabusa", reason: "Zetian แพ้เพราะ Hayabusa ล้วงง่าย" }
        ],
        tips: "ควบคุมพื้นที่ไฟต์ด้วยสกิลจักรพรรดินี"
    },

    // --- MARKSMAN ---
    {
        id: 7, name: "Melissa", role: "Marksman", image: "img/melissa.jpg",
        winRate: 53.91,
        weakAgainst: [
            { name: "Yve", reason: "Melissa แพ้เพราะ Yve ยิงจากนอกโดม " },
            { name: "Pharsa", reason: "Melissa แพ้เพราะ Pharsa ระเบิดจากนอกโดม " },
            { name: "Lylia", reason: "Melissa แพ้เพราะ Lylia สแปมระเบิดใส่ " },
            { name: "Franco", reason: "Melissa แพ้เพราะโดนดึงทะลุโดม" },
            { name: "Kaja", reason: "Melissa แพ้เพราะโดนดึงทะลุโดม" }
        ],
        tips: "กางอัลติเพื่อกันพวกตัวล้วงระยะประชิด (Fighter/Assassin) แต่อย่าประมาทพวก Mage ระยะไกล"
    },
    {
        id: 6, name: "Hanabi", role: "Marksman", image: "img/hanabi.jpg",
        winRate: 54.05,
        weakAgainst: [
            { name: "Bruno", reason: "Hanabi แพ้เพราะ Bruno ดาเมจแรงกว่า" },
            { name: "Lesley", reason: "Hanabi แพ้เพราะ Lesley ยิง True Damage ทะลุโล่" },
            { name: "Layla", reason: "Hanabi แพ้เพราะ Layla ยิงไกลกว่ามาก" },
            { name: "Irithel", reason: "Hanabi แพ้เพราะ Irithel ระเบิดดาเมจแรงกว่า" },
            { name: "Fanny", reason: "Hanabi แพ้เพราะโดน Fanny ล้วงตาย" }
        ],
        tips: "รักษาโล่ (Passive) ไว้ตลอด เพื่อกันสถานะผิดปกติ"
    },
    {
        id: 9, name: "Karrie", role: "Marksman", image: "img/karrie.jpg",
        winRate: 53.76,
        weakAgainst: [
            { name: "Pharsa", reason: "Karrie แพ้เพราะระยะยิงสั้น เข้าไม่ถึง Pharsa" },
            { name: "Layla", reason: "Karrie แพ้เพราะโดน Layla ยิงฟรี" },
            { name: "Lesley", reason: "Karrie แพ้เพราะโดน Lesley ยิงตอดตาย" },
            { name: "Eudora", reason: "Karrie แพ้เพราะโดน Eudora เบิร์สหาย" },
            { name: "Lunox", reason: "Karrie แพ้เพราะโดน Lunox ยิงตายไว" }
        ],
        tips: "เป็นตัวฆ่า Tank เบอร์ 1 ยิ่งศัตรูเลือดเยอะยิ่งยิงแรง (True Damage)"
    },
    {
        id: 25, name: "Popol & Kupa", role: "Marksman", image: "img/popol.jpg",
        winRate: 52.61,
        weakAgainst: [
            { name: "Hanabi", reason: "Popol แพ้เพราะ Hanabi ยิงชิ่งหมาโดนคน" },
            { name: "Faramis", reason: "Popol แพ้เพราะ Faramis ยิงชิ่งหมาแรงมาก" },
            { name: "Luo Yi", reason: "Popol แพ้เพราะโดนดูดหมาชนคน" },
            { name: "Gloo", reason: "Popol แพ้เพราะ Gloo เหยียบหมามาหาคน" },
            { name: "Fanny", reason: "Popol แพ้เพราะโดน Fanny ล้วง" }
        ],
        tips: "ถ้าหมาตาย Popol จะอ่อนแอมาก รีบเรียกหมาใหม่ทันที"
    },
    {
        id: 10, name: "Irithel", role: "Marksman", image: "img/irithel.jpg",
        winRate: 53.67,
        weakAgainst: [
            { name: "Brody", reason: "Irithel แพ้เพราะ Brody ยิงแรงกว่าต้นเกม" },
            { name: "Clint", reason: "Irithel แพ้เพราะ Clint ยิงไกลและแรงกว่า" },
            { name: "Popol & Kupa", reason: "Irithel แพ้เพราะโดนหมากัดเดินไม่ออก" },
            { name: "Belerick", reason: "Irithel แพ้เพราะยิง Belerick แล้วเจ็บเอง" },
            { name: "Lesley", reason: "Irithel แพ้เพราะโดน Lesley ยิงตอดฟรี" }
        ],
        tips: "เดินยิงได้ (Shoot while moving) ใช้ความพริ้วไคท์ศัตรู"
    },
    {
        id: 96, name: "Wanwan", role: "Marksman", image: "img/wanwan.jpg",
        winRate: 48.49,
        weakAgainst: [
            { name: "Kaja", reason: "Wanwan แพ้เพราะโดน Kaja ล็อคตาย " },
            { name: "Phoveus", reason: "Wanwan แพ้เพราะโดดแล้วโดน Phoveus ทุบ" },
            { name: "Khufra", reason: "Wanwan แพ้เพราะโดดติดบอล Khufra" },
            { name: "Minsitthar", reason: "Wanwan แพ้เพราะโดดไม่ได้ในวง" },
            { name: "Franco", reason: "Wanwan แพ้เพราะโดน Franco ล็อค" }
        ],
        tips: "โจมตีจุดอ่อนให้ครบ 4 จุดเพื่อเปิดอัลติ (บิน)"
    },
    {
        id: 68, name: "Claude", role: "Marksman", image: "img/claude.jpg",
        winRate: 50.45,
        weakAgainst: [
            { name: "Kaja", reason: "Claude แพ้เพราะโดน Kaja ดึงตอนอัลติ " },
            { name: "Belerick", reason: "Claude แพ้เพราะหมุนใส่ Belerick แล้วตายเอง" },
            { name: "Lesley", reason: "Claude แพ้เพราะโดน Lesley ยิง 2 ทีร่วง" },
            { name: "Saber", reason: "Claude แพ้เพราะโดน Saber ล็อคตาย" },
            { name: "Melissa", reason: "Claude แพ้เพราะเข้าประชิด Melissa ไม่ได้" }
        ],
        tips: "รักษา Stack ลิงให้เต็ม 5 ก่อนเข้าไฟต์เสมอ"
    },
    {
        id: 108, name: "Layla", role: "Marksman", image: "img/layla.jpg",
        winRate: 47.70,
        weakAgainst: [
            { name: "Natalia", reason: "Layla แพ้เพราะไม่มีสกิลหนี โดนล้วงตายง่าย" },
            { name: "Lancelot", reason: "Layla แพ้เพราะ Lancelot เข้าถึงตัวไว" },
            { name: "Hayabusa", reason: "Layla แพ้เพราะ Hayabusa ล้วงง่าย" },
            { name: "Johnson", reason: "Layla แพ้เพราะโดนชนตายคาที่" },
            { name: "Fanny", reason: "Layla แพ้เพราะเป็นเป้านิ่งให้ Fanny" }
        ],
        tips: "ฟาร์มให้ไวที่สุด ยืนให้ไกลที่สุด (ท้ายเกมยิงแรงมาก)"
    },
    {
        id: 130, name: "Granger", role: "Marksman", image: "img/granger.jpg",
        winRate: 41.34,
        weakAgainst: [
            { name: "Ling", reason: "Granger แพ้เพราะ Ling หลบกระสุนง่าย" },
            { name: "Fanny", reason: "Granger แพ้เพราะเล็งกระสุนใส่ Fanny ยาก" },
            { name: "Lolita", reason: "Granger แพ้เพราะ Lolita บล็อคกระสุนหมด" },
            { name: "Gloo", reason: "Granger แพ้เพราะยิงติด Gloo ตัวหน้า" },
            { name: "Aamon", reason: "Granger แพ้เพราะ Aamon หายตัวหลบกระสุน " }
        ],
        tips: "ยิงกระสุนนัดสุดท้าย (สีแดง) ให้โดน จะติดคริรุนแรง"
    },
    {
        id: 29, name: "Natan", role: "Marksman", image: "img/natan.jpg",
        winRate: 52.12,
        weakAgainst: [
            { name: "Radiant Armor", reason: "Natan แพ้ไอเทมนี้ ยิงไม่เข้า" },
            { name: "Lolita", reason: "Natan แพ้เพราะ Lolita บล็อคกระสุนได้" },
            { name: "Kaja", reason: "Natan แพ้เพราะโดน Kaja ล็อคตาย" },
            { name: "Eudora", reason: "Natan แพ้เพราะโดนเบิร์สชุดเดียว" },
            { name: "Saber", reason: "Natan แพ้เพราะโดน Saber ล็อค" }
        ],
        tips: "เก็บ Stack ให้เต็มเพื่อความเร็วโจมตีสูงสุด"
    },
    {
        id: 36, name: "Brody", role: "Marksman", image: "img/brody.jpg",
        winRate: 51.79,
        weakAgainst: [
            { name: "Sun", reason: "Brody แพ้เพราะล็อคเป้าผิดไปโดนร่างปลอม Sun " },
            { name: "Popol & Kupa", reason: "Brody แพ้เพราะล็อคเป้าโดนหมา" },
            { name: "Gloo", reason: "Brody แพ้เพราะล็อคเป้าโดนร่างแยก Gloo" },
            { name: "Natalia", reason: "Brody แพ้เพราะโดนใบ้ กดสกิลไม่ได้" },
            { name: "Ling", reason: "Brody แพ้เพราะ Ling หลบอัลติได้" }
        ],
        tips: "มาร์คศัตรูให้ครบ 4 stack แล้วกดอัลติ จะแรงที่สุด"
    },
    {
        id: 38, name: "Clint", role: "Marksman", image: "img/clint.jpg",
        winRate: 51.76,
        weakAgainst: [
            { name: "Lancelot", reason: "Clint แพ้เพราะ Lancelot หลบสกิลได้" },
            { name: "Ling", reason: "Clint แพ้เพราะ Ling ล้วงไว" },
            { name: "Hayabusa", reason: "Clint แพ้เพราะ Hayabusa หลบสกิลได้" },
            { name: "Lolita", reason: "Clint แพ้เพราะ Lolita บล็อคกระสุน" },
            { name: "Belerick", reason: "Clint แพ้เพราะยิงแรงแต่เจ็บเอง" }
        ],
        tips: "กดสกิลแล้วยิงธรรมดาตามทันที (Passive) เพื่อระยะยิงที่ไกลขึ้น"
    },
    {
        id: 88, name: "Beatrix", role: "Marksman", image: "img/beatrix.jpg",
        winRate: 49.32,
        weakAgainst: [
            { name: "Lancelot", reason: "Beatrix แพ้เพราะเล็งโดนยาก" },
            { name: "Fanny", reason: "Beatrix แพ้เพราะ Fanny ไวเกินเล็ง" },
            { name: "Natalia", reason: "Beatrix แพ้เพราะโดนล้วงตายง่าย" },
            { name: "Johnson", reason: "Beatrix แพ้เพราะโดนชนตาย" },
            { name: "Clint", reason: "Beatrix แพ้เพราะ Clint ยิงตอดแรงกว่า" }
        ],
        tips: "เลือกปืนให้ถูกสถานการณ์ (สไนเปอร์=ไกล, ลูกซอง=ใกล้, กล=รัว)"
    },
    {
        id: 44, name: "Moskov", role: "Marksman", image: "img/moskov.jpg",
        winRate: 51.58,
        weakAgainst: [
            { name: "Eudora", reason: "Moskov แพ้เพราะระยะสั้น โดนสตั๊นง่าย" },
            { name: "Saber", reason: "Moskov แพ้เพราะโดนล็อคตาย" },
            { name: "Kaja", reason: "Moskov แพ้เพราะโดนดึง" },
            { name: "Belerick", reason: "Moskov แพ้เพราะตีรัวแล้วตายเอง" },
            { name: "Blade Armor", reason: "Moskov แพ้ไอเทมนี้" }
        ],
        tips: "หามุมปักศัตรูเข้ากำแพง จะสตั๊นนานมาก"
    },
    {
        id: 73, name: "Bruno", role: "Marksman", image: "img/bruno.jpg",
        winRate: 50.15,
        weakAgainst: [
            { name: "Kaja", reason: "Bruno แพ้เพราะโดนดึง" },
            { name: "Franco", reason: "Bruno แพ้เพราะโดนดึง" },
            { name: "Natalia", reason: "Bruno แพ้เพราะโดนล้วง" },
            { name: "Saber", reason: "Bruno แพ้เพราะโดนล็อค" },
            { name: "Blade Armor", reason: "Bruno แพ้เพราะตีแรงสะท้อนแรง" }
        ],
        tips: "เลี้ยงลูกบอลให้ดี อย่าให้ตกพื้น จะยิงแรงและคริตลอด"
    },
    {
        id: 22, name: "Miya", role: "Marksman", image: "img/miya.jpg",
        winRate: 52.74,
        weakAgainst: [
            { name: "Kaja", reason: "Miya แพ้เพราะล้างสถานะดึงไม่ได้" },
            { name: "Saber", reason: "Miya แพ้เพราะโดนล็อคก่อนกดอัลติ" },
            { name: "Natalia", reason: "Miya แพ้เพราะโดนล้วง" },
            { name: "Hayabusa", reason: "Miya แพ้เพราะ Hayabusa ตามทัน" },
            { name: "Chou", reason: "Miya แพ้เพราะโดนเตะ" }
        ],
        tips: "เก็บอัลติไว้ใช้หนี CC เท่านั้น อย่าใช้เปิดเพื่อวิ่งเข้าหาศัตรู"
    },
    {
        id: 74, name: "Roger", role: "Marksman/Fighter", image: "img/roger.jpg",
        winRate: 50.04,
        weakAgainst: [
            { name: "Alucard", reason: "Roger แพ้เพราะ Alucard ดูดเลือดแรงกว่า" },
            { name: "Thamuz", reason: "Roger แพ้เพราะ Thamuz ถึกและสวนแรง" },
            { name: "Gusion", reason: "Roger แพ้เพราะโดนเบิร์สไว" },
            { name: "Saber", reason: "Roger แพ้เพราะโดนล็อค" },
            { name: "Kaja", reason: "Roger แพ้เพราะโดนดึง" }
        ],
        tips: "ใช้ร่างคนตอดเลือดก่อน แล้วใช้ร่างหมาป่าเข้าปิดงาน"
    },
    {
        id: 82, name: "Lesley", role: "Marksman", image: "img/lesley.jpg",
        winRate: 49.54,
        weakAgainst: [
            { name: "Harley", reason: "Lesley แพ้เพราะ Harley ล้วงง่าย" },
            { name: "Natalia", reason: "Lesley แพ้เพราะ Natalia ล้วงง่าย" },
            { name: "Fanny", reason: "Lesley แพ้เพราะ Fanny ล้วงง่าย" },
            { name: "Ling", reason: "Lesley แพ้เพราะ Ling ล้วงง่าย" },
            { name: "Clint", reason: "Lesley แพ้เพราะ Clint เบิร์สแรงกว่า" }
        ],
        tips: "ยิงแล้วถอย (Hit & Run) เพื่อรอ Passive รีชาร์จ"
    },
    {
        id: 100, name: "Kimmy", role: "Marksman", image: "img/kimmy.jpg",
        winRate: 48.34,
        weakAgainst: [
            { name: "Lolita", reason: "Kimmy แพ้เพราะโดนบล็อคกระสุน" },
            { name: "Ling", reason: "Kimmy แพ้เพราะโดนล้วง" },
            { name: "Fanny", reason: "Kimmy แพ้เพราะโดนล้วง" },
            { name: "Gusion", reason: "Kimmy แพ้เพราะโดนเบิร์ส" },
            { name: "Lancelot", reason: "Kimmy แพ้เพราะเล็งยาก" }
        ],
        tips: "รักษาระยะยิงให้ดี Kimmy ยิงไปเดินไปได้อิสระ"
    },
    {
        id: 63, name: "Yi Sun-shin", role: "Marksman/Assassin", image: "img/yss.jpg",
        winRate: 50.57,
        weakAgainst: [
            { name: "Kaja", reason: "YSS แพ้เพราะโดนดึง (ล้างไม่ได้)" },
            { name: "Franco", reason: "YSS แพ้เพราะโดนล็อค" },
            { name: "Natalia", reason: "YSS แพ้เพราะโดนล้วง" },
            { name: "Hayabusa", reason: "YSS แพ้เพราะสู้ 1-1 ยาก" },
            { name: "Lancelot", reason: "YSS แพ้เพราะ Lancelot ไวกว่า" }
        ],
        tips: "สลับตีไกล/ตีใกล้ เพื่อให้ Passive ติดคริติคอลตลอดเวลา"
    },
    {
        id: 14, name: "Ixia", role: "Marksman", image: "img/ixia.jpg",
        winRate: 53.26,
        weakAgainst: [
            { name: "Melissa", reason: "Ixia แพ้เพราะโดน Melissa ขัดจังหวะ " },
            { name: "Tigreal", reason: "Ixia แพ้เพราะโดน Tigreal ดันขัดอัลติ" },
            { name: "Franco", reason: "Ixia แพ้เพราะยืนนิ่งให้ดึง" },
            { name: "Kaja", reason: "Ixia แพ้เพราะยืนนิ่งให้ดึง" },
            { name: "Kadita", reason: "Ixia แพ้เพราะโดน Kadita ล้วงง่าย" }
        ],
        tips: "หาทำเลดีๆ ก่อนกางอัลติ เพราะจะขยับตัวไม่ได้"
    },
    {
        id: 45, name: "Obsidia", role: "Marksman", image: "img/obsidia.jpg",
        winRate: 51.57,
        weakAgainst: [
            { name: "Rafaela", reason: "Obsidia แพ้เพราะโดนเปิด Vision" },
            { name: "Yi Sun-shin", reason: "Obsidia แพ้เพราะโดนเปิด Vision" },
            { name: "Kaja", reason: "Obsidia แพ้เพราะโดนล็อค" },
            { name: "Franco", reason: "Obsidia แพ้เพราะโดนล็อค" },
            { name: "Saber", reason: "Obsidia แพ้เพราะโดนล็อค" }
        ],
        tips: "ใช้เงามืดพรางตัวเพื่อเพิ่มดาเมจคริติคอล"
    },

    // --- SUPPORT ---
    {
        id: 12, name: "Floryn", role: "Support", image: "img/floryn.jpg",
        winRate: 53.40,
        weakAgainst: [
            { name: "Natalia", reason: "Floryn แพ้เพราะตัวบางและไม่มีสกิลหนี โดน Natalia ล้วงตายง่ายมาก" },
            { name: "Ling", reason: "Floryn แพ้เพราะ Ling เข้าถึงตัวได้ไวและเบิร์ส Floryn ตายก่อนจะได้ฮีล" },
            { name: "Chou", reason: "Floryn แพ้เพราะโดน Chou เตะแยกออกจากเพื่อน ทำให้ช่วยเหลือทีมไม่ได้" },
            { name: "Baxia", reason: "Floryn แพ้เพราะ Baxia ตัดเลือดทีม Floryn ทำให้ฮีลเบาลงอย่างมาก" },
            { name: "Luo Yi", reason: "Floryn แพ้เพราะชอบยืนเกาะกลุ่มกับเพื่อน โดน Luo Yi คอมโบกระจายดาเมจเจ็บทั้งทีม" }
        ],
        tips: "มอบดอกไม้ให้ตัวแบก (Core) ของทีม เพื่อเพิ่มดาเมจและกันสถานะ"
    },
    {
        id: 37, name: "Carmilla", role: "Support", image: "img/carmilla.jpg",
        winRate: 51.78,
        weakAgainst: [
            { name: "Karrie", reason: "Carmilla แพ้เพราะโดน Karrie ยิงละลาย " },
            { name: "Diggie", reason: "Carmilla แพ้เพราะ Diggie ล้างสโลว์และอัลติได้" },
            { name: "Valentina", reason: "Carmilla แพ้เพราะ Valentina ก็อปอัลติไปใช้คืน" },
            { name: "Valir", reason: "Carmilla แพ้เพราะเข้าไม่ถึงตัว Valir" },
            { name: "Wanwan", reason: "Carmilla แพ้เพราะ Wanwan ล้างสถานะได้" }
        ],
        tips: "รอเพื่อนที่มีดาเมจวงกว้าง (AOE) แล้วค่อยกดอัลติเชื่อมศัตรู"
    },
    {
        id: 4, name: "Diggie", role: "Support", image: "img/diggie.jpg",
        winRate: 54.96,
        weakAgainst: [
            { name: "Sun", reason: "Diggie แพ้เพราะโดนร่างปลอม Sun รุมทุบตายไวมาก " },
            { name: "Natalia", reason: "Diggie แพ้เพราะโดน Natalia ล้วงตายง่าย" },
            { name: "Hilda", reason: "Diggie แพ้เพราะโดน Hilda ดักทุบในพุ่ม" },
            { name: "Aldous", reason: "Diggie แพ้เพราะโดน Aldous ทุบทีเดียวแตก" },
            { name: "Ling", reason: "Diggie แพ้เพราะโดน Ling ล้วงง่าย" }
        ],
        tips: "เก็บอัลติไว้ใช้แก้ทาง CC หมู่ (Atlas/Tigreal/Guinevere) เท่านั้น"
    },
    {
        id: 135, name: "Estes", role: "Support", image: "img/estes.jpg",
        winRate: 53.36,
        weakAgainst: [
            { name: "Luo Yi", reason: "Estes แพ้เพราะยืนกระจุกกัน โดน Luo Yi ระเบิดตายหมู่" },
            { name: "Baxia", reason: "Estes แพ้เพราะโดน Baxia ตัดเลือด ฮีลไม่ขึ้น" },
            { name: "Atlas", reason: "Estes แพ้เพราะโดน Atlas รวบยกทีม" },
            { name: "Tigreal", reason: "Estes แพ้เพราะโดน Tigreal รวบยกทีม" },
            { name: "Akai", reason: "Estes แพ้เพราะโดน Akai ปั่นแยกออกจากเพื่อน" }
        ],
        tips: "ถ้าอีกฝั่งออกของตัดเลือด (Dominance Ice) ให้ระวังเป็นพิเศษ"
    },
    {
        id: 58, name: "Faramis", role: "Support", image: "img/faramis.jpg",
        winRate: 50.71,
        weakAgainst: [
            { name: "Valentina", reason: "Faramis แพ้เพราะ Valentina ก็อปอัลติไปใช้ดีกว่า" },
            { name: "Akai", reason: "Faramis แพ้เพราะโดน Akai ปั่นออกจากวงอัลติ" },
            { name: "Valir", reason: "Faramis แพ้เพราะโดน Valir ผลักออกจากเพื่อน" },
            { name: "Yin", reason: "Faramis แพ้เพราะ Yin ลากเพื่อนไปฆ่านอกวง" },
            { name: "Chou", reason: "Faramis แพ้เพราะโดน Chou เตะเพื่อนออกจากวง" }
        ],
        tips: "กดอัลติเมื่อเพื่อนใกล้ตายหรือกำลังจะโดนคอมโบใหญ่"
    },
    {
        id: 126, name: "Mathilda", role: "Support", image: "img/mathilda.jpg",
        winRate: 44.10,
        weakAgainst: [
            { name: "Irithel", reason: "Mathilda แพ้เพราะโดน Irithel ยิงร่วงตอนบิน " },
            { name: "Wanwan", reason: "Mathilda แพ้เพราะ Wanwan สวนตอนบินเข้ามาได้" },
            { name: "Kaja", reason: "Mathilda แพ้เพราะโดน Kaja ล็อคตอนบิน" },
            { name: "Franco", reason: "Mathilda แพ้เพราะโดน Franco ดึง" },
            { name: "Minsitthar", reason: "Mathilda แพ้เพราะบินไม่ได้ในวง" }
        ],
        tips: "ให้เพื่อนกดโล่ (Skill 2) เพื่อพุ่งหนีออกจากวงล้อม"
    },
    {
        id: 16, name: "Rafaela", role: "Support", image: "img/rafaela.jpg",
        winRate: 53.21,
        weakAgainst: [
            { name: "Ling", reason: "Rafaela แพ้เพราะโดน Ling ล้วงง่าย" },
            { name: "Fanny", reason: "Rafaela แพ้เพราะโดน Fanny ล้วงง่าย" },
            { name: "Saber", reason: "Rafaela แพ้เพราะโดน Saber ล็อคตาย" },
            { name: "Natalia", reason: "Rafaela แพ้เพราะโดนล้วงตายก่อนได้ฮีล" },
            { name: "Chou", reason: "Rafaela แพ้เพราะโดน Chou เตะ" }
        ],
        tips: "ใช้สกิล 1 เช็คพุ่มไม้ได้ ถ้ามีศัตรูจะสโลว์"
    },
    {
        id: 66, name: "Angela", role: "Support", image: "img/angela.jpg",
        winRate: 50.56,
        weakAgainst: [
            { name: "Natalia", reason: "Angela แพ้เพราะโดนล้วงตายง่าย" },
            { name: "Saber", reason: "Angela แพ้เพราะโดน Saber ล็อคตาย" },
            { name: "Fanny", reason: "Angela แพ้เพราะหนี Fanny ไม่ทัน" },
            { name: "Ling", reason: "Angela แพ้เพราะโดน Ling ล้วง" },
            { name: "Chou", reason: "Angela แพ้เพราะโดน Chou เตะ" }
        ],
        tips: "ดูแมพตลอดเวลา เตรียมกดอัลติช่วยเพื่อนที่กำลังบวก"
    },
    {
        id: 119, name: "Kalea", role: "Support", image: "img/kalea.jpg",
        winRate: 46.09,
        weakAgainst: [
            { name: "Baxia", reason: "Kalea แพ้เพราะโดนตัดเลือด" },
            { name: "Saber", reason: "Kalea แพ้เพราะโดนล็อคตาย" },
            { name: "Natalia", reason: "Kalea แพ้เพราะโดนล้วง" },
            { name: "Ling", reason: "Kalea แพ้เพราะโดนล้วง" },
            { name: "Kaja", reason: "Kalea แพ้เพราะโดนดึง" }
        ],
        tips: "เกาะติดเพื่อนไว้เสมอ อย่าเดินคนเดียว"
    },
// --- เพิ่มเติม 6 ตัวที่หายไป ---
    {
        id: 137, name: "Argus", role: "Fighter", image: "img/argus.jpg",
        winRate: 51.20,
        weakAgainst: [
            { name: "Valir", reason: "Argus แพ้เพราะโดน Valir ผลักออกตอนเปิดอมตะ ทำให้เสียเวลาฟรี" },
            { name: "Akai", reason: "Argus แพ้เพราะโดน Akai ปั่นผลักออกไปในช่วงอมตะ" },
            { name: "Franco", reason: "Argus แพ้เพราะโดน Franco กดอัลติล็อคขาตายในช่วงอมตะ" },
            { name: "Baxia", reason: "Argus แพ้เพราะ Baxia ถึกและลดการดูดเลือดของ Argus" },
            { name: "Kaja", reason: "Argus แพ้เพราะโดน Kaja ดึงล็อคขาตายขยับไปไหนไม่ได้" }
        ],
        tips: "กดใช้อัลติเมื่อเลือดใกล้หมดเพื่อเปลี่ยนดาเมจที่ได้รับเป็นเลือด"
    },
    {
        id: 138, name: "Esmeralda", role: "Mage/Fighter", image: "img/esmeralda.jpg",
        winRate: 50.45,
        weakAgainst: [
            { name: "Baxia", reason: "Esmeralda แพ้เพราะ Baxia ตัดเลือดและกันดาเมจเวทย์ได้ดีมาก" },
            { name: "Karrie", reason: "Esmeralda แพ้เพราะโดน Karrie ยิง True Damage ทะลุเกราะขาว" },
            { name: "Valir", reason: "Esmeralda แพ้เพราะโดน Valir สโลว์และผลักจนเข้าไม่ถึงตัว" },
            { name: "Dyrroth", reason: "Esmeralda แพ้เพราะ Dyrroth ลดเกราะและเบิร์สดาเมจชุดเดียวร่วง" },
            { name: "Minsitthar", reason: "Esmeralda แพ้เพราะกดสกิลกระโดดไม่ได้ในวงของ Minsitthar" }
        ],
        tips: "เน้นกดสกิล 1 บ่อยๆ เพื่อดูดเกราะจากศัตรูมาเป็นของตัวเอง"
    },
    {
        id: 139, name: "Jawhead", role: "Fighter", image: "img/jawhead.jpg",
        winRate: 49.88,
        weakAgainst: [
            { name: "Valir", reason: "Jawhead แพ้เพราะเข้าไม่ถึงตัว Valir โดนผลักตลอดทาง" },
            { name: "Wanwan", reason: "Jawhead แพ้เพราะโดน Wanwan ไคท์และล้างสถานะงัดได้" },
            { name: "Karrie", reason: "Jawhead แพ้เพราะโดน Karrie ยิงละลายไวมากช่วงเลทเกม" },
            { name: "Baxia", reason: "Jawhead แพ้เพราะ Baxia ถึกเกินกว่าจะเบิร์สให้ตาย" },
            { name: "Martis", reason: "Jawhead แพ้เพราะ Martis มีกันสถานะตอนปั่น สวน Jawhead ได้" }
        ],
        tips: "ใช้สกิลโยนศัตรูเข้าหาเพื่อนหรือโยนเข้าป้อมเพื่อปิดคิล"
    },
    {
        id: 140, name: "Silvanna", role: "Fighter/Mage", image: "img/silvanna.jpg",
        winRate: 48.56,
        weakAgainst: [
            { name: "Diggie", reason: "Silvanna แพ้เพราะ Diggie ล้างสถานะขังในอัลติให้เพื่อนได้" },
            { name: "Valir", reason: "Silvanna แพ้เพราะโดนผลักออกจากวงอัลติของตัวเอง" },
            { name: "Akai", reason: "Silvanna แพ้เพราะโดน Akai ปั่นผลักกระเด็นหนี" },
            { name: "Khufra", reason: "Silvanna แพ้เพราะ Khufra ขัดจังหวะการพุ่งแทงได้ง่าย" },
            { name: "Helcurt", reason: "Silvanna แพ้เพราะโดน Helcurt ใบ้จนกดสกิลไม่ออก" }
        ],
        tips: "พุ่งเข้าหาเป้าหมายที่เป็น Mage หรือ Marksman แล้วกดอัลติขังเพื่อฆ่า"
    },
    {
        id: 141, name: "Paquito", role: "Fighter", image: "img/paquito.jpg",
        winRate: 49.12,
        weakAgainst: [
            { name: "Khufra", reason: "Paquito แพ้เพราะพุ่งติดบอล Khufra บ่อยมาก" },
            { name: "Minsitthar", reason: "Paquito แพ้เพราะกดสกิลพุ่งไม่ได้เลยในวงอัลติ" },
            { name: "Phoveus", reason: "Paquito แพ้เพราะทุกครั้งที่พุ่ง Phoveus จะทุบสวน (Hard Counter)" },
            { name: "Valir", reason: "Paquito แพ้เพราะเข้าประชิดไม่ได้ โดนผลักและสโลว์" },
            { name: "Franco", reason: "Paquito แพ้เพราะโดน Franco ล็อคตายก่อนได้ทำคอมโบ" }
        ],
        tips: "บริหาร Stack สีแดงให้ดี เพื่อออกสกิลได้ต่อเนื่องและแรงขึ้น"
    },
    {
        id: 142, name: "Nana", role: "Mage/Support", image: "img/nana.jpg",
        winRate: 52.33,
        weakAgainst: [
            { name: "Helcurt", reason: "Nana แพ้เพราะโดน Helcurt ใบ้และเบิร์สจนตายก่อนร่าง Passive ทำงาน" },
            { name: "Saber", reason: "Nana แพ้เพราะโดน Saber ยกชุดเดียวร่าง Passive หลุดทันที" },
            { name: "Natalia", reason: "Nana แพ้เพราะโดนล้วงเงียบๆ และใบ้จนกดสกิลหนีไม่ทัน" },
            { name: "Ling", reason: "Nana แพ้เพราะ Ling เข้าถึงตัวไวและตามฆ่าหลังร่าง Passive หมด" },
            { name: "Hayabusa", reason: "Nana แพ้เพราะ Hayabusa ล้วงฆ่าง่ายและหลบสกิลตุ๊กตาได้" }
        ],
        tips: "วางตุ๊กตา Molina ไว้ในพุ่มไม้หรือทางแคบเพื่อโซนพื้นที่"
    }
];
