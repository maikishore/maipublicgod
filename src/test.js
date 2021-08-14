import React from "react";
import ReactPlayer from "react-player";
import videotext from "./videovtt.vtt";

const vttext=[{'text': "I am very disappointed that I won't be", 'start': 0.0, 'duration': 5.25}, {'text': "able to celebrate Howard's", 'start': 4.02, 'duration': 3.569}, {'text': "accomplishment tonight me too but we'll", 'start': 5.25, 'duration': 4.5}, {'text': "see him tomorrow yes it's just that in", 'start': 7.589, 'duration': 4.201}, {'text': "all the years I've known him he's never", 'start': 9.75, 'duration': 3.96}, {'text': 'had the opportunity to receive my', 'start': 11.79, 'duration': 6.12}, {'text': 'admiration I was excited to see the look', 'start': 13.71, 'duration': 6.47}, {'text': 'on his face when it finally happened', 'start': 17.91, 'duration': 7.35}, {'text': "you're unbelievable I know all right", 'start': 20.18, 'duration': 7.15}, {'text': 'pictionary what are the teams how about', 'start': 25.26, 'duration': 3.269}, {'text': 'boys versus girls', 'start': 27.33, 'duration': 4.349}, {'text': 'oh that hardly seems fair yeah but I', 'start': 28.529, 'duration': 5.011}, {'text': "guess any team that I'm not on has a", 'start': 31.679, 'duration': 4.31}, {'text': 'decided disadvantage', 'start': 33.54, 'duration': 5.46}, {'text': 'once again unbelievable once again I', 'start': 35.989, 'duration': 9.48}, {'text': 'know all right round one here got it', 'start': 39.0, 'duration': 10.52}, {'text': 'okay ready', 'start': 45.469, 'duration': 4.051}, {'text': 'box window Batman Batman and Robin', 'start': 51.48, 'duration': 11.239}, {'text': 'Wonder Twins plus the monkey Wonder', 'start': 63.26, 'duration': 7.55}, {'text': 'Twins plus the monkey and Batman', 'start': 67.799, 'duration': 7.091}, {'text': 'gift present', 'start': 70.81, 'duration': 4.08}, {'text': 'how can you not get that what universe', 'start': 76.289, 'duration': 8.801}, {'text': "is that a present it's not a present its", 'start': 81.939, 'duration': 7.201}, {'text': "the present look there's you and me yes", 'start': 85.09, 'duration': 7.29}, {'text': "penny and Amy we're playing pictionary", 'start': 89.14, 'duration': 7.339}, {'text': 'in the present', 'start': 92.38, 'duration': 4.099}, {'text': "oh my god we're gonna kill them it's a", 'start': 97.829, 'duration': 11.85}, {'text': "core gluon plasma no it's asymptotically", 'start': 104.52, 'duration': 6.84}, {'text': "free Parton's inside a quark-gluon", 'start': 109.679, 'duration': 6.661}, {'text': "plasma nothing with quarks it's an", 'start': 111.36, 'duration': 6.27}, {'text': 'observational rebuttal of the lambda-cdm', 'start': 116.34, 'duration': 7.099}, {'text': 'model of the universe No', 'start': 117.63, 'duration': 5.809}, {'text': 'how could you miss that yeah hey if you', 'start': 128.22, 'duration': 4.08}, {'text': 'want someone to guess chocolate-chip', 'start': 130.89, 'duration': 3.33}, {'text': 'cookie you draw a glass of milk next to', 'start': 132.3, 'duration': 3.35}, {'text': 'it', 'start': 134.22, 'duration': 3.87}, {'text': 'penny got it yeah only after I', 'start': 135.65, 'duration': 4.83}, {'text': 'eliminated all the obvious answers', 'start': 138.09, 'duration': 5.84}, {'text': "you're welcome", 'start': 140.48, 'duration': 3.45}, {'text': 'sausage bratwurst', 'start': 146.16, 'duration': 8.65}, {'text': "I talk penny aren't you gonna draw", 'start': 149.74, 'duration': 7.41}, {'text': 'something relax we got time this is so', 'start': 154.81, 'duration': 12.45}, {'text': 'fun their solar system unidentified', 'start': 157.15, 'duration': 18.42}, {'text': 'flying liverwurst now soon come on', 'start': 167.26, 'duration': 13.07}, {'text': 'Leonard I am spoon-feeding this to you', 'start': 175.57, 'duration': 4.76}, {'text': "I don't know Casper the alcoholic goes", 'start': 184.01, 'duration': 7.699}, {'text': "alright that's enough", 'start': 191.95, 'duration': 3.509}, {'text': 'hands nail polish the word is polish', 'start': 196.849, 'duration': 14.761}, {'text': 'Polish sausage I think that model of the', 'start': 208.239, 'duration': 4.901}, {'text': 'solar system developed by Nicolaus', 'start': 211.61, 'duration': 5.219}, {'text': 'Copernicus a Polish astronomer finally', 'start': 213.14, 'duration': 4.98}, {'text': "that wasn't enough which it should have", 'start': 216.829, 'duration': 3.481}, {'text': 'been this is Madame Curie killing', 'start': 218.12, 'duration': 4.199}, {'text': 'herself by discovering radium who', 'start': 220.31, 'duration': 4.08}, {'text': 'although she was a naturalized French', 'start': 222.319, 'duration': 9.0}, {'text': 'citizen was polish by birth excuse me', 'start': 224.39, 'duration': 16.11}, {'text': 'the word is polish see small P so it is', 'start': 231.319, 'duration': 14.331}, {'text': 'I guess we both share blame on this one', 'start': 240.5, 'duration': 5.15}, {'text': 'Amy', 'start': 255.18, 'duration': 2.6}]




function Test() {
  const [color, setColor] = React.useState(0.0);
  const subtitles=vttext.map((each,index)=>{
    return <p style={{backgroundColor:color >= each.start/1000?"red":"green"}} key={index} class="p-2 shadow-lg">{each.text}</p>
  })
  
  return (
    <div>
      <ReactPlayer
        progressInterval={1000}
        playing
        onProgress={(played) => {
          console.log(played.played);
         setColor(played.played)
        }}
        url="https://www.youtube.com/watch?v=C8lMW0MODFs"
        config={{
          file: {
            tracks: [
              {
                kind: "subtitles",
                src: "./videovtt.vtt",
                srcLang: "en",
                default: true,
              },
            ],
          },
        }}
      />
{subtitles}
   
    </div>
  );
}

export default Test;
