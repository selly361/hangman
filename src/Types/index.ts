export interface IHangmanItem {
	name: string
	selected: boolean
}

export type TCategory =
	| 'Movies'
	| 'TV Shows'
	| 'Countries'
	| 'Capital Cities'
	| 'Animals'
	| 'Sports'
	| 'Fruits'
	| 'Vegetables'
	| 'Brands'

export interface Categories {
	Movies: IHangmanItem[]
	"TV Shows": IHangmanItem[]
	Countries: IHangmanItem[]
	"Capital Cities": IHangmanItem[]
	Animals: IHangmanItem[]
	Sports: IHangmanItem[]
	Fruits: IHangmanItem[]
	Vegetables: IHangmanItem[]
	Brands: IHangmanItem[]
}




