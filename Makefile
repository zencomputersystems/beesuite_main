refresh:
	git fetch --all --verbose
	git submodule foreach --recursive git fetch --verbose --all


prepare: refresh
	ionic repair
