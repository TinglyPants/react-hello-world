import "./index.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import NavBar from "./components/NavBar";
import Post from "./components/Post";

function App() {
    return (
        <div>
            <NavBar />
            <div className="bg-gray-primary grid grid-cols-5 h-[94vh]">
                <div className="bg-gray-primary col-span-1 h-[94vh] overflow-y-scroll no-scrollbar border-r-2 border-gray-secondary">
                    <p></p>
                </div>

                <div className="bg-gray-primary col-span-4 h-[94vh] overflow-y-scroll no-scrollbar">
                    <Post
                        url="https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        title="Cool city photo?"
                        caption="Took this yesterday"
                        author="Big Jimmy III"
                        authorUrl="https://images.pexels.com/photos/208984/pexels-photo-208984.jpeg?auto=compress&cs=tinysrgb&w=600"
                    />
                    <Post
                        url="https://images.pexels.com/photos/417344/pexels-photo-417344.jpeg?auto=compress&cs=tinysrgb&w=600"
                        title="Wowie boats"
                        caption="and a sunset i guess"
                        author="Mysterious Cameraman"
                        authorUrl="https://images.pexels.com/photos/598917/pexels-photo-598917.jpeg?auto=compress&cs=tinysrgb&w=600"
                    />
                    <Post
                        url="https://images.pexels.com/photos/699466/pexels-photo-699466.jpeg?auto=compress&cs=tinysrgb&w=600"
                        title="franse"
                        caption="i fell tower"
                        author="King Louis XVI"
                        authorUrl="https://hips.hearstapps.com/hmg-prod/images/gettyimages-167889617.jpg"
                    />
                    <Post
                        url="https://images.pexels.com/photos/3310691/pexels-photo-3310691.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        title="bananas"
                        caption="bananas"
                        author="Banana"
                        authorUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/640px-Banana-Single.jpg"
                    />
                    <Post
                        url="https://images.pexels.com/photos/2449600/pexels-photo-2449600.png?auto=compress&cs=tinysrgb&w=600"
                        title="Who is this guy"
                        caption="Why is he on my truck"
                        author="Angry White Man"
                        authorUrl="https://media.istockphoto.com/id/692619140/photo/old-man-with-an-evil-look.jpg?s=612x612&w=0&k=20&c=ME3_4hctc2Sp7wsPt7Xj3aS9SSnlQ_BOKzq3DHP5sNs="
                    />
                    <Post
                        url="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&w=600"
                        title="Someone find him"
                        caption="He stole my purse"
                        author="Kid named finger"
                        authorUrl="https://upload.wikimedia.org/wikipedia/en/e/ea/Mike_Ehrmantraut_BCS_S3.png"
                    />
                    <Post
                        url="https://images.pexels.com/photos/20327411/pexels-photo-20327411/free-photo-of-three-colours.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        title="This looks like inverse ikea"
                        caption="buy more furniture please"
                        author="IKEA"
                        authorUrl="https://pbs.twimg.com/media/GEHfZ-hX0AA8HoW.jpg"
                    />
                    <Post
                        url="https://images.pexels.com/photos/19990334/pexels-photo-19990334/free-photo-of-close-up-of-yellow-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        title="Nice flowers"
                        caption="I will feed them to my goat"
                        author="Goat Enthusiast"
                        authorUrl="https://images.newscientist.com/wp-content/uploads/2019/07/09172512/205582.jpg?crop=1:1,smart&width=1200&height=1200&upscale=true"
                    />
                    <Post
                        url="https://images.pexels.com/photos/2371016/pexels-photo-2371016.jpeg?auto=compress&cs=tinysrgb&w=600"
                        title="Bro turned on hitboxes"
                        caption="F3+B"
                        author="Steve"
                        authorUrl="https://cdna.artstation.com/p/assets/images/images/003/577/606/large/yiannis-avgoloupis-steve-s-head.jpg?1475190155"
                    />
                    <Post
                        url="https://media.istockphoto.com/id/1361394182/photo/funny-british-shorthair-cat-portrait-looking-shocked-or-surprised.jpg?s=612x612&w=0&k=20&c=6yvVxdufrNvkmc50nCLCd8OFGhoJd6vPTNotl90L-vo="
                        title="Surprising."
                        caption="I shall investigate further"
                        author="Sherlock Home"
                        authorUrl="https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg"
                    />
                    <Post
                        url="https://images.pexels.com/photos/406014/pexels-photo-406014.jpeg?auto=compress&cs=tinysrgb&w=600"
                        title="WHO ARE YOU!?"
                        caption="WHO SENT YOU???!"
                        author="FBI"
                        authorUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Seal_of_the_Federal_Bureau_of_Investigation.svg/1200px-Seal_of_the_Federal_Bureau_of_Investigation.svg.png"
                    />
                    <Post
                        url="https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&w=600"
                        title="Mr. Fletcher"
                        caption="Squirrel"
                        author="Justin Fletcher (Mr Tumble)"
                        authorUrl="https://i2-prod.mirror.co.uk/incoming/article31343246.ece/ALTERNATES/s1200c/2_Mr-Tumble-and-Friends.jpg"
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
