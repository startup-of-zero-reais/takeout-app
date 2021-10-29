import _ from 'lodash';

type ClassnameWithCondition = { [ key: string ]: boolean }

type ClassnameToggle = [ condition: boolean, trueClass: string, falseClass: string ];

type Classname = string | ClassnameWithCondition | ClassnameToggle;

export function classnames( ...classname: Classname[] ): string {
	return classname.map(parseClassname).join(' ')
}

function parseClassname( classname: Classname ): string {
	if ( _.isString(classname) ) {
		return classname
	}

	if ( _.isArray(classname) ) {
		return classnameToggle(classname)
	}

	if ( _.isObject(classname) ) {
		return checkClassnameCondition(classname)
	}

	return classname
}

function classnameToggle( classname: ClassnameToggle ): string {
	const [ condition, trueClass, falseClass ] = classname;

	return condition ? trueClass : falseClass;
}

function checkClassnameCondition( classname: ClassnameWithCondition ): string {
	const [ className, condition ] = Object.entries(classname)?.[ 0 ]

	return condition ? className : '';
}