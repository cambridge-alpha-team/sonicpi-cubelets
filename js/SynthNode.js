function SynthNode(parent) {
	var synthNode = new ApplyNode('sample', parent);
	
	synthNode.choiceNode = new ChoiceNode('synth name', this, [/* a list of string choices */])
	
	return synthNode;
}