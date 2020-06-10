var seqlen = 20;
var numcub = 5;
var layout = new Array(1,2,1,2,1,0,2,0,1,2,1,2,1,0,1,2,1,0,2,1,2,0,1,2,1,0,0,0,1,0,2,1,2,1,2,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,1,2,1,0,0,0,0,0,0,0,0,0,1,2,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0);
var seq = new Array();
function scramble(){
	var i, j, n, ls, t;
	for(n = 0; n < numcub; n++){
		seq[n] = new Array();
		i = 0;
		for(t = 0; t < 4; t++){
			k = Math.floor(Math.random() * 3);
			if(k != 0){
				seq[n][i * 2] = t + 4;
				seq[n][i * 2+ 1] = k;
				i++;
			}
		}
		ls = -1;
		for(; i < seqlen; i++){
			do {j=Math.floor(Math.random() * 4);
			}
			while( ls >= 0 && j == ls);
			ls = j;
			k = Math.floor(Math.random() * 2) + 1;
			seq[n][i * 2] = j;
			seq[n][i * 2 + 1] = k;
		}
	}
}
function rotate3(n, v1, v2, v3, clockwise){
	var tmp;
	if(clockwise == 2){
		tmp = colmap[n][v3];
		colmap[n][v3] = colmap[n][v2];
		colmap[n][v2] = colmap[n][v1];
		colmap[n][v1] = tmp;
	}
	else{
		tmp = colmap[n][v1];
		colmap[n][v1] = colmap[n][v2];
		colmap[n][v2] = colmap[n][v3];
		colmap[n][v3] = tmp;
	}
}
function scramblestring(n){
	var s = "", i;
	for(i = 0; i < seq[n].length; i += 2){
		s += "LRBUlrbu".charAt(seq[n][i]);
		if( seq[n][i + 1] == 2 )s += "'";s += " ";
	}
	return s;
}