export interface IFieldMenu {
	title: string
	url: string
}

export interface IMenu {
	id: number
	name: string
	fields: IFieldMenu[]
}
