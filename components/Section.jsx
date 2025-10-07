export default function Section(){
    return (
        <main>
            <article className="journal-entry">
                <div className="main-image-container">
                    <img src="https://images.unsplash.com/photo-1526481280693-3bfa7568e0f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudCUyMGZ1amklMjBqYXBhbnxlbnwxfHx8fDE3NTU2ODg5Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="" className="main-image" />
                </div>

                <div className="info-container">
                    <img src="./images/location.png" alt="no image" className="marker" />
                    <span className="country">Honshu, Japan</span>
                    <a href="https://www.google.com/maps/place/Mount+Fuji/@35.3606233,138.7067638,14z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu&g_ep=EgoyMDI1MDgxNy4wIKXMDSoASAFQAw%3D%3D">View on google map</a>
                    <h2 className="entry-title">Mount Fuji</h2>
                    <p className="trip-dates">12 Jan 2021 - 24 Jan, 2021</p>
                    <p className="entry-text">Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists. It's an active volcano with incredible views and cultural significance. The climb to the summit is challenging but rewarding, offering breathtaking panoramic views of the surrounding landscape.</p>
                </div>
            </article>

            <article className="journal-entry">
                <div className="main-image-container">
                    <img src="https://images.unsplash.com/photo-1523059623039-a9ed027e7fad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzeWRuZXklMjBvcGVyYSUyMGhvdXNlfGVufDF8fHx8MTc1NTU5MzQxNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="" className="main-image" />
                </div>

                <div className="info-container">
                    <img src="./images/location.png" alt="no image" className="marker" />
                    <span className="country">Sydney, Australia</span>
                    <a href="https://www.google.com/maps/place/Sydney+Opera+House/@-33.8567844,151.2127218,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967!16zL20vMDZfbm0?entry=ttu&g_ep=EgoyMDI1MDgxNy4wIKXMDSoASAFQAw%3D%3D">View on google map</a>
                    <h2 className="entry-title">Sydney Opera House</h2>
                    <p className="trip-dates">27 May, 2021 - 8 Jun, 2021</p>
                    <p className="entry-text">The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the world's most famous and distinctive buildings. The building comprises multiple performance venues, which together host well over 1,500 performances annually, attended by more than 1.2 million people.</p>
                </div>
            </article>

            <article className="journal-entry">
                <div className="main-image-container">
                    <img src="https://images.unsplash.com/photo-1730392584485-91c8d395ac53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnZWlyYW5nZXJmam9yZCUyMG5vcndheXxlbnwxfHx8fDE3NTU2ODg5NDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="" className="main-image" />
                </div>

                <div className="info-container">
                    <img src="./images/location.png" alt="no image" className="marker" />
                    <span className="country">Geiranger, Norway</span>
                    <a href="https://www.google.com/maps/place/Geirangerfjord/@62.1047507,6.9098347,11z/data=!3m1!4b1!4m6!3m5!1s0x46169d427b268c51:0xb8c99540dcc397fe!8m2!3d62.101506!4d7.0940817!16zL20vMDZ4eXFi?entry=ttu&g_ep=EgoyMDI1MDgxNy4wIKXMDSoASAFQAw%3D%3D">View on google map</a>
                    <h2 className="entry-title">Geirangerfjord</h2>
                    <p className="trip-dates">01 Oct, 2021 - 18 Oct, 2021</p>
                    <p className="entry-text">The Geirangerfjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality. It is a 15-kilometre (9.3 mi) long branch off the Sunnylvsfjorden, which is a branch off the Storfjorden. The fjord is one of Norway's most visited</p>
                </div>
            </article>
        </main>
    )
}







// updated code afte learning props *************************************************
// Refere to Entry.jsx