Search.setIndex({"docnames": ["AWS_hygiene_scripts", "SQS_QUEUE_information", "advanced_configuration", "config_examples", "costs", "dashboard", "external_buckets", "overview", "overview_2", "passing_files_to_DCP", "step_0_prep", "step_1_configuration", "step_2_submit_jobs", "step_3_start_cluster", "step_4_monitor", "troubleshooting_runs", "versions"], "filenames": ["AWS_hygiene_scripts.md", "SQS_QUEUE_information.md", "advanced_configuration.md", "config_examples.md", "costs.md", "dashboard.md", "external_buckets.md", "overview.md", "overview_2.md", "passing_files_to_DCP.md", "step_0_prep.md", "step_1_configuration.md", "step_2_submit_jobs.md", "step_3_start_cluster.md", "step_4_monitor.md", "troubleshooting_runs.md", "versions.md"], "titles": ["AWS Hygiene Scripts", "SQS QUEUE Information", "Advanced Configuration of DCP", "config.py configuration examples", "What does Distributed-CellProfiler cost?", "AWS Cloudwatch Dashboard", "Using External Buckets", "What is Distributed-CellProfiler?", "What happens in AWS when I run Distributed-CellProfiler?", "Passing Files to DCP", "Step 0: Prep", "Step 1: Configuration", "Step 2: Submit Jobs", "Step 3: Start Cluster", "Step 4: Monitor", "Troubleshooting", "Versions"], "terms": {"see": [0, 1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16], "also": [0, 1, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15, 16], "auspic": 0, "set": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16], "up": [0, 1, 2, 3, 4, 5, 7, 8, 10, 11, 13, 14, 15], "variou": 0, "automat": [0, 4, 8, 11, 13, 14, 15], "run": [0, 1, 2, 3, 4, 5, 6, 9, 10, 12, 15, 16], "your": [0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 15], "account": [0, 3, 7, 8, 10, 11, 13, 15, 16], "python": [0, 11, 12, 13, 14, 16], "import": [0, 1, 9], "boto3": [0, 16], "time": [0, 1, 2, 3, 5, 7, 8, 10, 11, 12, 13, 14, 15], "filterstr": 0, "myprojectnam": 0, "client": 0, "cloudwatch": [0, 1, 4, 8, 14, 15], "describe_alarm": 0, "alarmtyp": 0, "metricalarm": 0, "statevalu": 0, "insufficient_data": 0, "while": [0, 1, 4, 7, 8, 10, 11, 12], "true": [0, 1, 3, 4, 9, 11, 14, 15], "eachalarm": 0, "alarmnam": 0, "delete_alarm": 0, "sleep": 0, "1": [0, 1, 2, 3, 4, 5, 6, 8, 12, 14, 15], "avoid": [0, 2, 11, 15], "throttl": 0, "token": 0, "nexttoken": 0, "print": [0, 12, 15, 16], "bash": 0, "describ": [0, 3, 6, 10], "in2csv": 0, "f": [0, 12], "json": [0, 6, 10, 12, 13, 14, 15], "kei": [0, 6, 10, 13, 15], "loggroup": 0, "csv": [0, 3, 12, 15], "r": [0, 10, 11, 15], "requir": [0, 1, 3, 7, 8, 9, 11, 15, 16], "dplyr": 0, "readr": 0, "librari": [0, 7], "read_csv": 0, "col_typ": 0, "cols_onli": 0, "storedbyt": 0, "col_integ": 0, "creationtim": 0, "col_doubl": 0, "loggroupnam": 0, "col_charact": 0, "mutat": 0, "posixct": 0, "1000": 0, "origin": [0, 1], "1970": 0, "01": [0, 12], "filter": [0, 15, 16], "0": [0, 3, 4, 6, 11, 15], "select": [0, 1, 2, 4, 5, 9, 10, 13], "write_tsv": 0, "logs_clear": 0, "txt": [0, 9, 10, 12], "col_nam": 0, "parallel": [0, 12], "delet": [0, 1, 4, 14], "name": [0, 1, 2, 5, 6, 8, 9, 11, 14, 15, 16], "thi": [1, 3, 5, 6, 9, 11, 12, 13, 14, 15, 16], "depth": 1, "about": [1, 3, 5, 6, 7, 8, 9, 12, 14, 15], "configur": [1, 4, 6, 7, 14, 15], "compon": [1, 12], "section": [1, 10, 14, 15], "step": [1, 3, 5, 6, 7, 8, 9, 15], "distribut": [1, 3, 5, 6, 9, 10, 11, 12, 13, 14, 16], "cellprofil": [1, 3, 5, 6, 9, 10, 11, 12, 13, 14, 15, 16], "where": [1, 2, 3, 5, 6, 7, 9, 11, 12, 14, 15], "all": [1, 3, 4, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16], "job": [1, 3, 4, 5, 8, 9, 10, 11, 13, 14, 15, 16], "ar": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15, 16], "sent": [1, 11, 13, 14], "A": [1, 3, 5, 6, 8, 9, 11, 12, 15], "exactli": [1, 11], "what": [1, 5, 9, 11, 12], "sound": 1, "like": [1, 3, 5, 6, 9, 10, 11, 12, 13, 15], "list": [1, 2, 3, 8, 10, 11, 12, 13, 15, 16], "thing": [1, 5, 8, 12, 13, 14], "wait": [1, 5, 11, 15], "turn": [1, 3], "repres": [1, 13], "one": [1, 3, 4, 5, 8, 9, 10, 11, 12, 13, 14, 15], "complet": [1, 5, 8, 10, 11, 13, 15, 16], "through": [1, 5, 6, 8, 9, 10, 11, 13, 15], "pipelin": [1, 3, 8, 9, 11, 12, 15, 16], "though": [1, 8, 10, 12, 13], "each": [1, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13, 14], "mai": [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15], "involv": [1, 10, 14], "ani": [1, 2, 3, 4, 5, 8, 9, 10, 11, 13, 14, 15], "number": [1, 2, 3, 4, 5, 8, 10, 11, 12, 13, 14, 15, 16], "imag": [1, 3, 7, 8, 9, 11, 12, 15, 16], "e": [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16], "g": [1, 2, 3, 6, 7, 8, 9, 12, 14, 15, 16], "analysi": [1, 3, 11, 12], "thousand": 1, "singl": [1, 3, 5, 8, 9, 11, 15], "make": [1, 3, 5, 8, 9, 10, 11, 12, 13, 15], "an": [1, 3, 4, 5, 6, 7, 9, 10, 11, 12, 14, 15, 16], "illumin": [1, 3, 12], "correct": [1, 3, 11, 12, 15], "iter": 1, "produc": 1, "output": [1, 3, 6, 8, 11, 12, 13, 14, 15, 16], "file": [1, 2, 3, 4, 5, 6, 7, 8, 10, 13, 15, 16], "you": [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "want": [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 13, 14, 15], "descript": [1, 11], "enough": [1, 3, 5, 11, 14], "distinguish": 1, "from": [1, 3, 5, 7, 8, 9, 11, 12, 13, 14, 15, 16], "other": [1, 3, 5, 6, 8, 9, 10], "we": [1, 2, 3, 4, 5, 7, 8, 9, 10, 11, 12, 13], "usual": [1, 3, 12, 15], "our": [1, 2, 3, 5, 7, 9, 10, 12, 13, 16], "base": [1, 3, 11, 12, 13, 15], "project": [1, 2, 3, 7, 9, 15], "goal": 1, "someth": [1, 15], "hepatocyte_differentiation_illum": 1, "lipid_droplet_analysi": 1, "fail": [1, 5, 11, 15], "If": [1, 2, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15], "everyth": [1, 7, 10], "goe": 1, "perfectli": 1, "alwai": [1, 7, 14, 16], "remain": [1, 5, 14], "empti": [1, 4, 5, 8, 15], "multipl": [1, 3, 4, 8, 11, 14, 15, 16], "default": [1, 2, 3, 6, 9, 10, 11, 12, 14, 15, 16], "10": [1, 2, 3, 4, 6, 12, 14], "thei": [1, 3, 5, 8, 11, 12, 13, 14, 15, 16], "move": [1, 5, 11, 15, 16], "dead": [1, 8], "letter": [1, 8], "which": [1, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "us": [1, 3, 4, 5, 8, 10, 11, 12, 13, 15, 16], "initi": [1, 4, 5, 7, 10, 14, 15], "The": [1, 4, 5, 6, 8, 9, 11, 12, 13, 14, 15, 16], "therefor": [1, 5, 14], "function": [1, 3, 10, 12, 15], "effect": [1, 3, 6], "log": [1, 2, 6, 8, 10, 13, 14, 15, 16], "so": [1, 3, 5, 6, 8, 9, 10, 12, 13, 14, 15], "can": [1, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15, 16], "It": [1, 3, 5, 7, 8, 9, 10, 11, 12, 15], "differ": [1, 2, 3, 5, 8, 11, 12, 14, 15, 16], "machin": [1, 3, 4, 5, 8, 9, 10, 11, 13, 14, 15, 16], "do": [1, 5, 6, 9, 10, 11, 12, 13, 14], "try": [1, 2, 5, 10, 11, 12, 15], "pull": [1, 5, 10, 13], "protip": 1, "member": 1, "team": [1, 3], "maintain": [1, 5, 9], "own": [1, 3, 5, 8, 10, 12, 15], "don": [1, 3, 6, 7, 8, 10, 11, 12, 13, 15, 16], "t": [1, 3, 5, 6, 7, 8, 9, 10, 11, 12, 15, 16], "have": [1, 3, 4, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15], "worri": [1, 7, 15], "find": [1, 9, 12, 13, 14, 15], "messag": [1, 2, 4, 5, 8, 15], "peopl": 1, "same": [1, 4, 5, 6, 9, 11, 13, 15], "deadmessages_erin": 1, "end": [1, 4, 5, 8, 9, 11], "mani": [1, 5, 7, 8, 11, 12, 13, 15, 16], "place": [1, 2, 4, 8, 10, 11, 12, 13, 14, 15], "could": [1, 5, 8], "problem": [1, 7, 11, 15], "hopefulli": 1, "ll": [1, 5, 7, 8, 13], "keep": [1, 2, 6, 8, 11, 14], "ey": [1, 8, 14], "part": [1, 5, 11, 15], "aw": [1, 2, 3, 4, 7, 13, 14, 15], "monitor": [1, 2, 3, 4, 5, 8, 13, 16], "servic": [1, 4, 6, 7, 8, 11, 14], "after": [1, 2, 4, 5, 8, 9, 10, 11, 13, 14, 15], "start": [1, 4, 5, 8, 11, 12, 14, 15], "catch": 1, "issu": [1, 9, 11, 15, 16], "befor": [1, 2, 11, 12, 15], "rest": 1, "successfulli": [1, 5, 10, 12], "corrupt": [1, 11, 15], "ha": [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15], "save": [1, 5, 6, 11, 13, 14, 15], "properli": [1, 10, 12], "been": [1, 3, 5, 10, 11, 13, 14, 15], "damag": 1, "open": [1, 3, 8, 15], "whether": [1, 5, 8, 11], "process": [1, 3, 7, 9, 10, 11, 12, 14, 15], "re": [1, 5, 7, 8, 11, 12, 13, 15], "interest": 1, "cellular": 1, "measur": [1, 3, 12], "per": [1, 2, 4, 5, 9, 10, 11, 12, 13], "basi": [1, 12], "when": [1, 3, 4, 5, 6, 7, 10, 11, 12, 13, 15, 16], "plate": [1, 3, 8, 12, 15, 16], "major": [1, 4, 8], "reason": [1, 11, 13], "why": [1, 5, 8], "certainli": [1, 10], "pai": [1, 7, 11, 13, 15], "cluster": [1, 3, 4, 5, 9, 11, 14, 16], "indefinit": [1, 11, 15], "attempt": 1, "wouldn": 1, "necessarili": [1, 5, 15], "help": [1, 3, 4, 5, 7, 8, 11, 12, 14, 16], "kind": [1, 9, 12], "error": [1, 8, 12, 14, 15, 16], "becaus": [1, 5, 13, 14, 15], "ten": 1, "hundr": 1, "success": [1, 9, 15], "instanc": [1, 2, 4, 7, 10, 13, 14, 15], "etc": [1, 11, 12, 14, 15], "control": [1, 3, 6, 12], "how": [1, 3, 5, 7, 9, 10, 11, 12, 13, 15], "long": [1, 3, 5, 8, 11, 14, 15], "hidden": [1, 5, 11], "being": [1, 2, 3, 5, 7, 8, 9, 11, 12, 15], "must": [1, 3, 6, 9, 11, 12, 15, 16], "visibl": [1, 5, 8], "i": [1, 5, 6, 10, 11, 15], "order": [1, 9, 11, 12, 13, 16], "docker": [1, 3, 5, 8, 9, 13, 14, 15], "In": [1, 2, 4, 5, 7, 8, 13, 15], "word": 1, "enter": [1, 2, 3, 6, 9, 10, 11, 13, 14], "allow": [1, 5, 6, 7, 10, 11, 12, 13, 16], "chanc": 1, "unhidden": 1, "made": [1, 8, 10, 11, 15], "avail": [1, 7, 10, 14], "copi": [1, 3, 6, 8, 9, 11, 13, 15], "s": [1, 5, 7, 8, 10, 11, 12, 13, 15], "quit": [1, 8, 14], "correctli": [1, 3, 10, 11, 15], "typic": [1, 4, 6, 11, 15], "sai": [1, 14], "estim": [1, 11, 13], "5x": 1, "take": [1, 3, 5, 7, 8, 11, 12, 13, 14], "best": [1, 8, 12], "guess": 1, "sure": [1, 3, 5, 9, 10, 11, 12, 13, 15], "To": [1, 5, 6, 8, 9, 10], "understand": [1, 5, 12, 14], "consequ": 1, "incorrect": [1, 15], "let": [1, 13], "look": [1, 3, 5, 7, 11, 13, 14, 15], "more": [1, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], "carefulli": 1, "two": [1, 5, 10, 16], "categori": 1, "flight": [1, 15], "regardless": 1, "mean": [1, 5, 9, 14, 15], "current": [1, 4, 10, 14, 16], "hide": [1, 5], "submit": [1, 8, 10, 13, 14, 15], "config": [1, 2, 4, 5, 8, 9, 12, 14, 15, 16], "creat": [1, 2, 3, 4, 5, 7, 8, 11, 12, 13, 14, 15, 16], "out": [1, 5, 8, 11, 14, 15], "put": [1, 5, 8, 9, 12], "under": [1, 4, 9, 13, 15], "fleet": [1, 2, 4, 5, 7, 8, 10, 11, 14, 15, 16], "ec2": [1, 2, 4, 6, 8, 13, 14, 15], "2": [1, 2, 3, 5, 8, 11, 13, 15], "ec": [1, 2, 4, 6, 8, 10, 13, 14, 15], "contain": [1, 3, 5, 7, 8, 9, 11, 12, 13, 14, 15], "those": [1, 7], "3": [1, 3, 4, 5, 8, 12, 15, 16], "onc": [1, 3, 4, 5, 8, 10, 11, 12, 13, 14], "durat": [1, 4], "becom": [1, 14, 15], "again": [1, 10, 11, 13], "tell": [1, 8, 9, 11], "anoth": [1, 8, 9, 11, 14], "too": [1, 8, 10, 11, 13, 15], "short": [1, 5, 11, 15], "even": [1, 5, 13, 14], "still": [1, 4, 16], "pick": 1, "come": [1, 5, 11], "along": [1, 8], "unnecessari": 1, "comput": [1, 6, 7, 8, 10, 11], "both": [1, 5, 13, 14], "continu": [1, 13], "until": [1, 5, 8], "finish": [1, 2, 4, 5, 8, 11, 13, 15], "wast": [1, 11], "monei": [1, 5, 14], "crash": [1, 5, 8, 11, 14], "done": [1, 2, 4, 5, 9, 11], "anyth": [1, 7, 8, 14], "caus": [1, 15], "stop": [1, 4], "mid": 1, "remov": [1, 5, 8, 14, 15, 16], "outbid": 1, "stai": 1, "doesn": [1, 5, 7, 8, 11, 15], "doe": [1, 10, 15], "limit": [1, 2, 3, 6, 13, 14], "power": [1, 7], "some": [1, 2, 3, 5, 8, 9, 11, 13, 14], "hang": [1, 5], "around": [1, 5, 11], "noth": [1, 5, 15], "cost": 1, "doubt": 1, "better": [1, 3, 5, 11, 14, 15, 16], "than": [1, 3, 5, 7, 8, 11, 13, 14, 15, 16], "happen": [1, 5, 13, 14, 15], "rare": 1, "small": [1, 5, 8, 10], "notic": 1, "larger": [1, 3, 5, 8, 11, 15], "There": [1, 10, 15], "easi": [1, 9], "wai": [1, 3, 4, 7, 9, 12, 14, 16], "appropri": [1, 5, 6, 10, 15], "amount": [1, 5, 8, 11], "first": [1, 5, 8, 9, 10, 11, 13, 14], "brand": 1, "new": [1, 3, 10, 12, 14], "confirm": [1, 3, 10, 15], "didn": 1, "need": [1, 3, 5, 6, 8, 9, 10, 11, 12, 13, 14, 15], "manual": [1, 3, 4], "go": [1, 3, 4, 8, 11, 13], "figur": [1, 5], "got": [1, 15], "individu": [1, 5, 8, 11, 12, 13, 14], "never": [1, 3, 10, 15], "likewis": 1, "timeout": 1, "seem": [1, 13], "few": [1, 8, 13, 14], "cpu": [1, 3, 8, 11, 14], "usag": [1, 4, 5, 12, 14, 15], "high": 1, "check": [1, 5, 15, 16], "execut": [1, 8, 9, 11], "either": [1, 5, 9, 15], "begin": [1, 9, 12, 13], "note": [1, 3, 4, 5, 9, 12, 13, 14, 15], "accur": 1, "idea": 1, "roughli": [1, 8, 11], "accordingli": [1, 11, 13, 15], "fly": 1, "updat": [1, 5, 11, 13, 15], "won": [1, 5, 9, 13], "affect": [1, 7, 8], "alreadi": [1, 11, 13, 15], "wa": [1, 5, 7, 9, 11, 12, 15], "hour": [1, 4, 5, 11, 13, 14], "chang": [1, 3, 4, 5, 15, 16], "sample_sqs_queu": 1, "png": [1, 11], "alt": 1, "activ": [1, 10, 11], "task": [1, 4, 5, 6, 8, 11, 14], "64": [1, 8, 11], "32": 1, "moment": 1, "right": [1, 5], "lab": [1, 7, 12], "fortun": 1, "ve": [2, 10, 11, 12, 13], "tri": [2, 7, 11], "veri": [2, 3, 5, 15], "hard": [2, 3, 5, 8, 10, 11], "light": [2, 3], "adapt": 2, "manag": [2, 6], "assumpt": 2, "below": [2, 3, 6, 12, 13, 14], "non": [2, 6, 12], "comprehens": 2, "code": [2, 8, 10], "purpos": 2, "locat": [2, 8, 9, 12, 15], "By": [2, 12], "bucket": [2, 3, 7, 9, 10, 11, 14, 15, 16], "prefix": 2, "ecsconfig": 2, "altern": [2, 15], "design": [2, 7, 11, 12, 16], "script": [2, 4, 7, 8, 9, 10, 11, 12, 14, 15], "export": [2, 9, 10, 11, 14], "group": [2, 5, 8, 9, 10, 12, 13, 15, 16], "retent": 2, "60": [2, 3], "dai": 2, "hit": 2, "250": 2, "them": [2, 5, 6, 8, 11, 12, 13, 14, 15], "exportedlog": 2, "log_group_nam": [2, 3, 11], "These": [2, 5, 8, 9, 10, 11, 13], "modifi": [2, 12], "addit": [2, 6, 9, 12, 16], "spot": [2, 4, 5, 7, 8, 11, 14], "instal": [2, 6, 7, 11, 13], "packag": [2, 7, 9], "startup": [2, 15], "userdata": 2, "paramet": [2, 3, 8, 14, 15, 16], "sq": [2, 4, 5, 8, 12, 14, 15], "queue": [2, 3, 4, 5, 8, 12, 13], "detail": [2, 8, 9, 12, 13], "consign": 2, "deadletterqueu": 2, "unprocess": 2, "expir": 2, "14": 2, "maximum": [2, 3, 13, 14, 15], "valu": [2, 3, 11, 13, 14, 15], "py": [2, 6, 8, 9, 10, 11, 13, 14, 15, 16], "version": [2, 3, 6, 7, 11, 14, 15], "date": 2, "latest": [2, 14], "stabl": [2, 5], "releas": 2, "case": [2, 5, 11, 15], "build": 2, "edit": [2, 6, 9, 11, 14, 15], "dockerfil": [2, 9], "call": [2, 9, 12, 15], "instead": [2, 9, 14, 15], "alarm": [2, 4, 5, 8, 11, 14], "threshold": 2, "worker": [2, 10, 15], "frequenc": 2, "type": [2, 3, 4, 5, 8, 9, 10, 11, 12, 13, 16], "inform": [2, 3, 4, 5, 6, 8, 9, 10, 12, 13, 14, 15], "includ": [2, 5, 7, 8, 10, 11, 12, 13, 15], "adjust": [2, 5], "command": [2, 4, 5, 6, 8, 9, 10, 11, 12, 13], "line": [2, 3, 5, 9, 10, 12], "flag": [2, 6, 11], "cp": [2, 3, 15], "stream": [2, 13], "level": 2, "At": [2, 9], "least": [2, 5], "4": [2, 3, 5, 8, 11, 15, 16], "dockerhub_tag": [2, 3, 11, 15], "bethcimini": [2, 16], "0_4": [2, 3], "4_plugin": 2, "custom": [2, 5], "model": 2, "user": [2, 3, 6, 7, 9, 10, 12, 15], "train": 2, "gener": [2, 3, 6, 9, 10, 13, 15], "cellpos": 2, "add": [2, 6, 8, 9, 10, 11, 12, 13, 16], "s3": [2, 6, 7, 8, 9, 10, 14, 15, 16], "follow": [2, 3, 5, 6, 8, 9, 10, 12, 13, 14], "structur": [2, 9, 12, 13, 15, 16], "organ": [2, 9], "project_nam": [2, 3], "workspac": 2, "custom_model_filenam": 2, "modul": [2, 9, 12, 15], "insid": [2, 11, 14], "detect": [2, 11], "mode": [2, 4, 10, 15, 16], "pre": [2, 13], "mount": [2, 8, 9, 10, 15], "path": [2, 3, 9, 11, 12, 15], "home": [2, 5, 7, 9, 15], "ubuntu": [2, 9, 15], "hand": 3, "standard": [3, 9], "workflow": [3, 7, 8, 9, 10, 11, 14, 15], "stereotyp": [3, 12], "fashion": 3, "cell": 3, "paint": 3, "assai": 3, "read": [3, 5, 8, 11, 12, 14, 15, 16], "context": 3, "here": [3, 4, 6, 8, 9, 12, 13], "z": 3, "pixel": 3, "plane": 3, "condens": 3, "content": 3, "focal": 3, "perform": [3, 4, 10, 11, 12, 14, 15], "downstream": 3, "batch": [3, 8, 12, 15, 16], "irregular": 3, "depend": [3, 4, 7, 10, 11, 12, 13, 15], "upon": [3, 15], "larg": [3, 5, 7, 8, 11, 12, 15], "found": [3, 8, 9, 16], "qualiti": [3, 12], "provid": [3, 4, 10, 12, 13], "metric": [3, 4, 5, 11, 14], "input": [3, 8, 9, 12, 15, 16], "necessari": [3, 6, 8, 10, 11, 12, 14], "particularli": [3, 14], "improv": [3, 7, 11, 16], "wetlab": 3, "compar": [3, 5, 14], "across": [3, 5], "dataset": [3, 7], "dev": 3, "segment": 3, "quick": [3, 5], "outlin": [3, 8], "overlaid": 3, "multichannel": 3, "rescal": 3, "visual": 3, "inspect": 3, "often": [3, 5, 6, 11, 15], "stitch": 3, "pseudo": [3, 10], "view": [3, 5, 8, 11], "chosen": 3, "work": [3, 10, 12, 13], "appli": 3, "actual": [3, 5, 8, 9, 11, 15], "occur": [3, 5, 15], "profil": [3, 6], "taken": 3, "memori": [3, 5, 8, 11, 12, 14, 15], "reduc": [3, 11, 13, 15], "decreas": [3, 5, 8, 12, 15], "docker_cor": [3, 8, 11], "intern": 3, "app_nam": [3, 11, 14], "project_name_zproj": 3, "project_name_illum": 3, "project_name_qc": 3, "project_name_assaydev": 3, "project_name_analysi": 3, "excess": 3, "truncat": 3, "care": 3, "subsequ": [3, 13], "protocol": 3, "2021_06_08_wcpc_zproj": 3, "ensur": [3, 8, 9], "tag": [3, 10, 11, 16], "match": [3, 5, 12, 14, 15], "easili": [3, 10, 14], "text": [3, 6, 9, 12], "editor": 3, "3rd": 3, "daterevis": 3, "413": 3, "aws_region": [3, 6], "east": [3, 6, 10, 15], "aws_profil": [3, 6, 15], "ssh_key_nam": [3, 6, 15], "yourpem": 3, "pem": [3, 6, 10, 13, 15], "aws_bucket": [3, 6, 11], "dcp": [3, 11, 15, 16], "source_bucket": [3, 6, 11], "public": [3, 6], "cellpaint": [3, 6, 12], "galleri": 3, "destination_bucket": [3, 6, 11], "upload_flag": [3, 6, 11], "ecs_clust": [3, 8, 11], "most": [3, 5, 8, 10, 11, 14, 15, 16], "just": [3, 5, 13, 15], "yournam": 3, "cluster_machin": [3, 11], "100": [3, 5, 11], "200": [3, 14], "round": [3, 5], "25": 3, "request": [3, 4, 5, 10, 14, 15], "largest": 3, "capac": [3, 5, 13, 14, 16], "tasks_per_machin": [3, 11], "machine_typ": [3, 11, 15], "c5": 3, "xlarg": [3, 11], "histor": 3, "m4": [3, 8, 11], "m5": 3, "howev": [3, 5, 8, 13], "recent": [3, 14], "get": [3, 5, 7, 8, 10, 14, 15], "m": 3, "class": [3, 10], "switch": 3, "c": [3, 5, 12, 15], "size": [3, 5, 8, 11, 15, 16], "between": [3, 5, 10, 13, 15, 16], "machine_pric": [3, 11], "20": 3, "Will": 3, "ebs_vol_s": [3, 11, 15], "22": [3, 11], "might": [3, 11, 14], "download_fil": [3, 9, 11, 15], "fals": [3, 4, 9, 11, 15], "2k": 3, "cpu_shar": [3, 11], "1024": [3, 11], "7500": 3, "15000": [3, 11], "seconds_to_start": [3, 11, 15], "sqs_queue_nam": [3, 11], "sqs_message_vis": [3, 5, 11, 15], "240": 3, "15": [3, 8, 14], "120": 3, "expect": [3, 6, 15], "5": [3, 5, 15], "second": [3, 12, 13], "sqs_dead_letter_queu": [3, 11], "yourname_deadmessag": 3, "auto_monitor": [3, 11, 14], "off": 3, "create_dashboard": [3, 4, 11], "clean_dashboard": [3, 4, 11, 14], "check_if_done_bool": [3, 8, 11, 15], "overwrit": [3, 11, 14, 15], "old": [3, 4, 11, 15], "data": [3, 4, 7, 8, 10, 11, 12, 13, 15], "expected_number_fil": [3, 8, 11, 15], "channel": [3, 9, 15], "npy": 3, "isdon": 3, "experi": [3, 12], "nuclei": 3, "cytoplasm": 3, "underestim": 3, "overestim": 3, "min_file_size_byt": [3, 11], "count": [3, 11], "necessary_str": [3, 11], "Not": [3, 5], "use_plugin": [3, 11], "update_plugin": [3, 11], "plugins_commit": [3, 11], "install_requir": [3, 11], "requirements_fil": [3, 11], "seri": [4, 7, 12], "three": [4, 8], "onli": [4, 5, 6, 7, 10, 11, 12, 13, 14, 16], "incur": [4, 14], "scale": [4, 5, 10, 14], "setup": [4, 5, 8, 10, 11, 13, 15], "definit": [4, 8, 13, 14], "entir": [4, 8, 11, 12], "free": [4, 7, 10, 13], "million": 4, "month": 4, "submitjob": [4, 8, 9, 12], "startclust": [4, 8, 13, 14], "option": [4, 5, 8, 9, 11, 12, 13, 14, 15, 16], "dashboard": [4, 8, 14], "exact": 4, "price": [4, 8, 11, 13, 14, 16], "bid": [4, 5, 8, 11, 13, 14], "minim": [4, 7, 11], "encourag": [4, 13], "dure": [4, 10, 15], "down": [4, 5, 8, 12, 13, 14], "cancel": [4, 16], "aggress": 4, "downscal": [4, 14, 15, 16], "engag": [4, 14], "cheapest": [4, 16], "cleanup": 4, "without": [4, 5, 10, 13, 14, 15], "abort": 4, "clean": [4, 5, 11, 14], "purg": 4, "consol": [4, 5, 8, 10], "press": [4, 9], "action": [4, 6], "directli": [4, 5, 8], "longer": [4, 5, 11, 14], "unus": 4, "state": [4, 10, 16], "insuffici": [4, 5], "hygien": 4, "50": [4, 14], "prevent": [4, 5], "choos": [4, 13, 14], "customiz": 5, "page": [5, 7, 8, 12, 13], "resourc": [5, 6, 7, 8, 11], "full": [5, 6, 8, 11], "widget": 5, "report": [5, 9, 15], "separ": [5, 7, 8, 12, 15], "auto": [5, 10, 11], "ds": [5, 8, 10], "popul": 5, "helfpul": 5, "post": 5, "mortem": 5, "previou": [5, 8, 12, 13, 14, 15, 16], "consist": [5, 15], "manner": [5, 15], "told": [5, 9], "optim": [5, 13, 14], "thu": 5, "fulfil": 5, "given": [5, 8], "point": [5, 8, 9, 14, 15], "spin": 5, "hope": [5, 12], "straight": 5, "steadi": 5, "dip": [5, 14], "inevit": 5, "replac": [5, 6, 9, 14], "give": [5, 6, 7, 8, 11], "higher": [5, 11, 13], "bidder": 5, "everi": [5, 10, 12, 13, 14], "progress": [5, 11, 13, 15], "lost": 5, "reach": [5, 15], "For": [5, 11, 12, 14], "much": [5, 8, 11, 13, 15], "impact": 5, "frustrat": 5, "potenti": 5, "expens": [5, 16], "lot": 5, "abl": [5, 11], "futur": [5, 10, 12], "region": [5, 6, 10, 15], "blip": 5, "coincid": 5, "outag": [5, 11], "bad": [5, 11, 15], "luck": 5, "exampl": [5, 8, 12, 14, 15, 16], "abov": [5, 6, 10, 14], "bulk": 5, "numberofmessagesdelet": 5, "well": [5, 6, 7, 8, 9, 12, 13, 15, 16], "back": [5, 8], "track": [5, 9], "top": [5, 12], "gap": 5, "fraction": 5, "insight": 5, "encount": [5, 15], "smallest": 5, "possibl": [5, 8, 11, 12, 16], "economi": 5, "sake": 5, "util": [5, 8], "intens": [5, 8, 11, 12], "averag": [5, 11], "minut": [5, 8, 13, 14], "window": 5, "max": [5, 15], "percentag": 5, "less": [5, 16], "aka": [5, 9, 14], "messagesnotvis": 5, "whichev": 5, "linear": 5, "declin": 5, "total": [5, 11, 15], "equal": 5, "core": [5, 11], "sometim": [5, 15], "rapid": 5, "increas": [5, 8, 9, 12, 15, 16], "pictur": 5, "disk": [5, 8, 14], "rapidli": [5, 15], "caught": 5, "reboot": [5, 8], "lose": 5, "appear": 5, "loss": 5, "were": [5, 11, 13], "return": [5, 12, 16], "statu": 5, "rel": [5, 9], "slope": 5, "graph": 5, "discov": 5, "midwai": 5, "7": 5, "12": [5, 12], "greater": [5, 8], "fewer": [5, 15], "specif": [5, 6, 7, 8, 9, 13, 16], "within": [5, 6, 8, 11, 15], "plot": [5, 11], "its": [5, 7, 8, 13, 14], "ideal": 5, "softwar": [5, 7, 8, 9, 10, 11], "entri": [5, 12], "toggl": 5, "row": [5, 9, 12], "logstream": 5, "timescal": 5, "absolut": [5, 9], "upper": 5, "corner": 5, "screen": [5, 14], "zoom": 5, "particular": [5, 12, 15], "draw": 5, "box": 5, "itself": [5, 14, 15], "deselect": 5, "certain": [5, 13, 15, 16], "perman": 5, "simpli": [5, 9, 11, 12, 13], "click": [5, 13], "x": 5, "next": [5, 11, 13], "legend": 5, "hover": 5, "left": 5, "direct": [5, 6], "arrow": 5, "icon": 5, "drag": 5, "drop": [5, 15], "lower": 5, "diagon": 5, "desir": [5, 16], "menu": 5, "refresh": 5, "ident": [6, 15], "access": [6, 7, 10, 11, 15, 16], "iam": 6, "would": [6, 8, 9, 10, 11, 12, 14], "cli": [6, 11], "upload": [6, 10, 11, 15, 16], "ssh": [6, 10], "role": [6, 13, 15, 16], "acl": 6, "owner": 6, "metadata": [6, 12, 15, 16], "wil": 6, "further": [6, 10, 15], "someon": 6, "els": [6, 14], "handl": [6, 15, 16], "assum": [6, 10, 13], "learn": 6, "defin": [6, 8], "trust": 6, "relationship": 6, "templat": [6, 13], "2012": 6, "17": 6, "statement": 6, "princip": 6, "arn": [6, 13], "123456789123": 6, "image_analyst": 6, "image_expert": 6, "amazonaw": [6, 15], "com": [6, 10, 15], "st": 6, "assumerol": 6, "node": [6, 12], "block": [6, 10], "bottom": [6, 9], "role_arn": 6, "source_profil": 6, "my": 6, "credenti": [6, 10], "fill": 6, "info": 6, "aws_access_key_id": 6, "access_kei": 6, "aws_secret_access_kei": 6, "secret_access_kei": 6, "amazon": [7, 10, 13], "web": [7, 10, 13, 14], "storag": [7, 10, 13], "system": [7, 9, 10, 16], "store": [7, 10], "cloud": [7, 9], "platform": [7, 10], "sourc": [7, 15], "oper": [7, 10, 15], "benefit": 7, "eas": 7, "themselv": [7, 8], "reproduc": 7, "result": [7, 11, 13, 14], "fix": [7, 15], "flexibl": 7, "demand": 7, "infrastructur": [7, 14], "far": 7, "institut": 7, "great": 7, "piec": 7, "ad": [7, 14, 16], "consum": 7, "confus": 7, "leverag": 7, "former": 7, "latter": 7, "essenti": [7, 12], "termin": [7, 10, 11, 13, 14], "program": [7, 13], "feel": [7, 13], "cimini": 7, "broad": 7, "cambridg": 7, "ma": 7, "usa": 7, "develop": 7, "now": [7, 14], "carpent": 7, "singh": 7, "repositori": [8, 11], "readm": 8, "respect": 8, "document": [8, 10, 13, 15], "overview": 8, "explain": 8, "python3": 8, "gave": 8, "addition": [8, 14], "onto": [8, 11, 13, 14], "mismatch": [8, 15, 16], "accident": [8, 15], "intend": 8, "blindli": 8, "sit": 8, "idl": 8, "hook": 8, "_perinst": 8, "shut": [8, 14], "send": [8, 11, 12], "16xlarg": [8, 11], "250gb": 8, "ram": 8, "165": [8, 11], "eb": [8, 11, 15, 16], "volum": [8, 11, 13, 15, 16], "16": [8, 11], "10gb": 8, "space": [8, 11, 15], "assign": 8, "gb": [8, 11], "share": 8, "among": [8, 13], "384": [8, 15], "timelaps": 8, "movi": 8, "stagger": 8, "aren": 8, "simultan": 8, "likelihood": 8, "degre": 8, "trial": 8, "local": [8, 9, 10, 13, 15], "sens": [8, 15], "drive": [8, 10, 11], "fluctuat": 8, "choic": [8, 12], "quickli": [8, 11, 13, 15], "willing": [8, 11, 13], "oppos": [8, 11], "ones": [8, 11], "risk": [8, 14], "tweak": 8, "five": 8, "primari": 8, "interact": [8, 10], "prepar": [8, 15], "outsid": 8, "granular": 8, "tab": 8, "browser": 8, "watch": 8, "behavior": 8, "especi": 8, "split": 9, "unlik": 9, "inclus": 9, "NOT": [9, 12], "wish": [9, 13], "metdata": 9, "ye": 9, "enabl": [9, 10], "extract": [9, 12], "folder": [9, 11, 12, 15, 16], "present": [9, 13, 16], "remot": 9, "method": 9, "should": [9, 10, 11, 13, 14], "pars": [9, 11], "minimum": [9, 11], "pathname_": 9, "nameofchannel": 9, "filename_": 9, "column": [9, 12, 13, 15], "metadata_": [9, 15], "pieceofmetadata": 9, "pathnam": [9, 15], "relativepath": 9, "odd": 9, "yourself": [9, 12], "via": [9, 16], "favorit": [9, 12], "languag": [9, 12], "phenix": 9, "xml": 9, "pe2loaddata": [9, 15], "namesandtyp": 9, "written": [9, 10], "video": 9, "hardcod": 9, "nest": [9, 15], "simpl": [9, 14], "eweisbar": 9, "desktop": 9, "run_work": 9, "sh": [9, 12, 15], "s3f": [9, 11, 15, 16], "bypass": [9, 15, 16], "download": [9, 10, 11, 13, 15, 16], "data_fil": [9, 12], "run_batch_gener": [9, 15, 16], "stuff": 9, "argument": [9, 15], "makeanalysisjob": [9, 15], "unless": [9, 14, 15], "deviat": 9, "datafilepath": 9, "transit": 9, "h5": [9, 12, 15], "captur": 9, "togeth": [9, 11], "createbatchfil": [9, 12, 15], "map": 9, "root": [9, 13], "analyz": [9, 12], "button": 9, "batchpipenam": 9, "batchpath": 9, "format": [9, 12], "implement": 10, "destroi": 10, "creation": 10, "setup_aw": 10, "proce": 10, "login": 10, "secur": [10, 13], "safe": [10, 11], "later": 10, "probabl": 10, "d": [10, 11, 12], "rather": [10, 15, 16], "pair": [10, 13, 15], "chmod": 10, "600": 10, "privat": 10, "connect": [10, 15], "vpc": [10, 13], "subnet": [10, 13, 14], "inbound": 10, "ip": 10, "address": 10, "ecsinstancerol": 10, "permiss": [10, 15], "coordin": 10, "grant": 10, "launch": [10, 11, 13], "topic": 10, "trigger": [10, 14, 15], "link": [10, 13], "prefer": [10, 11], "dedic": 10, "simplic": 10, "special": 10, "micro": 10, "basic": 10, "recommend": [10, 11, 12, 13], "guid": 10, "tool": [10, 12], "instruct": [10, 13, 14], "linux": [10, 13], "support": [10, 12, 16], "9": 10, "sudo": 10, "apt": 10, "git": [10, 11], "http": 10, "github": [10, 15], "distributedsci": 10, "cd": 10, "interfac": [10, 13, 14], "main": 10, "awscli": 10, "ignor": 10, "six": 10, "upgrad": 10, "last": [10, 14, 15], "west": 10, "eu": 10, "2a": 10, "real": 10, "gotten": 10, "know": [10, 15], "replic": 10, "repeat": 10, "decid": [10, 12], "specifi": [11, 12, 15], "tie": 11, "uniqu": 11, "apart": [11, 13], "analys": 11, "nuclearsegmentation_drosophila": 11, "encapsul": 11, "prep": 11, "write": 11, "extern": 11, "distinct": 11, "wrong": [11, 15], "nuclearsegmentation_hela": 11, "handi": [11, 13], "histori": [11, 13], "tracker": [11, 13], "immedi": [11, 13], "justifi": [11, 13], "temporari": 11, "associ": [11, 14], "occasion": 11, "crop": 11, "slower": 11, "advis": 11, "length": [11, 15], "due": [11, 12, 14, 15], "lack": [11, 16], "slightli": 11, "stall": [11, 14, 15], "sinc": 11, "exist": [11, 13, 15], "fact": 11, "proceed": [11, 15], "insensit": 11, "partwai": 11, "resubmit": 11, "whole": [11, 14, 15], "reprocess": [11, 15], "haven": [11, 15], "succeed": 11, "vs": [11, 15], "rerun": 11, "determin": 11, "previous": [11, 14], "mark": 11, "byte": 11, "object": 11, "smaller": [11, 12, 15], "string": 11, "toward": 11, "fetch": 11, "commit": 11, "checkout": 11, "pip": 11, "sample_distribut": 11, "cellprofiler_configuration_1": 11, "sample_dcp_config_1": 11, "fairli": 11, "4096": 11, "mb": 11, "cellprofiler_configuration_2": 11, "sample_dcp_config_2": 11, "tend": 11, "break": 12, "site": [12, 15, 16], "readi": [12, 13], "yourjobfil": 12, "loaddata": [12, 15], "OR": [12, 15], "headless": 12, "versu": 12, "load": [12, 15], "mechan": 12, "000": 12, "suffer": 12, "throughput": 12, "none": 12, "directori": [12, 15], "rule": 12, "flagimag": [12, 15], "scan": 12, "output_structur": [12, 16], "subfold": 12, "hyphen": [12, 16], "metadata_pl": [12, 15], "plate1": [12, 15], "metadata_wel": [12, 15], "a01": [12, 15], "output_top_directori": [12, 16], "append": 12, "gnu": 12, "combin": 12, "approach": 12, "uniform": 12, "96": 12, "echo": 12, "plate2": 12, "plate3": 12, "b": 12, "h": 12, "02": 12, "03": 12, "04": [12, 15], "05": 12, "06": 12, "07": 12, "08": 12, "09": 12, "11": [12, 15], "sort": 12, "variabl": [12, 15, 16], "besid": 12, "serv": 12, "shortcut": 12, "common": [12, 15], "regular": 12, "n": 12, "pathwai": 12, "comfort": 12, "faster": 12, "yourfleetfil": 13, "anywher": 13, "coupl": 13, "sever": 13, "app_namespotfleetrequestid": [13, 14], "walk": 13, "awai": 13, "ask": 13, "shortli": 13, "term": 13, "explan": 13, "cover": 13, "review": 13, "test": 13, "ami": 13, "obtain": 13, "id": 13, "iamfleetrol": 13, "iaminstanceprofil": 13, "keynam": [13, 15], "subnetid": 13, "did": 13, "extens": [13, 15], "imageid": 13, "snapshotid": 13, "refer": [13, 15], "os": 13, "yourselv": 13, "good": 13, "had": 13, "pleas": [13, 15], "repo": [13, 15], "offici": 13, "deprec": 13, "strongli": 13, "validfrom": 13, "validto": 13, "year": 13, "targetcapac": 13, "align": 13, "step_1_configur": 13, "md": 13, "instancetyp": 13, "spotpric": 13, "search": 13, "kill": [13, 14], "network": [13, 14], "On": 13, "snapshot": 13, "label": 14, "statist": 14, "relat": 14, "consecut": 14, "almost": 14, "show": [14, 15], "soon": 14, "whatev": 14, "tmux": 14, "disconnect": 14, "critic": 14, "lambda": 14, "forc": 14, "24": 14, "rise": 14, "charg": 14, "over": [14, 16], "rid": 14, "final": 14, "multi": [14, 15], "inher": 14, "overal": 14, "alloc": 14, "normal": 14, "monitor_fleet_id": 14, "sfr": 14, "9999ef99": 14, "99fc": 14, "9d9d": 14, "9999": 14, "9999999e99ab": 14, "monitor_app_nam": 14, "2021_12_13_project_analysi": 14, "monitor_ecs_clust": 14, "monitor_queue_nam": 14, "2021_12_13_project_analysisqueu": 14, "monitor_bucket_nam": 14, "monitor_log_group_nam": 14, "monitor_start_tim": 14, "1649187798951": 14, "older": 14, "troubl": 14, "kept": 14, "solut": 15, "beyond": 15, "throw": 15, "bug": 15, "expected_number_of_fil": 15, "6": 15, "batch_data": 15, "uncheck": 15, "valueerror": 15, "dictionari": 15, "sequenc": 15, "element": 15, "syntax": 15, "consid": 15, "Or": 15, "patient": 15, "seen": 15, "sqs_queue_inform": 15, "invalid": 15, "routin": 15, "unrecover": 15, "No": 15, "extra": 15, "comma": 15, "somewher": 15, "invis": 15, "excel": 15, "panda": 15, "to_csv": 15, "pass": 15, "index": 15, "datafram": 15, "indexerror": 15, "bound": 15, "axi": 15, "lead": 15, "zero": 15, "ie": [15, 16], "metadata_sit": 15, "pad": 15, "batchfil": 15, "mistak": 15, "exporttospreadsheet": 15, "sub": 15, "unusu": 15, "criteria": 15, "cppipe": 15, "outcom": 15, "typo": 15, "a1": 15, "attent": 15, "reflect": 15, "load_data": 15, "perinst": 15, "ioerror": 15, "indic": 15, "permisson": 15, "cannot": 15, "err": 15, "slowdown": 15, "putobject": 15, "retri": 15, "rate": 15, "preval": 15, "backlog": 15, "transport": 15, "endpoint": 15, "stochast": 15, "ssl": 15, "certif": 15, "subject": 15, "target": 15, "host": 15, "xxx": 15, "yyi": 15, "dot": 15, "use_path_request_styl": 15, "silent": 15, "mito": 15, "miss": 15, "referenc": 15, "filenam": 15, "arrai": 15, "reduct": 15, "header": 15, "hint": 15, "field": 15, "mykeypair": 15, "examplefleet": 15, "With": 15, "examplejob_plateid": 15, "filterobject": 15, "saveimag": 15, "dockerhub": 16, "dcpversion_cellprofilervers": 16, "0_3": 16, "8": 16, "versionnumb": 16, "plugin": 16, "abil": 16, "boto": 16, "fabric": 16, "elimin": 16, "check_if_don": 16, "cheapli": 16, "slowli": 16, "launchdata": 16, "submiss": 16, "discount": 16, "compat": 16, "item": 16, "discuss": 16}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"aw": [0, 5, 6, 8, 10, 11], "hygien": 0, "script": 0, "clean": 0, "out": [0, 13], "old": 0, "alarm": 0, "log": [0, 5, 11], "group": [0, 11], "sq": [1, 11], "queue": [1, 11, 14], "inform": [1, 11], "sqs_queue_nam": 1, "sqs_dead_letter_queu": 1, "sqs_message_vis": 1, "exampl": [1, 3, 6, 11], "advanc": 2, "configur": [2, 3, 8, 10, 11, 12, 13], "dcp": [2, 6, 9, 13], "chang": 2, "you": 2, "can": [2, 7], "make": 2, "distribut": [2, 4, 7, 8], "cellprofil": [2, 4, 7, 8], "outsid": 2, "docker": [2, 7, 11], "contain": 2, "requir": [2, 10], "your": [2, 6, 12, 13, 14], "own": 2, "pipelin": 2, "us": [2, 6, 7, 9, 14], "runcellpos": 2, "plugin": [2, 11], "config": [3, 6, 11, 13], "py": [3, 12], "what": [4, 7, 8], "doe": [4, 8], "cost": 4, "cloudwatch": [5, 11], "dashboard": [5, 11], "fulfilledcapac": 5, "numberofmessagesreceiv": 5, "delet": 5, "memoryutil": 5, "messagesvis": 5, "notvis": 5, "distinct": 5, "all": 5, "show": 5, "error": 5, "interact": 5, "extern": 6, "bucket": 6, "setup": 6, "read": 6, "from": [6, 10], "cell": 6, "paint": 6, "galleri": 6, "write": 6, "collabor": 6, "s": 6, "permiss": 6, "In": 6, "account": 6, "instanc": [6, 8, 11], "why": 7, "would": 7, "i": [7, 8], "want": 7, "thi": [7, 8, 10], "do": [7, 8], "need": 7, "have": 7, "run": [7, 8, 11, 13, 14], "contribut": 7, "code": 7, "who": 7, "made": 7, "happen": 8, "when": [8, 14], "an": 8, "look": 8, "like": 8, "how": 8, "determin": 8, "my": 8, "pass": 9, "file": [9, 11, 12, 14], "metadata": 9, "load": 9, "data": 9, "creat": [9, 10], "loaddata": 9, "csv": 9, "batch": 9, "list": 9, "step": [10, 11, 12, 13, 14], "0": [10, 16], "prep": 10, "1": [10, 11, 13, 16], "manual": [10, 14], "resourc": 10, "2": [10, 12, 16], "automat": 10, "3": [10, 13], "auxiliari": 10, "4": [10, 14], "increas": 10, "spot": [10, 13], "limit": 10, "The": 10, "control": 10, "node": 10, "scratch": 10, "instal": 10, "python": 10, "8": 10, "higher": 10, "pip": 10, "clone": 10, "repositori": 10, "cli": 10, "s3f": 10, "fuse": 10, "option": 10, "ami": 10, "remov": 10, "long": 10, "term": 10, "infrastructur": 10, "role": 10, "lambda": 10, "monitor": [10, 11, 14], "sn": 10, "ec2": [10, 11], "compon": 11, "gener": 11, "set": 11, "AND": 11, "ec": 11, "environ": 11, "creation": 11, "redund": 11, "check": 11, "submit": 12, "job": 12, "overview": 12, "altern": 12, "submiss": 12, "run_batch_gener": 12, "start": 13, "cluster": 13, "fleet": 13, "request": 13, "paramet": 13, "must": 13, "current": 13, "version": [13, 16], "To": 13, "region": 13, "where": 13, "isn": 13, "t": 13, "avail": 13, "date": 13, "auto": 14, "function": 14, "while": 14, "analysi": 14, "total": 14, "empti": 14, "ar": 14, "visibl": 14, "Not": 14, "messag": 14, "cheapest": 14, "mode": 14, "troubleshoot": 15, "histori": 16, "forthcom": 16, "0rc2": 16, "releas": 16, "20201110": 16, "0rc1": 16, "20201105": 16, "20201103": 16, "20200109": 16, "updat": 16, "through": 16, "20191002": 16, "20181108": 16, "20170217": 16, "20170221": 16, "bugfix": 16, "20181018": 16, "20170213": 16}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 56}})