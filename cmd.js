clear();

function cmd(cmd_line){

var grps = cmd_line.match(/(\w+)\s+(.*)/);

var ps = java.lang.ProcessBuilder(grps[1], grps[2]);
ps.redirectErrorStream(true);
var pr = ps.start();
var gis = pr.getInputStream();
var ins = new java.io.InputStreamReader(gis );
var inb = new java.io.BufferedReader(ins);
var line = "";
var out_string  ="";
while ( (line = inb.readLine()) != null) {
	out_string +=line +"\n";
}

pr.waitFor();
inb.close();

outln(">"+cmd_line+"\n");
outln(out_string);
return out_string;
}








