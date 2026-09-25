const SIMPSON_CHARACTERS = [
	"Homer Simpson",
	"Marge Simpson",
	"Mr. Burns",
	"Apu Nahasapeemapetilon",
	"Sideshow Bob",
	"Milhouse Van Houten",
	"Ned Flanders",
]


export default function SimpsonsCharacters({children}){
    return <ul>
        {SIMPSON_CHARACTERS.map( (characterName, index)=>{
            return <li key={index}>{characterName}</li>
        })}
        <div style={{color:"blue"}}>{children}</div>
    </ul>
}