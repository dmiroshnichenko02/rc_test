import { JSXElementConstructor, ReactElement } from 'react'

export interface ITestimonial {
	text: string | ReactElement<any, string | JSXElementConstructor<any>>[]
}
